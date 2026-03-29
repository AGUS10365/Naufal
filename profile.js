export default async function handler(req, res) {
    const apiKey = 'VPedia_u2abhcsaqtqvx8sz';
    const target = 'https://Fupei-Pedia.web.id/h2h/profile';

    try {
        const response = await fetch(target, {
            method: 'GET',
            headers: {
                'X-APIKEY': apiKey,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}
