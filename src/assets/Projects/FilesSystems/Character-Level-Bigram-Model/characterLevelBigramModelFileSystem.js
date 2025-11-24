import { bigramFile } from './ProjectFiles/bigram.js';
import { READMEFile } from './ProjectFiles/README.js';


// Base filesystem shared by the example project (folders and files)
export const CharacterLevelBigramModelFileSystem = {
  'Character Level Bigram Model': {
    type: 'folder',
    files: {
      ...bigramFile,
      ...READMEFile,
    },
  },
};