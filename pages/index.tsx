import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
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
        <h1 className="text-2xl font-b  old text-center pb-2">
          AI Marketing Generator
        </h1>
        {/* Input field for marketing copy */}
      </div>
    </div>
  );
}
