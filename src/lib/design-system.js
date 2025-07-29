// Just your custom colors - add/modify as needed
export const colors = {
  orange: '#FF6F61',
  primaryBg: '#003262',
  secondaryBg: '#6A0DAD',
  greenBg: '#0E9035',
  skyBg: '#0B87AC',
  coldGrayBg: '#959595',
  homeBg: '#EDF7FC',
  pinkBg: '#F3E3F6',
  cuteBlue: '#EDF7FC',
  white: '#ffffff',
  black: '#000000',
  // Add your new colors here
  myNewColor: '#FF0000',
  brandColor: '#00FF00',
}

// Simple utility function
export const getColor = (colorName) => colors[colorName]

// Export for easy importing
export default colors 