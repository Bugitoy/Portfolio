import { maxwellFile } from './ProjectFiles/maxwell.js';
import { cudaCoarseningFile } from './ProjectFiles/coarse.js'
import { maxwellReadmeFile } from './ProjectFiles/README.js'

// Base filesystem shared by the example project (folders and files)
export const CudaAcceleratedMaxwellEquationsFileSystem = {
  'Cuda Accelerated Maxwell Equations': {
    type: 'folder',
    files: {
      ...maxwellFile,
      ...cudaCoarseningFile,
      ...maxwellReadmeFile
    },
  },
};