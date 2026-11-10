import { alphabetData } from './alphabetData';
import { numberData } from './numberData';
import { wordData } from './signData';

// Quiz questions test recognition of the local learning labels.
// Replace/extend these with questions based on verified Sri Lankan sign resources.
const allItems = [...alphabetData, ...numberData, ...wordData];

export const quizData = [
  ...alphabetData.slice(0, 7).map((item, i) => ({
    id: `q-letter-${i + 1}`,
    question: `Which letter comes after ${item.title}?`,
    answer: alphabetData[(item.index) % alphabetData.length].title,
    options: [
      alphabetData[(item.index) % 26].title,
      alphabetData[(item.index + 1) % 26].title,
      alphabetData[(item.index + 2) % 26].title,
      alphabetData[(item.index + 3) % 26].title,
    ],
    explanation: `The next letter after ${item.title} is ${alphabetData[item.index % 26].title}.`,
  })),
  ...numberData.slice(0, 5).map((item, i) => ({
    id: `q-number-${i + 1}`,
    question: `What number comes after ${item.title}?`,
    answer: String((Number(item.title) + 1) % 10),
    options: [
      String((Number(item.title) + 1) % 10),
      String((Number(item.title) + 2) % 10),
      String((Number(item.title) + 3) % 10),
      String((Number(item.title) + 4) % 10),
    ],
    explanation: `The next number after ${item.title} is ${(Number(item.title) + 1) % 10}.`,
  })),
  ...wordData.slice(0, 8).map((item, i) => {
    const distractors = wordData.filter((w) => w.id !== item.id).slice(i, i + 3).map((w) => w.title);
    return {
      id: `q-word-${i + 1}`,
      question: `Which vocabulary item belongs to the category "${item.category}"?`,
      answer: item.title,
      options: [item.title, ...distractors].sort((a, b) => a.localeCompare(b)),
      explanation: `${item.title} is in the ${item.category} category.`,
    };
  }),
];
