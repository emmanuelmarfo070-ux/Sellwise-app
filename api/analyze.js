// This file runs on the server, so the API key is NEVER shown to the user
export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY; // Grabs the key from the vault
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
