export type FrameKind = "polaroid" | "tape" | "film" | "postcard" | "mat";

export type Photo = { src: string; caption?: string; frame: FrameKind };

export const photos: Photo[] = [
  { src: "/class/1.jpg", caption: "Нэгэн дор соёлоход", frame: "polaroid" },
  {
    src: "/class/2.jpg",
    caption: "Эхний алхам, эхний инээмсэглэл",
    frame: "tape",
  },
  { src: "/class/3.jpg", caption: "Нижигнэсэн шуугиан", frame: "postcard" },
  { src: "/class/4.jpg", caption: "Итгэл сүлжсэн цаг хугацаа", frame: "mat" },
  { src: "/class/5.jpg", caption: "Бидний гэрэлт эрин", frame: "film" },
  { src: "/class/6.jpg", caption: "Цаг хугацааны гэрч", frame: "polaroid" },
  { src: "/class/7.jpg", caption: "Жаргалтай агшин бүхэн", frame: "mat" },
  { src: "/class/8.jpg", caption: "Нэгэн амьсгаагаар", frame: "tape" },
  { src: "/class/9.jpg", caption: "Бидний бахархал — 12Б", frame: "postcard" },
  {
    src: "/class/10.jpg",
    caption: "Сургаж хүмүүжүүлсэн тандаа",
    frame: "film",
  },
  {
    src: "/class/11.jpg",
    caption: "Хамгийн нандин холбоос",
    frame: "polaroid",
  },
  { src: "/class/12.jpg", caption: "Нартай, дулаахан нэг өдөр", frame: "tape" },
  { src: "/class/13.jpg", caption: "Дэггүй насны чимээ", frame: "postcard" },
  { src: "/class/14.jpg", caption: "Мөр зориг нэгтэй", frame: "mat" },
  {
    src: "/class/15.jpg",
    caption: "Нэгэн замаар, хамтдаа",
    frame: "film",
  },
  {
    src: "/class/16.jpg",
    caption: "Нахиалж тэлсэн он жилүүд",
    frame: "polaroid",
  },
  { src: "/class/17.jpg", caption: "Гэгээн мишээл", frame: "mat" },
  { src: "/class/18.jpg", caption: "Сэтгэлд тодорсон агшин", frame: "tape" },
  { src: "/class/19.jpg", caption: "Төгсөөд ч салшгүй 12Б", frame: "postcard" },
  { src: "/class/20.jpg", caption: "Зам хөтөлсөн Багшдаа", frame: "film" },
  {
    src: "/class/21.jpg",
    caption: "Халуун дулаан уур амьсгал",
    frame: "polaroid",
  },
  { src: "/class/22.jpg", caption: "Алтан үеийн зураглал", frame: "tape" },
  {
    src: "/class/23.jpg",
    caption: "Гэнэтийн хөгжилтэй момент",
    frame: "postcard",
  },
  { src: "/class/24.jpg", caption: "Нэгэн замаар, хамтдаа", frame: "mat" },
  {
    src: "/class/25.jpg",
    caption: "Сурагч насны сүүлчийн хуудас",
    frame: "film",
  },
  { src: "/class/26.jpg", caption: "Зүрхэнд үлдэх кадр", frame: "polaroid" },
  { src: "/class/27.jpg", caption: "Баяр баясгалантай агшин", frame: "mat" },
  {
    src: "/class/28.jpg",
    caption: "Хэзээ ч сэв суухгүй дурсамж",
    frame: "tape",
  },
  { src: "/class/29.jpg", caption: "Үүрд бидний 12Б", frame: "postcard" },
  { src: "/class/30.jpg", caption: "Ачийг тань санан дурсъя", frame: "film" },
];
