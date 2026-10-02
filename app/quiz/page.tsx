import type { Metadata } from "next";
import Quiz from "../components/Quiz";

export const metadata: Metadata = {
  title: "Хамгийн мундаг багш хэн бэ? 💖",
};

export default function QuizPage() {
  return <Quiz />;
}
