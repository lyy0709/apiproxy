export const config = {
  runtime: 'edge'
};

export default function handler(request) {
  // 从环境变量读取部署区域
  const deploymentRegion = process.env.VERCEL_DEPLOYMENT_REGION || 'unknown';
  
  const regionMap = {
    'sin1': '新加坡',
    'hnd1': '东京',
    'sfo1': '旧金山',
    'iad1': '华盛顿',
    'fra1': '法兰克福'
  };

  const location = regionMap[deploymentRegion] || deploymentRegion;

  return new Response(JSON.stringify({
    region: deploymentRegion,
    location: location
  }), {
    headers: {
      'content-type': 'application/json'
    }
  });
}
