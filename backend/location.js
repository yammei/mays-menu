const axios = require('axios');

async function getClosestServer() {
  const servers = [
    { name: 'us-east', url: 'http://us-east.example.com/ping' },
    { name: 'us-west', url: 'http://us-west.example.com/ping' }
  ];

  const latencyPromises = servers.map(async server => {
    const start = Date.now();
    await axios.get(server.url);
    const end = Date.now();
    return { ...server, latency: end - start };
  });

  const latencies = await Promise.all(latencyPromises);
  latencies.sort((a, b) => a.latency - b.latency);

  return latencies[0];
}

getClosestServer().then(closestServer => {
  console.log(`Closest server: ${closestServer.name}`);
});