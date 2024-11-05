import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>
          AI Marketing Generator - Create Engaging Content Instantly
        </title>
        <meta
          name="description"
          content="AI Marketing Generator is an advanced marketing content creation tool leveraging OpenAI's API. Generate tailored and engaging marketing copy, blog posts, social media content, and more with ease and precision."
        />
        <link rel="icon" href="/logoai.jpg" />
      </Head>

      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-2xl font-bold text-center pb-2">
          AI Marketing Generator
        </h1>
        {/* Input field for marketing  */}
        <div className="flex flex-col gap-4 justify-center w-1/3 mx-auto">
          <div className="relative w-full">
            <textarea
              rows={3}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border-2 border-gray-300 bg-white p-4 rounded-lg text-sm focus:outline-none resize-none"
              placeholder="Enter your topic here"
            />
            {/* Character limit in bottom right of textarea */}
            <div
              className={`absolute
              ${input.length > 100 ? "text-red-500" : "text-gray-400"}
              bottom-2 right-2 text-xs`}
            >
              <span>{input.length}</span>/100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
