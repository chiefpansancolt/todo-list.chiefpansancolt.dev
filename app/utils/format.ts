/**
 * Formats date to localized string
 */
export const formatDate = (
  dateString: string,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string => {
  return new Date(dateString).toLocaleDateString(locale, options);
};

/**
 * Gets current year for copyright notices
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};
