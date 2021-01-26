import QuizBackground from '../src/Components/QuizBackground';
import db from '../db.json';

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg[2]} />
  );
}
