import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/Components/Footer';
import GitHubCorner from '../src/Components/GitHubCorner';
import QuizBackground from '../src/Components/QuizBackground';
import QuizLogo from '../src/Components/QuizLogo';
import Widget from '../src/Components/Widget';
import Input from '../src/Components/Input';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg[2]}>
      {/* <QuizBackground backgroundImage = {  db.bg[Math.floor(Math.random() * db.bg.length)]}> */}
      <div>
        <Head>
          <title>Aprenda Next.js junto comigo</title>
          <meta property="og:title" content="Aprenda Next.js junto comigo" key="title" />
          <meta property="og:image" content="https://res.cloudinary.com/practicaldev/image/fetch/s--p3PH2gZq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/kh3ntlg6dnemjeaz531z.png" />
          <meta property="og:image:type" content="imagem/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <Input withButton placeholder="Digite seu nome" />
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quiz da galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Veja outros quiz, podem ser muito legais também</p>
              <Input disabled />
              <Input />
              <Input />
            </Widget.Content>
          </Widget>
          <GitHubCorner projectUrl="https://www.github.com/etoledo44" />
          <Footer />
        </QuizContainer>
      </div>
    </QuizBackground>
  );
}
