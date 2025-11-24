import { PytorchCrashCourseFile } from './ProjectFiles/README.js';
// Base filesystem shared by the example project (folders and files)
export const PytorchCrashCourseFileSystem = {
  'Pytorch CrashCourse': {
    type: 'folder',
    files: {
      ...PytorchCrashCourseFile,
    },
  },
};