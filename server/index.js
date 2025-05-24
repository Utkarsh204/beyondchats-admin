const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

app.post('/api/openai/suggestions', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1000,
      temperature: 0.7,
      n: 1,
    });

    const rawText = completion.choices[0].message.content.trim();

    res.json({ suggestions: [rawText] });

  } catch (error) {
    console.error('OpenRouter API error:', error);

    // Mock fallback
    const mockSuggestions = [
      "Sorry, I'm currently unable to process your request.",
      "Please try again later or check your API usage.",
    ];
    res.json({ suggestions: mockSuggestions });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
