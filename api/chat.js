
export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    const { contents } = request.body;

    try {
        const fetchResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        const data = await fetchResponse.json();
        return response.status(200).json(data);
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        return response.status(500).json({ error: 'Error processing request' });
    }
}
