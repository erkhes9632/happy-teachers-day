import { quiz } from "./quiz";

export type Option = { id: string; text: string };

export type Question = {
  id: string;
  kind: "teacher" | "text";
  title: string;
  prompt?: string;
  options: Option[];
  correctId: string;
  hints: string[];
  explain?: string;
};

export const questions: Question[] = [
  {
    id: "best-teacher",
    kind: "teacher",
    title: quiz.question,
    prompt: quiz.prompt,
    options: quiz.teachers.map((t) => ({ id: t.id, text: t.name })),
    correctId: quiz.correctId,
    hints: quiz.hints,
  },
  {
    id: "q2",
    kind: "text",
    title: "Хэн нь хамгийн дүрэсгүй, хамгийн их хэрэг таридаг вэ?",
    prompt: "Нэгийг нь сонгоорой",
    options: [
      { id: "a", text: "Сүлдээ" },
      { id: "b", text: "Мийгаа" },
      { id: "c", text: "Тэгшээ" },
      { id: "d", text: "Ангиараа" },
    ],
    correctId: "d",
    hints: [
      "Энэ ганц хүний хийх ажил биш ээ, цар хүрээг нь арай томоргоод бодоорой! 😅",
      "Нэг нь эхлүүлээд, бусад нь даган баясдаг шүү дээ...",
      "Нэг хүнд битгий тулга аа, нийт бүрэлдэхүүнээрээ эвсэж байж л ийм хэмжээнд хэрэг тарьна! 😉",
    ],
    explain:
      "Манай ангийнхан нэгдэхээрээ л жинхэнэ утгаараа дэлбэлж өгдөг шүү дээ!",
  },
  {
    id: "q3",
    kind: "text",
    title: "Хэн нь хамгийн ухаантай вэ?",
    prompt: "Нэгийг нь сонгоорой",
    options: [
      { id: "a", text: "Хэн нь ч биш" },
      { id: "b", text: "Чүлтэм" },
      { id: "c", text: "Анги бүхлээрээ" },
      { id: "d", text: "Номин" },
    ],
    correctId: "c",
    hints: [
      "Ганц толгойноос олон толгой илүү гэж мэдэх үү? 🧠",
      "Бүгдээрээ тархиа уралдуулбал дийлдэхгүй шүү!",
      "Нэг нэгээр нь биш, нэгдмэл хүчээрээ хамгийн мундаг нь! 🔥",
    ],
    explain:
      "Манай анги чинь нийлээд бодохоор ямар ч хүнд бодлогыг түүрхэн боддог генийн цуглуулга шүү!",
  },
  {
    id: "q4",
    kind: "text",
    title: "Хэн хамгийн хөөрхөн вэ?",
    prompt: "Нэгийг нь сонгоорой",
    options: [
      { id: "a", text: "Амина" },
      { id: "b", text: "Билигт" },
      { id: "c", text: "Жавхлантуяа" },
      { id: "d", text: "Онон" },
    ],
    correctId: "c",
    hints: [
      "За арай биш ээ, нүдээ сайн нээгээд хар даа! 👀",
      "Тааж чадахгүй бол ядаж зөн билэгтээ итгээд үз? ✨",
      "Нэг залууд зориулсан тусгай хариулт байна уу, сайн бодоорой! 💖",
    ],
    explain:
      "Хэн хамгийн хөөрхөн бэ гэдгийг асуултгүйгээр бүгд мэдэж байгаа биз дээ!",
  },
];
