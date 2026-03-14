export function removeLeadingSlash(path) {
  if (!path) return path // если пустая строка или undefined
  return path.startsWith('/') ? path.slice(1) : path
}
