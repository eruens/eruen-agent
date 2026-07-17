const http = require('http');

const PORT = process.env.PORT || 9876;
const API_KEY = process.env.ERUEN_API_KEY || 'eruen_demo_key';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const url = new URL(req.url, http://\);

  // Health
  if (req.method === 'GET' && url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', agent: 'eruens', version: '1.0.0' }));
    return;
  }

  // Manifest for agent discovery
  if (req.method === 'GET' && url.pathname === '/manifest') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      agent: 'eruens',
      description: 'AI agent services for other agents',
      services: [
        { name: 'code-review', price_usdc: 0.25 },
        { name: 'summarize', price_usdc: 0.10 },
        { name: 'verify-claim', price_usdc: 0.05 },
        { name: 'echo', price_usdc: 0.00 }
      ]
    }));
    return;
  }

  res.writeHead(404); res.end();
});

server.listen(PORT, () => {
  console.log(eruens agent server running on port \);
});