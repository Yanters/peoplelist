export function convertPythonNameToLabel(name: string): string {
  return name
    .replace('_', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
