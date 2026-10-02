export type FrameKind = "polaroid" | "tape" | "film" | "postcard" | "mat";

export type Photo = { src: string; caption?: string; frame: FrameKind };

/* Ангийн 10 зургаа public/class/ дотор 1.jpg ... 10.jpg нэрээр хийнэ.
   Өөр нэр, өргөтгөлтэй бол src-г нь засна. caption-г хүссэнээрээ солино (хоосон орхиж болно). */
export const photos: Photo[] = [
  { src: "/class/1.jpg", caption: "Ангиараа", frame: "polaroid" },
  { src: "/class/2.jpg", caption: "Тэр өдөр", frame: "tape" },
  { src: "/class/3.jpg", caption: "Инээд хөөр", frame: "postcard" },
  { src: "/class/4.jpg", caption: "Хамтдаа", frame: "mat" },
  { src: "/class/5.jpg", caption: "Бидний анги", frame: "film" },
  { src: "/class/6.jpg", caption: "Дурсамж", frame: "polaroid" },
  { src: "/class/7.jpg", caption: "Баяр хөөр", frame: "mat" },
  { src: "/class/8.jpg", caption: "Мартагдашгүй", frame: "tape" },
  { src: "/class/9.jpg", caption: "12Б", frame: "postcard" },
  { src: "/class/10.jpg", caption: "Баярлалаа, багшаа", frame: "film" },
];
