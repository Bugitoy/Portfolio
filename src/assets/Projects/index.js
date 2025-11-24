import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../App";
import { gptStyleTransformerFileSystem } from "./FilesSystems/gpt-style-project/gpt-style-transformer-project.js";

export const projects = [
  {
    id: '0',
    title: 'GPT-Style-transfomer model',
    text: 'Small GPT-style Transformer for character-level language modeling with contextual understanding up to block_size',
    date: 'January',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
    category: 'AI and Machine Learning',
    fileSystem: gptStyleTransformerFileSystem,
  },
  {
    id: "1",
    title: "Computer Graphics",
    text: "Learn 3D modeling, rendering, shaders, OpenGL, DirectX, Vulkan, game engines, optimization, and algorithms.",
    date: "February",
    status: "progress",
    imageUrl: roadmap2,
    colorful: false,
    category: 'Computer Graphics',
  },
  {
    id: "2",
    title: "Computer Graphics",
    text: "Learn 3D modeling, rendering, shaders, OpenGL, DirectX, Vulkan, game engines, optimization, and algorithms.",
    date: "February",
    status: "progress",
    imageUrl: roadmap2,
    colorful: false,
    category: 'Computer Graphics',
  },
  {
    id: "3",
    title: "Computer Graphics",
    text: "Learn 3D modeling, rendering, shaders, OpenGL, DirectX, Vulkan, game engines, optimization, and algorithms.",
    date: "February",
    status: "progress",
    imageUrl: roadmap2,
    colorful: false,
    category: 'Computer Graphics',
  },
];

// Backwards-compatible export: the default file system for the first project
export const fileSystem = projects[0].fileSystem;

