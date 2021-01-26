import React from 'react';
import { useRouter } from 'next/router';
import QuizBackground from '../src/Components/QuizBackground';
import db from '../db.json';
import QuizContainer from '../src/Components/QuizContainer';
import Widget from '../src/Components/Widget';
import QuizQuestions from '../src/Components/QuizQuestions';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <QuizBackground backgroundImage={db.bg[2]}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{`Bem-vindo, ${name}! Você está no desafio Next.js `}</h1>
          </Widget.Header>
          <Widget.Content>
            <QuizQuestions />
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
