export async function getData() {
  const res = await fetch('https://mapi-staging.tsports.com/v1/contents/VOD/0/0/5/0/1/1',{cache: "force-cache"}, {
    method: 'GET',
    crossorigin: true,
    mode: 'no-cors',
    headers: {
      'API-REQUEST-HEADER':
        'LyNDXpYEXhqpW/uYy41psRhx5EhZnlZrUJFfnEPHblPRmofOxGSYcEJSkZhDlwMtTw96kZRzRNSfdvFdUJcmtd5m+ztECfIXacJBboVqNO7BeBCvUoM87DGIuvSX1lmQiITPCPmTqAzHZ1CMQk6uYhtjJiygO7dt40SkVDRwmdHnOeVfBfJMJp3d8kWfj7LU7P9b298kcQvywZwHKuERNV6+g6RF79bq8Ldsyuwn96p9E8Mlcq86DQSuyKuQjGF9GaqRpWxgTMVQ6aOAjWHXQ5IA3cRAdSo1R5hSuHWtMwQd5qJP9DCxUah7blk6hrgWRXjykGo9uv9BeaI0bl9bcs/eVaIYLE2Gf5BULvzxxEQ4V3m5StcdLdY4zalr4k1ZGa+qLTYozaxm1qP7x92Jiw==',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.text()
}
