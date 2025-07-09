const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are Zmooth Assistant, a helpful online shopping bot for Zmooth Enterprise.' },
      { role: 'user', content: userMessage }
    ]
  });

  res.json({ reply: completion.data.choices[0].message.content });
});

app.listen(3000, () => {
  console.log('Zmooth Assistant is live on port 3000');
});
