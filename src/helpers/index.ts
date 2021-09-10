import { PRODUCTION } from "@/constants";

/**
 * Check if the current environment is production
 * @param string Enviroment to check
 * @returns boolean true if enviroment is production
 */
export const isProduction = (string: string) =>
    string.toLowerCase() === PRODUCTION;
