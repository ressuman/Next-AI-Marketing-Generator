// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/utils/constants";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: string;
};

// Define the handler function
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { input } = req.body;
//   console.log("Input:", input);

//   try {
//     // Use the OpenAI client to create a chat completion
//     const response = await client.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a marketing expert." },
//         {
//           role: "user",
//           content: `Write a short and exciting marketing copy for this topic: "${input}".`,
//         },
//       ],
//       temperature: 0.85,
//       max_tokens: 40,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//       response_format: {
//         type: "text",
//       },
//     });

//     console.log("Full response:", response);
//     //console.log("Full response:", response.data);

//     // Extract the text response
//     const suggestion = response.choices[0]?.message?.content;
//     console.log("Suggestion:", suggestion);
//     const suggestion1 = response.choices[0]?.message;
//     console.log("Suggestion1:", suggestion1);

//     if (!suggestion) {
//       throw new Error("No suggestion found");
//     }
//     if (!suggestion1) {
//       throw new Error("No suggestion1 found");
//     }

//     res.status(200).json({ result: suggestion.trim() });
//   } catch (error) {
//     console.error("Error creating completion:", error);
//     res.status(500).json({ result: "Error generating response" });
//   }
// }

// Handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input } = req.body;
  console.log("Input:", input);

  try {
    // Generate completion
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a marketing expert." },
        {
          role: "user",
          content: `Write a short and exciting marketing copy for this topic: "${input}".`,
        },
      ],
      temperature: 0.85,
      max_tokens: 40,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("Full response:", response);

    // Extract text response
    const suggestion = response.choices[0]?.message?.content;
    console.log("Suggestion:", suggestion);

    if (!suggestion) {
      throw new Error("No suggestion found");
    }

    res.status(200).json({ result: suggestion.trim() });
  } catch (error) {
    console.error("Error creating completion:", error);
    res.status(500).json({ result: "Error generating response" });
  }
}
