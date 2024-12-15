export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // 获取Vercel部署区域
  const vercelId = request.headers.get('x-vercel-id');
  const region = vercelId?.split('.')[0] || 'unknown';
  
  // 区域映射
  const regionMap = {
    'hnd1': '东京',
    'sfo1': '旧金山',
    'iad1': '华盛顿',
    'sin1': '新加坡',
    'fra1': '法兰克福',
    'dub1': '都柏林',
    'pdx1': '波特兰',
    'gru1': '圣保罗'
  };

  return new Response(JSON.stringify({
    region: region,
    location: regionMap[region] || region
  }), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1800'
    }
  });
}
