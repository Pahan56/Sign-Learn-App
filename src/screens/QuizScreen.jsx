
import React, { useMemo, useState } from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { quizData } from '../data/quizData';
import { colors } from '../constants/theme';

export default function QuizScreen() {
  // Load the first 15 questions from quizData.js
  const questions = useMemo(() => quizData.slice(0, 15), []);

  // Quiz states
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Current question
  const question = questions[current];

  // Handle empty quiz data
  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>No quiz questions available</Text>
          <Text style={styles.resultText}>
            Please check your quizData.js file.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Check selected answer
  function choose(option) {
    if (selected !== null) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((value) => value + 1);
    }
  }

  // Move to next question
  function next() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((value) => value + 1);
      setSelected(null);
    }
  }

  // Restart quiz
  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  // Quiz result screen
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.result}>
          <Text style={styles.resultEmoji}>🏆</Text>

          <Text style={styles.resultTitle}>
            Quiz Completed!
          </Text>

          <Text style={styles.score}>
            {score} / {questions.length}
          </Text>

          <Text style={styles.percentage}>
            {percentage}% Correct
          </Text>

          <Text style={styles.resultText}>
            You answered {score} questions correctly.
          </Text>

          <Pressable
            onPress={restart}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>
              Try Again
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // Main quiz screen
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Quiz heading */}
        <Text style={styles.heading}>
          ASL Image Quiz
        </Text>

        <Text style={styles.subtitle}>
          Question {current + 1} of {questions.length}
          {'  '}•{'  '}
          Score: {score}
        </Text>

        {/* Progress bar */}
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progress,
              {
                width: `${
                  ((current + 1) / questions.length) * 100
                }%`,
              },
            ]}
          />
        </View>

        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionLabel}>
            QUESTION {current + 1}
          </Text>

          <Text style={styles.question}>
            {question.question}
          </Text>
        </View>

        {/* Sign language image */}
        <View style={styles.imageCard}>
          <Image
            source={question.image}
            style={styles.signImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.chooseText}>
          Select the correct answer
        </Text>

        {/* Answer options */}
        {question.options.map((option, index) => {
          const isCorrect =
            selected !== null && option === question.answer;

          const isWrong =
            selected === option && option !== question.answer;

          return (
            <Pressable
              key={`${question.id}-${option}`}
              onPress={() => choose(option)}
              disabled={selected !== null}
              style={({ pressed }) => [
                styles.option,
                isCorrect && styles.correct,
                isWrong && styles.wrong,
                pressed && selected === null && styles.optionPressed,
              ]}
            >
              <Text style={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </Text>

              <Text
                style={[
                  styles.optionText,
                  (isCorrect || isWrong) && styles.whiteText,
                ]}
              >
                {option}
              </Text>

              {isCorrect && (
                <Text style={styles.mark}>✓</Text>
              )}

              {isWrong && (
                <Text style={styles.mark}>✕</Text>
              )}
            </Pressable>
          );
        })}

        {/* Answer feedback */}
        {selected !== null && (
          <View style={styles.feedback}>
            <Text
              style={[
                styles.feedbackTitle,
                selected === question.answer
                  ? styles.successText
                  : styles.dangerText,
              ]}
            >
              {selected === question.answer
                ? 'Correct Answer! 🎉'
                : 'Incorrect Answer'}
            </Text>

            <Text style={styles.feedbackText}>
              {question.explanation}
            </Text>

            <Pressable
              onPress={next}
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.primaryButtonText}>
                {current + 1 === questions.length
                  ? 'See Result'
                  : 'Next Question'}
              </Text>
            </Pressable>
          </View>
        )}

        {/* Quiz information */}
        <Text style={styles.disclaimer}>
          Identify the American Sign Language (ASL) signs
          shown in the images.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  heading: {
    fontSize: 27,
    fontWeight: '900',
    color: colors.text,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 7,
    marginBottom: 15,
  },

  progressTrack: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 22,
  },

  progress: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },

  questionCard: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },

  questionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 9,
    letterSpacing: 1,
  },

  question: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 26,
  },

  imageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signImage: {
    width: '100%',
    height: 230,
  },

  chooseText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },

  option: {
    minHeight: 55,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    paddingHorizontal: 15,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionPressed: {
    opacity: 0.7,
  },

  optionLetter: {
    width: 30,
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  correct: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },

  wrong: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },

  whiteText: {
    color: '#FFFFFF',
  },

  mark: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  feedback: {
    backgroundColor: colors.card,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 17,
    marginTop: 10,
  },

  feedbackTitle: {
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 8,
  },

  successText: {
    color: colors.success,
  },

  dangerText: {
    color: colors.danger,
  },

  feedbackText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 15,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonPressed: {
    opacity: 0.75,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  resultEmoji: {
    fontSize: 65,
    marginBottom: 15,
  },

  resultTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: colors.text,
    textAlign: 'center',
  },

  score: {
    fontSize: 48,
    fontWeight: '900',
    color: colors.primary,
    marginTop: 20,
  },

  percentage: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.success,
    marginTop: 5,
  },

  resultText: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 12,
    marginBottom: 25,
    textAlign: 'center',
  },

  disclaimer: {
    fontSize: 12,
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 20,
  },
});
