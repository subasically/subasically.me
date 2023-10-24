// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

export default async function aboutMeAI() {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                "role": "user",
                "content": "write an about me and here are the things I like to do\nspending time with my wife and daughters,\nweb development,\nvideo games,\nbuilding computers,\nmanaging my homelab"
            },
            {
                "role": "user",
                "content": "format it as tech nerdy"
            },
            {
                "role": "assistant",
                "content": "keep it to 500 characters"
            },
            {
                "role": "assistant",
                "content": "Hello, I'm your resident tech-geek! In the digital world, my passions lie with web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge homelab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness."
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response;
}