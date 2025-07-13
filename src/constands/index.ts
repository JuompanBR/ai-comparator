import { AIModelItemType, ComparismCriteriaItem } from "../types";

const USERCRITERIA: ComparismCriteriaItem[] = [
  { id: "1", data: "Ease of Use" },
  { id: "2", data: "Response Quality" },
  { id: "3", data: "Speed of Responses" },
  { id: "4", data: "Creativity" },
  { id: "5", data: "Personalization" },
  { id: "6", data: "Multilingual Support" },
  { id: "7", data: "Voice Interaction" },
  { id: "8", data: "Free Tier Limitations" },
  { id: "9", data: "Mobile App Availability" },
  { id: "10", data: "Access to Live Information" },
  { id: "11", data: "File Upload & Document Handling" },
  { id: "12", data: "Coding Help" },
  { id: "13", data: "Math and Logic Reasoning" },
  { id: "14", data: "Privacy and Data Use" },
  { id: "15", data: "Customer Support Availability" },
  { id: "16", data: "Tool/Plugin Support" },
  { id: "17", data: "Custom Instructions or Personas" },
  { id: "18", data: "Fun and Personality" },
  { id: "19", data: "Visual or Image Understanding" },
  { id: "20", data: "Educational Help" },
];

const GENAIs: AIModelItemType[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "A general-purpose conversational AI by OpenAI with GPT-4o, supporting text, code, image, voice, and plugins.",
    url: "https://chat.openai.com"
  },
  {
    id: "2",
    name: "Gemini",
    description: "Google's multimodal AI assistant capable of text, code, and image understanding, integrated with Google Workspace.",
    url: "https://gemini.google.com"
  },
  {
    id: "3",
    name: "Claude",
    description: "Anthropic's conversational AI assistant known for safety, long context handling, and strong reasoning and writing skills.",
    url: "https://claude.ai"
  },
  {
    id: "4",
    name: "Perplexity AI",
    description: "An AI-powered search and conversational tool that provides real-time, cited answers using up-to-date web data.",
    url: "https://www.perplexity.ai"
  },
  {
    id: "5",
    name: "Mistral Chat",
    description: "A lightweight and open conversational AI by Mistral AI using open-weight models like Mixtral and Mistral-7B.",
    url: "https://chat.mistral.ai"
  },
  {
    id: "6",
    name: "Microsoft Copilot",
    description: "An AI assistant powered by OpenAI's models and embedded across Microsoft Office apps like Word, Excel, and Outlook.",
    url: "https://copilot.microsoft.com"
  },
  {
    id: "7",
    name: "Meta AI",
    description: "Meta's conversational assistant based on LLaMA models, integrated into Messenger, Instagram, and WhatsApp (US only).",
    url: "https://about.meta.com/blog/ai/meta-ai-assistant"
  },
  {
    id: "8",
    name: "Pi (Personal Intelligence)",
    description: "Inflection AI's emotionally intelligent chatbot focused on friendly, helpful, and conversational interactions.",
    url: "https://heypi.com"
  }
];

export { GENAIs, USERCRITERIA };