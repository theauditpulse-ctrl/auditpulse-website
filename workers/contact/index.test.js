import test from 'node:test';
import assert from 'node:assert/strict';

import worker from './index.js';

const htmlAsset = '<!doctype html><html><head><title>AuditPulse</title></head><body>app shell</body></html>';

const assets = {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/index.html') {
      return new Response(htmlAsset, {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('not found', { status: 404 });
  },
};

test('serves the app shell for GET requests to SPA routes', async () => {
  const response = await worker.fetch(new Request('https://example.com/about'), { ASSETS: assets });

  assert.equal(response.status, 200);
  assert.match(await response.text(), /AuditPulse/);
});

test('responds to OPTIONS preflight requests', async () => {
  const response = await worker.fetch(new Request('https://example.com/api/contact', { method: 'OPTIONS' }), { ASSETS: assets });

  assert.equal(response.status, 204);
});
