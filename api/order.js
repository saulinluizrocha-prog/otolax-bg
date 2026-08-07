export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = 'YZA0ZJDLZWYTZDK4ZC00YMJJLWJJNJATODZKNGJJMTE2MZQ4';
  const stream_code = 'rpwl8';

  const { phone, name, sub1, sub2, sub3, sub4, sub5 } = req.body;

  const payload = {
    stream_code,
    client: {
      phone: phone || null,
      name: name || null,
      surname: null,
      email: null,
      address: null,
      ip: null,
      country: null,
      city: null,
      postcode: null
    },
    sub1: sub1 || null,
    sub2: sub2 || null,
    sub3: sub3 || null,
    sub4: sub4 || null,
    sub5: sub5 || null
  };

  try {
    const response = await fetch('https://affiliate-api.drcash.pro/v1/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.text();
    return res.status(response.status).send(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
