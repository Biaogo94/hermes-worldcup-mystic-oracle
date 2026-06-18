#!/usr/bin/env node
import fs from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';

const require = createRequire(import.meta.url);

function usage() {
  return `Usage:
  node scripts/qimen_mcp_client.mjs --datetime ISO_TIME [--location TEXT] [--purpose 综合] [--type 四柱] [--method 时家] [--server PATH] [--tool qimen_calculate|qimen_detect_geju] [--gong 1-9] [--pretty]

Default server lookup:
  QIMEN_MCP_SERVER
  ~/.codex/mcp/qimen/mcp/server.mjs
`;
}

function parseArgs(argv) {
  const args = {
    purpose: '综合',
    type: '四柱',
    method: '时家',
    tool: 'qimen_calculate',
    pretty: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--pretty') {
      args.pretty = true;
      continue;
    }
    if (arg === '--help' || arg === '-h') {
      args.help = true;
      continue;
    }
    if (!arg.startsWith('--')) {
      throw new Error(`Unexpected argument: ${arg}`);
    }
    const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const value = argv[i + 1];
    if (value === undefined || value.startsWith('--')) {
      throw new Error(`Missing value for ${arg}`);
    }
    args[key] = value;
    i += 1;
  }
  return args;
}

function defaultServerPath() {
  if (process.env.QIMEN_MCP_SERVER) return process.env.QIMEN_MCP_SERVER;
  return path.join(os.homedir(), '.codex', 'mcp', 'qimen', 'mcp', 'server.mjs');
}

function loadMcpSdk(serverPath) {
  const localRequire = createRequire(path.join(path.dirname(path.dirname(serverPath)), 'package.json'));
  try {
    return {
      Client: require('@modelcontextprotocol/sdk/client/index.js').Client,
      StdioClientTransport: require('@modelcontextprotocol/sdk/client/stdio.js').StdioClientTransport,
    };
  } catch {
    return {
      Client: localRequire('@modelcontextprotocol/sdk/client/index.js').Client,
      StdioClientTransport: localRequire('@modelcontextprotocol/sdk/client/stdio.js').StdioClientTransport,
    };
  }
}

function normalizePath(input) {
  if (!input) return input;
  if (input.startsWith('~')) return path.join(os.homedir(), input.slice(1));
  return path.resolve(input);
}

function buildToolArgs(args) {
  const payload = {
    datetime: args.datetime,
    purpose: args.purpose,
    location: args.location,
    type: args.type,
    method: args.method,
  };
  Object.keys(payload).forEach((key) => {
    if (payload[key] === undefined || payload[key] === '') delete payload[key];
  });
  if (args.tool === 'qimen_explain_gong') payload.gong = args.gong;
  return payload;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write(usage());
    return 0;
  }
  if (!args.datetime) throw new Error('--datetime is required');
  if (args.tool === 'qimen_explain_gong' && !args.gong) throw new Error('--gong is required for qimen_explain_gong');

  const serverPath = normalizePath(args.server || defaultServerPath());
  if (!fs.existsSync(serverPath)) {
    throw new Error(`Qimen MCP server not found: ${serverPath}`);
  }
  const { Client, StdioClientTransport } = loadMcpSdk(serverPath);

  const client = new Client({ name: 'worldcup-mystic-oracle-qimen-client', version: '1.0.0' });
  const transport = new StdioClientTransport({
    command: 'node',
    args: [serverPath],
  });

  await client.connect(transport);
  try {
    const result = await client.callTool({
      name: args.tool,
      arguments: buildToolArgs(args),
    });
    if (result.isError) {
      const text = result.content?.map((item) => item.text).filter(Boolean).join('\n') || 'MCP tool returned an error';
      throw new Error(text);
    }
    const data = result.structuredContent || JSON.parse(result.content?.[0]?.text || '{}');
    process.stdout.write(JSON.stringify(data, null, args.pretty ? 2 : 0));
    process.stdout.write('\n');
  } finally {
    await client.close();
  }
  return 0;
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
