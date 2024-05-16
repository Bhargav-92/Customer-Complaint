const express = require('express');
const fetch = require('node-fetch');
const TextModel = require('../models/TextModel');
require('dotenv').config();

const router = express.Router();

router.post('/translate', async (req, res) => {
  const { text } = req.body;
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

  if (!apiKey) {
    return res.status(500).send('Google Translate API key not found in environment variables.');
  }

  try {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${encodeURIComponent(text)}&target=en&key=${apiKey}`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    const newText = new TextModel({ originalText: text, translatedText });
    await newText.save();

    res.json({ translatedText });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).send('Error translating text');
  }
});

module.exports = router;
