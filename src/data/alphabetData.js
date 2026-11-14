
export const alphabetData = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => ({
  id: `letter-${letter}`,
  type: 'alphabet',
  title: letter,
  subtitle: `Letter ${letter}`,
  description: `Learn the Sri Lankan Sign Language sign for the letter ${letter}.`,
  image: null,
  index: index + 1,
}));
