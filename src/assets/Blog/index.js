import remembering from "./Featured/remembering.gif";
import chineseStore from "./Featured/chineseStore.gif";
import nightFire from "./Featured/giphy.gif";
import TennisMan from "./Featured/TennisMan.jpeg";
import twospaceman from "./Featured/twospaceman.png";
import Vibing from "./Featured/Vibing.jpeg";
import StreetCrossing from "./Featured/StreetCrossing.jpeg";
import CarChilling from "./Featured/chilling on car.gif";
import WalkingCrowd from "./Featured/crowd walking.gif";
import deskman from "./Featured/man at desk.gif";
import PlaceholderImage from "./Featured/PlaceholderImage.png";

export {
  chineseStore,
  remembering,
  TennisMan,
  twospaceman,
  Vibing,
  StreetCrossing,
  CarChilling,
  WalkingCrowd,
  deskman,
  nightFire,
  PlaceholderImage
};

export const posts = [
  {
    title: 'First Post',
    slug: 'first-post',
    date: '11.02.2023',
    category: 'Breadboard',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the first post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: remembering, alt: 'Remembering' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
      { type: 'text', content: 'This is the fourth part of the first post.' },
      { type: 'image', src: chineseStore, alt: 'Chinese Store' },
      { type: 'text', content: 'This is the fifth part of the first post.' },
      { type: 'code', language: 'jsx', content: 'let randomNumber = Math.random();\nconsole.log(randomNumber); // Output: a random number between 0 and 1' },
      { type: 'text', content: 'This is the sixth part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/En3E7nMz4Ww?si=Xawx_rrlUbz81h5d' },
      { type: 'text', content: 'This is the seventh part of the first post.' },
      { type: 'image', src: nightFire, alt: 'Night Fire' },
      { type: 'text', content: 'This is the eighth part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the ninth part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/ZfLQDdBp2Nw?si=5nR3voky0OLCRfVt' },
    ]
  },
  {
    title: 'Second Post',
    slug: 'second-post',
    date: '12.02.2023',
    category: 'Tutorial',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the second post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: TennisMan, alt: 'black tennis player' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  },
  {
    title: 'Third Post',
    slug: 'third-post',
    date: '13.02.2023',
    category: 'Update',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the third post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: deskman, alt: 'man working at his desk' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  },
  {
    title: 'Fourth Post',
    slug: 'fourth-post',
    date: '14.02.2023',
    category: 'Update',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the fourth post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: twospaceman, alt: 'two man in sppace suits' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  },
  {
    title: 'Fifth Post',
    slug: 'fifth-post',
    date: '15.02.2023',
    category: 'Update',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the fifth post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: WalkingCrowd, alt: 'people walking with umbrellas' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  },
  {
    title: 'Sixth Post',
    slug: 'sixth-post',
    date: '16.02.2023',
    category: 'Update',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the sixth post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: Vibing, alt: 'collaborating with friends' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  },
  {
    title: 'Seventh Post',
    slug: 'seventh-post',      
    date: '17.02.2023',
    category: 'Update',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    contents: [
      { type: 'text', content: 'Here is a long description of the seventh post. It includes various types of content such as text, images, and code snippets.' },
      { type: 'image', src: CarChilling, alt: 'chilling on car' },
      { type: 'text', content: 'This is the second part of the first post.' },
      { type: 'code', language: 'jsx', content: 'function greet() { console.log("Hello, world!"); } greet();' },
      { type: 'text', content: 'This is the third part of the first post.' },
      { type: 'video', src: 'https://youtube.com/embed/f6bjuvwH1fw?si=a7afQHvo7gfNbcDt' },
    ]
  }
];
