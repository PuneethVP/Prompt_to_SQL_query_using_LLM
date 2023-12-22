import {OpenAI} from "openai";
import dotenv from "dotenv";
dotenv.config();

const openAiApiKey = process.env.OPENAI_API_KEY

if(!openAiApiKey){
    console.error("OPENAI_API_KEY  is not set");
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: openAiApiKey // This is also the default, can be omitted
  });

export default openai
