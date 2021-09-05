import { PRODUCTION } from "@/constants";

export const isProduction = (string: string) =>
    string.toLowerCase() === PRODUCTION;
