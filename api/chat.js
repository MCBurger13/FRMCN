export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!process.env.GEMINI_API_KEY) {
        return response.status(500).json({ error: 'Missing GEMINI_API_KEY' });
    }

    const apiKey = process.env.GEMINI_API_KEY.trim();

    if (!apiKey) {
        return response.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    const { contents } = request.body;

    try {
        const fetchResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        const data = await fetchResponse.json();

        if (!fetchResponse.ok) {
            console.error('Gemini API Error:', JSON.stringify(data, null, 2));
            return response.status(fetchResponse.status).json({ error: data.error?.message || 'Gemini API Error' });
        }

        return response.status(200).json(data);
    } catch (error) {
        console.error('Server Error:', error);
        return response.status(500).json({ error: 'Error processing request' });
    }
}
