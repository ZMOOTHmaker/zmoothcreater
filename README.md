# Zmooth Assistant Chatbot

A custom chatbot for Zmooth Enterprise powered by OpenAI.

## How to Use

1. Deploy this project on Render.com or any Node.js hosting.
2. Set environment variable:
   - `OPENAI_API_KEY` = your OpenAI key
3. App listens on port 3000 and responds at `/chat`.

## Example

Frontend can POST to:

```
POST /chat
{
  "message": "Hello"
}
```

Response:

```
{
  "reply": "Hi! How can I help you?"
}
```
