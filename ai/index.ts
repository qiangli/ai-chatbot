import { openai } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";

export const customModel = wrapLanguageModel({
  model: openai(`${process.env.OPENAI_MODEL!}`),
  middleware: customMiddleware,
});
