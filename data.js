import HeroImage from "/assets/Hfz.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools14 from "/assets/tools/laravel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Laravel",
    ket: "Framework",
    dad: "800",
  },
];

import Proyek1 from "/assets/proyek/SIP.png";
import Proyek2 from "/assets/proyek/EbookStore.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Management SIP",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "ReactJS", "Tailwind"],
    dad: "200",
    website: "https://github.com/arirahman2323/management-sip",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Ebook-Store",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "ReactJS", "Tailwind", "Laravel"],
    dad: "300",
    website: "https://github.com/novendra27/ebook-store/tree/main",
  },
];
