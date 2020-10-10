export const hashtags = (text) => {
  text = text.split(' ')
  return text.filter(word => word[0] === '#')
}
