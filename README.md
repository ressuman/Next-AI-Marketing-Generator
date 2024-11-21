This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

# AI Marketing Generator

AI Marketing Generator is a web application built with Next.js that uses OpenAI's GPT model to generate short and engaging marketing content. With a simple user interface, you can input a topic and receive AI-generated marketing copy in seconds. The application leverages OpenAI's chat completion API for content generation and is styled with Tailwind CSS.

---

## Project Structure

```
.
├── 📁pages                  # Next.js pages
│   ├── 📁api                # API route handlers
│   │   └── marketing-ai.ts  # API handler for OpenAI integration
│   ├── 📁fonts              # Custom font files
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── _app.tsx             # Custom App component
│   ├── _document.tsx        # Custom Document for server-side styles
│   └── index.tsx            # Main application page
├── 📁public                 # Public assets
│   ├── favicon.ico
│   ├── logoai.jpg
│   ├── globe.svg
│   ├── file.svg
│   ├── window.svg
│   └── vercel.svg
├── 📁utils                  # Utility files
│   └── constants.ts         # Configuration for OpenAI client
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## Features

- **Input Topic**: Users can input a topic (max 50 characters) for marketing copy generation.
- **AI-Powered Generation**: Leverages OpenAI's GPT-3.5-turbo to create short, exciting marketing content.
- **Responsive UI**: Built with Tailwind CSS for a clean and responsive design.
- **Error Handling**: Includes character limit validation and error handling for API responses.
- **Loading State**: Displays a loading spinner while fetching AI suggestions.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js (v18 or higher) is installed.
- **OpenAI API Key**: Set up an OpenAI account and obtain your API key.

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/ai-marketing-generator.git
   cd ai-marketing-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

   ```bash
   OPENAI_API_SECRET_KEY=your_openai_api_key_here
   ```

---

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

### Build

To build the application for production:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

---

## API Endpoints

### `POST /api/marketing-ai`

**Description**: Generates marketing content for the provided topic.

**Request**:

- Body:
  ```json
  {
    "input": "Your topic here"
  }
  ```

**Response**:

- Success:

  ```json
  {
    "result": "Your AI-generated marketing copy."
  }
  ```

- Error:
  ```json
  {
    "result": "Error generating response"
  }
  ```

---

## Dependencies

- [Next.js](https://nextjs.org/) - Framework for server-rendered React applications.
- [OpenAI](https://openai.com/) - API for generating marketing content.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [React Spinners](https://www.npmjs.com/package/react-spinners) - Loading spinner components.

---

## Customization

### Fonts

- Add custom fonts in the `pages/fonts` directory and import them in `_document.tsx`.

### Tailwind CSS

- Modify `tailwind.config.js` to customize styles as needed.

---

## Screenshots

### Home Page

![Home Page](public/logoai.jpg)

### API Integration

The app uses `fetch` to call the `/api/marketing-ai` endpoint, sending the user’s input and retrieving the AI-generated marketing copy.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Start

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
