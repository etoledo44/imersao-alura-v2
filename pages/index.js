import Head from 'next/head'
import styled from 'styled-components'
import db from '../db.json'
import Footer from '../src/Components/Footer'
import GitHubCorner from '../src/Components/GitHubCorner'
import QuizBackground from '../src/Components/QuizBackground'
import QuizLogo from '../src/Components/QuizLogo'
import Widget from '../src/Components/Widget'


const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
`

export default function Home() {
  return (
    <>
    <Head />
    <QuizBackground backgroundImage = {  db.bg[Math.floor(Math.random() * db.bg.length)]}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Imersão da hora</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Vamo que vamo</p>
          </Widget.Content>
        </Widget>
        <GitHubCorner projectUrl='https://www.github.com/etoledo44' />
        <Footer />
      </QuizContainer>
    </QuizBackground>
    </>
  )
}
