// Titles like "AutoSIEM — Detection Engineering" render as a name plus a quieter subtitle.
export const splitName = (title) => {
  const parts = title.split(' — ')
  return parts.length > 1 ? [parts[0], parts.slice(1).join(' — ')] : [title, '']
}
