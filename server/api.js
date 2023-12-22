import { Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv";
dotenv.config();

const openAiApiKey = process.env.OPENAI_API_KEY

if(!openAiApiKey){
    console.error("OPENAI_API_KEY  is not set");
    process.exit(1);
}

const configuration = new Configuration({
    apiKey : openAiApiKey
})

const openai = new OpenAIApi(configuration)

export default openai
