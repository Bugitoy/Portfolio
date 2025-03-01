import TennisMan from "./Featured/TennisMan.jpeg";
import twospaceman from "./Featured/twospaceman.png";
import Vibing from "./Featured/Vibing.jpeg";
import StreetCrossing from "./Featured/StreetCrossing.jpeg";
import CarChilling from "./Featured/chilling on car.gif";
import WalkingCrowd from "./Featured/crowd walking.gif";
import deskman from "./Featured/man at desk.gif";
import nightFire from "./Featured/giphy.gif";
import chineseStore from "./Featured/chineseStore.gif";
import remembering from "./Featured/remembering.gif";
import { body } from "framer-motion/client";

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
    nightFire
};

export const posts = [
  {
    title: 'First Post',
    slug: 'first-post',
    image: remembering,
    date: '11.02.2023',
    category: 'Breadboard',
    description: 'This is the first post description. A quick summary of the content.',
    body1: `Here is a long description of the first post. It includes various types of content such as text, images, and code snippets.`,
    body2: 'This is the second part of the first post.',
    body3: 'This is the third part of the first post.',
    body4: 'This is the fourth part of the first post.',    
    body5: 'This is the fifth part of the first post.',
    body6: 'This is the sixth part of the first post.',
    body7: 'This is the seventh part of the first post.',
    body8: 'This is the eighth part of the first post.',
    body9: 'This is the ninth part of the first post.',
  },
  {
    title: 'Second Post',
    slug: 'second-post',
    image: TennisMan,
    date: '12.02.2023',
    category: 'Tutorial',
    description: 'A brief overview of the second post content.',
    body: `Here is a long description of the second post. It includes various types of content such as text, images, and code snippets.`
  },
  {
    title: 'Third Post',
    slug: 'third-post',
    image: WalkingCrowd,
    date: '13.02.2023',
    category: 'Update',
    description: 'An update on the third post with mixed media content.',
    body: `Here is a long description of the third post. It includes various types of content such as text, images, and code snippets.`
  },
  {
    title: 'Fourth Post',
    slug: 'fourth-post',
    image: twospaceman,
    date: '14.02.2023',
    category: 'Update',
    description: 'An update on the fourth post with mixed media content.',
    body: `Here is a long description of the fourth post. It includes various types of content such as text, images, and code snippets.`
  },
    {
        title: 'Fifth Post',
        slug: 'fifth-post',
        image: CarChilling,
        date: '15.02.2023',
        category: 'Update',
        description: 'An update on the fifth post with mixed media content.',
        body: `Here is a long description of the fifth post. It includes various types of content such as text, images, and code snippets.`
    },
    {
        title: 'Sixth Post',
        slug: 'sixth-post',
        image: Vibing,
        date: '16.02.2023',
        category: 'Update',
        description: 'An update on the sixth post with mixed media content.',
        body: `Here is a long description of the sixth post. It includes various types of content such as text, images, and code snippets.`
    },
    {
        title: 'Seventh Post',
        slug: 'seventh-post',
        image: deskman,
        date: '17.02.2023',
        category: 'Update',
        description: 'An update on the seventh post with mixed media content.',
        body: `Here is a long description of the seventh post. It includes various types of content such as text, images, and code snippets.`
    },
];
