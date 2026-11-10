import React, { useMemo, useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { quizData } from '../data/quizData';
import { colors } from '../constants/theme';

export default function QuizScreen() {
  const questions = useMemo(() => quizData.slice(0, 20), []);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function choose(option) {
    if (selected !== null) return;
    setSelected(option);
    if (option === question.answer) setScore((value) => value + 1);
  }

  function next() {
    if (current + 1 >= questions.length) setFinished(true);
    else { setCurrent((value) => value + 1); setSelected(null); }
  }

  function restart() {
    setCurrent(0); setSelected(null); setScore(0); setFinished(false);
  }

  if (finished) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.result}>
          <Text style={styles.resultEmoji}>🏆</Text>
          <Text style={styles.resultTitle}>Quiz completed!</Text>
          <Text style={styles.score}>{score} / {questions.length}</Text>
          <Text style={styles.resultText}>You answered {score} questions correctly.</Text>
          <Pressable onPress={restart} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Try Again</Text></Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Knowledge Quiz</Text>
        <Text style={styles.subtitle}>Question {current + 1} of {questions.length} · Score: {score}</Text>
        <View style={styles.progressTrack}><View style={[styles.progress, { width: `${((current + 1) / questions.length) * 100}%` }]} /></View>
        <View style={styles.questionCard}>
          <Text style={styles.questionLabel}>QUESTION {current + 1}</Text>
          <Text style={styles.question}>{question.question}</Text>
        </View>
        {question.options.map((option) => {
          const isCorrect = selected !== null && option === question.answer;
          const isWrong = selected === option && option !== question.answer;
          return (
            <Pressable key={option} onPress={() => choose(option)} style={[styles.option, isCorrect && styles.correct, isWrong && styles.wrong]}>
              <Text style={[styles.optionText, (isCorrect || isWrong) && { color: '#fff' }]}>{option}</Text>
              {isCorrect ? <Text style={styles.mark}>✓</Text> : isWrong ? <Text style={styles.mark}>✕</Text> : null}
            </Pressable>
          );
        })}
        {selected !== null && (
          <View style={styles.feedback}>
            <Text style={styles.feedbackTitle}>{selected === question.answer ? 'Correct!' : 'Not quite.'}</Text>
            <Text style={styles.feedbackText}>{question.explanation}</Text>
            <Pressable onPress={next} style={styles.primaryButton}><Text style={styles.primaryButtonText}>{current + 1 === questions.length ? 'See Result' : 'Next Question'}</Text></Pressable>
          </View>
        )}
        <Text style={styles.disclaimer}>This starter quiz checks basic learning labels. Replace or extend questions using verified Sri Lankan Sign Language learning content.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 35 },
  heading: { fontSize: 27, fontWeight: '800', color: colors.text, marginTop: 10 },
  subtitle: { color: colors.muted, marginTop: 5, marginBottom: 15 },
  progressTrack: { height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginBottom: 18 },
  progress: { height: 7, backgroundColor: colors.secondary, borderRadius: 8 },
  questionCard: { backgroundColor: colors.primary, borderRadius: 18, padding: 22, marginBottom: 18 },
  questionLabel: { color: '#DDEBFF', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  question: { color: '#fff', fontSize: 21, fontWeight: '800', lineHeight: 29, marginTop: 12 },
  option: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  optionText: { color: colors.text, fontSize: 16, fontWeight: '600' },
  correct: { backgroundColor: colors.success, borderColor: colors.success },
  wrong: { backgroundColor: colors.danger, borderColor: colors.danger },
  mark: { color: '#fff', fontWeight: '900' },
  feedback: { backgroundColor: colors.softGreen, borderRadius: 14, padding: 16, marginTop: 7 },
  feedbackTitle: { color: colors.success, fontWeight: '900', fontSize: 18 },
  feedbackText: { color: colors.text, marginTop: 6, lineHeight: 21 },
  primaryButton: { backgroundColor: colors.primary, padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 15 },
  primaryButtonText: { color: '#fff', fontWeight: '800' },
  disclaimer: { color: colors.muted, fontSize: 11, lineHeight: 17, marginTop: 20 },
  result: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25 },
  resultEmoji: { fontSize: 60 },
  resultTitle: { fontSize: 27, fontWeight: '900', color: colors.text, marginTop: 15 },
  score: { color: colors.primary, fontSize: 42, fontWeight: '900', marginTop: 15 },
  resultText: { color: colors.muted, marginTop: 8 },
});
