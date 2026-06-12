import { useState } from 'react';
import { PageBackground } from './components/PageBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Speakers } from './components/Speakers';
import { Program } from './components/Program';
import { Location } from './components/Location';
import { CtaBanner } from './components/CtaBanner';
import { RegisterForm } from './components/RegisterForm';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { QuestionModal } from './components/QuestionModal';

export default function App() {
  const [questionModalOpen, setQuestionModalOpen] = useState(false);

  return (
    <>
      <PageBackground />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Speakers />
        <Program />
        <Location />
        <CtaBanner />
        <RegisterForm />
        <Faq onOpenQuestion={() => setQuestionModalOpen(true)} />
      </main>
      <Footer />
      <QuestionModal open={questionModalOpen} onClose={() => setQuestionModalOpen(false)} />
    </>
  );
}
