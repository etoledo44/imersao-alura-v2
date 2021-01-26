import React from 'react';
import styled from 'styled-components';
import { ButtonPlay } from '../Input';

const QuestionsContainer = styled.div`
    // eslint-disable-next-line linebreak-style
    width: 100%;
    height: 100%;
    h2 {
        margin-bottom: 10px;
        font-weight: bold;
    }

`;

const QuestionContent = styled.div`

`;
function QuestionsButton() {
  return (
    <ButtonPlay fontSize="0.8em">
      require 'router' from 'styled-components'
    </ButtonPlay>
  );
}

export default function QuizQuestions() {
  return (
    <QuestionsContainer>
      <h2>Como fazemos para obter acesso aos metodos de navegação do Router?</h2>
      <QuestionContent>
        <QuestionsButton />
        <QuestionsButton />
        <QuestionsButton />
      </QuestionContent>
    </QuestionsContainer>
  );
}
