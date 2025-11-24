export const cudaCoarseningFile = {
    'coarse.cu': {
      type: 'file',
      title: 'coarse.cu',
      lines: [
        {
          code: '#include "dli.h"',
          breakdown: [
            { part: '#include', explanation: 'Preprocessor directive to include a file' },
            { part: '"dli.h"', explanation: 'Header file likely containing grid definitions, constants (tile_size), and CUB includes' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '__global__ void kernel(dli::temperature_grid_f fine,',
          breakdown: [
            { part: '__global__', explanation: 'Indicates a kernel function that runs on the GPU and is called from the CPU' },
            { part: 'dli::temperature_grid_f', explanation: 'A custom data structure representing the high-resolution grid' },
          ],
        },
        {
          code: '                       dli::temperature_grid_f coarse) {',
          breakdown: [
            { part: 'coarse', explanation: 'The destination low-resolution grid' },
          ],
        },
        {
          code: '  int coarse_row = blockIdx.x / coarse.extent(1);',
          breakdown: [
            { part: 'blockIdx.x', explanation: 'The ID of the current thread block' },
            { part: 'coarse.extent(1)', explanation: 'The width (number of columns) of the coarse grid' },
            { part: '/', explanation: 'Integer division to calculate the row index in the coarse grid' },
          ],
        },
        {
          code: '  int coarse_col = blockIdx.x % coarse.extent(1);',
          breakdown: [
            { part: '%', explanation: 'Modulo operator to calculate the column index in the coarse grid' },
          ],
        },
        {
          code: '  int row = threadIdx.x / dli::tile_size;',
          breakdown: [
            { part: 'threadIdx.x', explanation: 'The ID of the current thread within the block' },
            { part: 'dli::tile_size', explanation: 'The dimension (width/height) of the sub-block being averaged' },
            { part: 'row', explanation: 'The local row offset within the tile' },
          ],
        },
        {
          code: '  int col = threadIdx.x % dli::tile_size;',
          breakdown: [
            { part: 'col', explanation: 'The local column offset within the tile' },
          ],
        },
        {
          code: '  int fine_row = coarse_row * dli::tile_size + row;',
          breakdown: [
            { part: 'fine_row', explanation: 'Calculates the global row index in the high-resolution (fine) grid' },
            { part: '*', explanation: 'Multiplies coarse index by tile size to find the starting position' },
          ],
        },
        {
          code: '  int fine_col = coarse_col * dli::tile_size + col;',
          breakdown: [
            { part: 'fine_col', explanation: 'Calculates the global column index in the high-resolution (fine) grid' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  float thread_value = fine(fine_row, fine_col);',
          breakdown: [
            { part: 'fine(...)', explanation: 'Accesses the value at the specific coordinates in the fine grid' },
            { part: 'thread_value', explanation: 'Stores the specific pixel value this thread is responsible for' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  using block_reduce_t = cub::BlockReduce<float, dli::block_threads>;',
          breakdown: [
            { part: 'using', explanation: 'Defines a type alias' },
            { part: 'cub::BlockReduce', explanation: 'A CUB library class providing parallel reduction algorithms' },
            { part: 'dli::block_threads', explanation: 'Total number of threads in the block (tile_size * tile_size)' },
          ],
        },
        {
          code: '  using storage_t = block_reduce_t::TempStorage;',
          breakdown: [
            { part: 'TempStorage', explanation: 'Defines the shared memory structure required by CUB for the reduction' },
          ],
        },
        {
          code: '  __shared__ storage_t storage;',
          breakdown: [
            { part: '__shared__', explanation: 'Allocates memory shared by all threads in this specific block' },
          ],
        },
        {
          code: '  float block_sum = block_reduce_t(storage).Sum(thread_value);',
          breakdown: [
            { part: 'block_reduce_t(storage)', explanation: 'Instantiates the reducer with the shared memory' },
            { part: '.Sum(thread_value)', explanation: 'Cooperatively sums values from all threads in the block' },
            { part: 'block_sum', explanation: 'Variable holding the total sum (valid only in thread 0 usually)' },
          ],
        },
        {
          code: '  float block_average = block_sum / (dli::tile_size * dli::tile_size);',
          breakdown: [
            { part: 'block_average', explanation: 'Calculates the average temperature for the tile' },
            { part: '/', explanation: 'Divides the sum by the total number of pixels in the tile' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  if (threadIdx.x == 0) {',
          breakdown: [
            { part: 'if', explanation: 'Checks if this is the first thread (leader) in the block' },
          ],
        },
        {
          code: '    coarse(coarse_row, coarse_col) = block_average;',
          breakdown: [
            { part: 'coarse(...) =', explanation: 'Writes the calculated average to the single corresponding cell in the coarse grid' },
          ],
        },
        {
          code: '  }',
          breakdown: [],
        },
        {
          code: '}',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '// Don\'t change the signature of this function',
          breakdown: [
            { part: '//', explanation: 'Comment indicating this is the host-side API entry point' },
          ],
        },
        {
          code: 'void coarse(dli::temperature_grid_f fine, dli::temperature_grid_f coarse_grid) {',
          breakdown: [
            { part: 'void coarse', explanation: 'Host function to launch the coarsening kernel' },
          ],
        },
        {
          code: '  kernel<<<coarse_grid.size(), dli::block_threads>>>(fine, coarse_grid);',
          breakdown: [
            { part: '<<<...>>>', explanation: 'CUDA kernel launch configuration' },
            { part: 'coarse_grid.size()', explanation: 'Grid Dimension: 1 block per cell in the coarse grid' },
            { part: 'dli::block_threads', explanation: 'Block Dimension: 1 thread per pixel in the fine tile' },
          ],
        },
        {
          code: '  cudaDeviceSynchronize();',
          breakdown: [
            { part: 'cudaDeviceSynchronize()', explanation: 'Blocks the CPU until the GPU has finished execution' },
          ],
        },
        {
          code: '}',
          breakdown: [],
        },
      ],
    },
  };