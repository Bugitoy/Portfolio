import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../App";
import { CudaAcceleratedMaxwellEquationsFileSystem } from "./FilesSystems/Cuda-Accelerated_Maxwell_Equation-Simulator-project/MaxwellFileSystem.js";
import { gptStyleTransformerFileSystem } from "./FilesSystems/gpt-style-project/gptFileSystem.js";
import { CharacterLevelBigramModelFileSystem } from "./FilesSystems/Character-Level-Bigram-Model/characterLevelBigramModelFileSystem.js";
import { PytorchCrashCourseFileSystem } from "./FilesSystems/PytorchCrashCourse/PytorchCrashCourseFileSystem.js";

export const projects = [
  {
    id: '0',
    title: 'GPT Style Transfomer model',
    text: 'Small GPT-style Transformer for character-level language modeling with contextual understanding up to block_size',
    date: 'October',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
    category: 'AI and Machine Learning',
    fileSystem: gptStyleTransformerFileSystem,
  },
  {
    id: "1",
    title: "Cuda Accelerated Maxwell Equations Simulator",
    text: "This code accelerates a 2D Maxwell's Equations simulator that predicts electromagnetic wave propagation",
    date: "October",
    status: "done",
    imageUrl: roadmap2,
    colorful: false,
    category:'Accelerated Computing',
    fileSystem: CudaAcceleratedMaxwellEquationsFileSystem,
  },
  {
    id: "2",
    title: "Character Level Bigram Model",
    text: "Minimal Bigram Character Model that learns next‑character probabilities from a text corpus using a single embedding lookup, trained with cross‑entropy and sampled autoregressively. Implemented in PyTorch on input.txt, it demonstrates bigram (no long‑range) dependencies and prints a generated sample after training.",
    date: "October",
    status: "done",
    imageUrl: roadmap3,
    colorful: false,
    category: 'AI and Machine Learning',
    fileSystem: CharacterLevelBigramModelFileSystem,
  },
  {
    id: "3",
    title: "Pytorch CrashCourse",
    text: "A brief overview of how Pytorch works. It begins by manually implementing gradient descent to ensure a deep mathematical understanding, then transitions to refactoring that code using professional abstractions like torch.nn and torch.optim. The guide concludes by connecting these fundamental concepts to modern AI.",
    date: "September",
    status: "done",
    imageUrl: roadmap4,
    colorful: false,
    category: 'AI and Machine Learning',
    fileSystem: PytorchCrashCourseFileSystem,
  },
];

// Backwards-compatible export: the default file system for the first project
export const fileSystem = projects[0].fileSystem;

