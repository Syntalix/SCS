This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤖 AI Chatbot Integration

This project includes a fully functional AI chatbot powered by Google's Gemini API.

### Features
- Real-time AI conversations
- Context-aware responses about Syntalix services
- Professional UI with dark/light mode support
- Quick question suggestions
- Fallback responses when API is unavailable
- Mobile-responsive chat interface

### Setup
1. Get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env.local` file in the root directory
3. Add your API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Usage
- Click the robot icon in the bottom-right corner to open the chat
- The chatbot knows about all Syntalix services, pricing, and capabilities
- It provides helpful information about AI/ML solutions, web development, and mobile apps
- Contact information is readily available for direct communication

### API Endpoint
The chatbot uses `/api/chatbot` endpoint which:
- Accepts POST requests with message and conversation history
- Returns AI-generated responses from Gemini
- Includes error handling and fallback responses
- Maintains conversation context for better interactions
