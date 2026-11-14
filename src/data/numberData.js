export const numberData = Array.from({ length: 10 }, (_, index) => ({
  id: `number-${index}`,
  type: 'number',
  title: String(index),
  subtitle: `Number ${index}`,
  description: `Learn the Sri Lankan Sign Language sign for number ${index}.`,
  image: null,
  index,
}));
