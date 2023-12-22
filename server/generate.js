import openai from "./api.js";

const generate = async (queryDescription) => {
const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { "role": "system", "content": `Convert the following natural language description into a SQL query: ${queryDescription}.` },
    ],
    max_tokens: 100,
    temperature: 2
});

    return response.choices[0].message.content
}

export default generate
