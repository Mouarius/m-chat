export const getRandomColorIndex = () => {
  return Math.floor(Math.random() * 50)
}

export const appColorCode = `custom-${getRandomColorIndex()}`
