/**
 * Convert first letter to uppercase
 */
export const upperFirst = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
