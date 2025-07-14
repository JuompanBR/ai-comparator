import { AIModelItemType, ComparismCriteriaItem } from "../types";


const DEFAULT_LANGUAGE = 'en';
const USERCRITERIA: ComparismCriteriaItem[] = [
  { id: "1", data: { en: "Ease of Use", fr: "Facilité d'utilisation" } },
  { id: "2", data: { en: "Response Quality", fr: "Qualité des réponses" } },
  { id: "3", data: { en: "Speed of Responses", fr: "Vitesse des réponses" } },
  { id: "4", data: { en: "Creativity", fr: "Créativité" } },
  { id: "5", data: { en: "Personalization", fr: "Personnalisation" } },
  { id: "6", data: { en: "Multilingual Support", fr: "Support multilingue" } },
  { id: "7", data: { en: "Voice Interaction", fr: "Interaction vocale" } },
  { id: "8", data: { en: "Free Tier Limitations", fr: "Limites de l'offre gratuite" } },
  { id: "9", data: { en: "Mobile App Availability", fr: "Disponibilité de l'application mobile" } },
  { id: "10", data: { en: "Access to Live Information", fr: "Accès à l'information en temps réel" } },
  { id: "11", data: { en: "File Upload & Document Handling", fr: "Téléversement de fichiers et gestion de documents" } },
  { id: "12", data: { en: "Coding Help", fr: "Aide à la programmation" } },
  { id: "13", data: { en: "Math and Logic Reasoning", fr: "Raisonnement mathématique et logique" } },
  { id: "14", data: { en: "Privacy and Data Use", fr: "Confidentialité et utilisation des données" } },
  { id: "15", data: { en: "Customer Support Availability", fr: "Disponibilité du support client" } },
  { id: "16", data: { en: "Tool/Plugin Support", fr: "Support d'outils/plugins" } },
  { id: "17", data: { en: "Custom Instructions or Personas", fr: "Instructions personnalisées ou personas" } },
  { id: "18", data: { en: "Fun and Personality", fr: "Divertissement et personnalité" } },
  { id: "19", data: { en: "Visual or Image Understanding", fr: "Compréhension visuelle ou d'images" } },
  { id: "20", data: { en: "Educational Help", fr: "Aide pédagogique" } },
];

const GENAIs: AIModelItemType[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: {
      en: "A general-purpose conversational AI by OpenAI, supporting text, code, image, voice, and plugins.",
      fr: "Une IA conversationnelle polyvalente développée par OpenAI, prenant en charge le texte, le code, les images, la voix et les plugins."
    },
    url: "https://chat.openai.com"
  },
  {
    id: "2",
    name: "Gemini",
    description: {
      en: "Google's multimodal AI assistant capable of text, code, and image understanding, integrated with Google Workspace.",
      fr: "L’assistant IA multimodal de Google, capable de comprendre texte, code et images, intégré à Google Workspace."
    },
    url: "https://gemini.google.com"
  },
  {
    id: "3",
    name: "Claude",
    description: {
      en: "Anthropic's conversational AI assistant known for safety, long context handling, and strong reasoning and writing skills.",
      fr: "L’assistant IA conversationnel d’Anthropic, reconnu pour sa sécurité, sa gestion de longs contextes, ainsi que ses compétences en raisonnement et rédaction."
    },
    url: "https://claude.ai"
  },
  {
    id: "4",
    name: "Perplexity AI",
    description: {
      en: "An AI-powered search and conversational tool that provides real-time, cited answers using up-to-date web data.",
      fr: "Un outil de recherche et conversation IA fournissant des réponses en temps réel, avec sources citées, utilisant des données web actualisées."
    },
    url: "https://www.perplexity.ai"
  },
  {
    id: "5",
    name: "Mistral Chat",
    description: {
      en: "A lightweight and open conversational AI by Mistral AI using open-weight models like Mixtral and Mistral-7B.",
      fr: "Une IA conversationnelle légère et ouverte par Mistral AI, utilisant des modèles open-weight tels que Mixtral et Mistral-7B."
    },
    url: "https://chat.mistral.ai"
  },
  {
    id: "6",
    name: "Microsoft Copilot",
    description: {
      en: "An AI assistant powered by OpenAI's models and embedded across Microsoft Office apps like Word, Excel, and Outlook.",
      fr: "Un assistant IA propulsé par les modèles OpenAI, intégré aux applications Microsoft Office comme Word, Excel et Outlook."
    },
    url: "https://copilot.microsoft.com"
  },
  {
    id: "7",
    name: "Meta AI",
    description: {
      en: "Meta's conversational assistant based on LLaMA models, integrated into Messenger, Instagram, and WhatsApp (US only).",
      fr: "L’assistant conversationnel de Meta basé sur les modèles LLaMA, intégré à Messenger, Instagram et WhatsApp (États-Unis uniquement)."
    },
    url: "https://about.meta.com/blog/ai/meta-ai-assistant"
  },
  {
    id: "8",
    name: "Pi (Personal Intelligence)",
    description: {
      en: "Inflection AI's emotionally intelligent chatbot focused on friendly, helpful, and conversational interactions.",
      fr: "Le chatbot émotionnellement intelligent d’Inflection AI, axé sur des interactions amicales, utiles et conversationnelles."
    },
    url: "https://heypi.com"
  }
];

export { GENAIs, USERCRITERIA, DEFAULT_LANGUAGE };