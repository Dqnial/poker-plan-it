// src/shared/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (error: any): string => {
  const detail = error.response?.data?.detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const firstError = detail[0];
    if (firstError.type === "string_too_short") {
      return `Пароль слишком короткий (минимум ${firstError.ctx?.min_length} символов)`;
    }
    return firstError.msg;
  }
  return "Произошла непредвиденная ошибка";
};
