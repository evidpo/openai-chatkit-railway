import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Что можно везти в ручной клади?",
    prompt: "Что можно везти в ручной клади?",
    icon: "circle-question",
  },
  {
    label: "Правила провоза багажа",
    prompt: "Правила провоза багажа",
    icon: "circle-question",
  },
  {
    label: "Перевозка животных",
    prompt: "Перевозка животных",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Задайте вопрос";

export const GREETING = "Здравствуйте! Я - помощник авиакомпании Северсталь.";

export const ATTACHMENTS_ENABLED = false;

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "pill",
});
