export default function handler(req, res) {
    const city = req.headers['x-vercel-ip-city'] || 'Unknown';
    const region = req.headers['x-vercel-ip-country-region'] || 'Unknown';
    const country = req.headers['x-vercel-ip-country'] || 'Unknown';
  
    res.status(200).json({ city, region, country });
  }
  