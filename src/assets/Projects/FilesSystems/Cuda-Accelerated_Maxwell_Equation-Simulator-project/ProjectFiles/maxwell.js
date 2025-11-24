export const maxwellFile = {
    'maxwell.cu': {
      type: 'file',
      title: 'maxwell.cu',
      lines: [
        {
          code: '#include "dli.h"',
          breakdown: [
            { part: '#include', explanation: 'Preprocessor directive to include a file' },
            { part: '"dli.h"', explanation: 'A custom header file likely containing constants (like C0) and configuration' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: 'void update_hx(int n, float dx, float dy, float dt, thrust::device_vector<float> &hx,',
          breakdown: [
            { part: 'void update_hx', explanation: 'Function to update the magnetic field x-component' },
            { part: 'thrust::device_vector', explanation: 'A vector container that resides in GPU memory' },
            { part: '&hx', explanation: 'Passed by reference to modify the vector in place' },
          ],
        },
        {
          code: '               thrust::device_vector<float> &ez) {',
          breakdown: [
            { part: '&ez', explanation: 'Reference to the Electric field z-component vector (input)' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  auto ez_zip = thrust::make_zip_iterator(ez.begin() + n, ez.begin());',
          breakdown: [
            { part: 'auto', explanation: 'Type inference' },
            { part: 'thrust::make_zip_iterator', explanation: 'Combines two iterators into a single iterator of tuples' },
            { part: 'ez.begin() + n', explanation: 'Iterator offset by n (row width) to access the neighbor in the y-direction' },
          ],
        },
        {
          code: '  auto ez_transform = thrust::make_transform_iterator(ez_zip, []__host__ __device__(thrust::tuple<float, float> t){',
          breakdown: [
            { part: 'make_transform_iterator', explanation: 'Creates an iterator that applies a function to the input on the fly' },
            { part: '[]__host__ __device__', explanation: 'Lambda function executable on both CPU (host) and GPU (device)' },
            { part: 'thrust::tuple', explanation: 'The data structure yielded by the zip iterator' },
          ],
        },
        {
          code: '    return thrust::get<0>(t) - thrust::get<1>(t);',
          breakdown: [
            { part: 'thrust::get<0>(t)', explanation: 'Accesses the first element of the tuple (ez[i+n])' },
            { part: '-', explanation: 'Calculates the spatial difference required for the curl equation' },
          ],
        },
        {
          code: '  });',
          breakdown: [
            { part: '});', explanation: 'Closes the lambda and the transform iterator declaration' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  thrust::transform(thrust::device, hx.begin(), hx.end() - n, ez_transform, hx.begin(),',
          breakdown: [
            { part: 'thrust::transform', explanation: 'Applies a unary or binary operation to a range of elements' },
            { part: 'thrust::device', explanation: 'Execution policy indicating this should run on the GPU' },
            { part: 'hx.end() - n', explanation: 'Excludes the last row to avoid boundary errors' },
          ],
        },
        {
          code: '  [dt, dx, dy] __host__ __device__ (float h, float cex) {',
          breakdown: [
            { part: '[dt, dx, dy]', explanation: 'Captures simulation constants into the lambda' },
            { part: 'float h', explanation: 'The current magnetic field value' },
            { part: 'float cex', explanation: 'The calculated difference from ez_transform' },
          ],
        },
        {
          code: '    return h - dli::C0 * dt / 1.3f * cex / dy;',
          breakdown: [
            { part: 'return', explanation: 'Returns the updated Hx value' },
            { part: 'dli::C0', explanation: 'Speed of light constant from the header' },
            { part: '/ dy', explanation: 'Divides by grid spacing in Y to complete the derivative' },
          ],
        },
        {
          code: '  });',
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
          code: 'void update_hy(int n, float dx, float dy, float dt, thrust::device_vector<float> &hy,',
          breakdown: [
            { part: 'update_hy', explanation: 'Function to update the magnetic field y-component' },
          ],
        },
        {
          code: '               thrust::device_vector<float> &ez) {',
          breakdown: [],
        },
        {
          code: ' ',
          breakdown: [],
        },
        {
          code: '  auto ez_zip = thrust::make_zip_iterator(ez.begin(), ez.begin() + 1);',
          breakdown: [
            { part: 'ez.begin() + 1', explanation: 'Offset by 1 to access the immediate right neighbor in memory' },
          ],
        },
        {
          code: '  auto ez_transform = thrust::make_transform_iterator(ez_zip, []__host__ __device__(thrust::tuple<float, float> t){',
          breakdown: [
            { part: 'make_transform_iterator', explanation: 'Lazy evaluation of the difference between elements' },
          ],
        },
        {
          code: '    return thrust::get<0>(t) - thrust::get<1>(t);',
          breakdown: [
            { part: '-', explanation: 'Calculates difference for the derivative with respect to x' },
          ],
        },
        {
          code: '  });',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  thrust::transform(thrust::device, hy.begin(), hy.end() - 1, ez_transform, hy.begin(),',
          breakdown: [
            { part: 'hy.end() - 1', explanation: 'Stops before the very last element to handle boundary conditions' },
          ],
        },
        {
          code: '  [dt, dx, dy] __host__ __device__ (float h, float cex) {',
          breakdown: [
            { part: 'float h', explanation: 'Current Hy value' },
            { part: 'float cex', explanation: 'The spatial difference calculated by the transform iterator' },
          ],
        },
        {
          code: '    return h - dli::C0 * dt / 1.3f * cex / dx;',
          breakdown: [
            { part: '/ dx', explanation: 'Divides by grid spacing in X' },
            { part: '1.3f', explanation: 'Likely represents magnetic permeability or a material constant' },
          ],
        },
        {
          code: '  });',
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
          code: 'void update_dz(int n, float dx, float dy, float dt, ',
          breakdown: [
            { part: 'update_dz', explanation: 'Function to update electric flux density (Dz)' },
          ],
        },
        {
          code: '               thrust::device_vector<float> &hx_vec,',
          breakdown: [
            { part: 'hx_vec', explanation: 'Input: Magnetic field X vector' },
          ],
        },
        {
          code: '               thrust::device_vector<float> &hy_vec, ',
          breakdown: [
            { part: 'hy_vec', explanation: 'Input: Magnetic field Y vector' },
          ],
        },
        {
          code: '               thrust::device_vector<float> &dz_vec,',
          breakdown: [
            { part: 'dz_vec', explanation: 'Output: Electric flux density vector to be updated' },
          ],
        },
        {
          code: '               thrust::counting_iterator<int> cells_begin, thrust::counting_iterator<int> cells_end) {',
          breakdown: [
            { part: 'thrust::counting_iterator', explanation: 'Virtual iterator that yields sequential numbers (0, 1, 2...) to simulate a loop index' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  auto hx = hx_vec.begin();',
          breakdown: [
            { part: 'auto hx', explanation: 'Gets raw iterator to start of vector for use inside kernel' },
          ],
        },
        {
          code: '  auto hy = hy_vec.begin();',
          breakdown: [],
        },
        {
          code: '  auto dz = dz_vec.begin();',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  thrust::for_each(thrust::device, cells_begin, cells_end,',
          breakdown: [
            { part: 'thrust::for_each', explanation: 'Applies a function to every element in the range (equivalent to a parallel for-loop)' },
            { part: 'cells_begin', explanation: 'Range starts at 0' },
          ],
        },
        {
          code: '                 [n, dx, dy, dt, hx, hy, dz] __host__ __device__ (int cell_id) {',
          breakdown: [
            { part: 'capture list', explanation: 'Captures vector iterators (hx, hy, dz) so the kernel can access memory directly' },
            { part: 'int cell_id', explanation: 'The current index provided by the counting iterator' },
          ],
        },
        {
          code: '                   if (cell_id > n) {',
          breakdown: [
            { part: 'if', explanation: 'Boundary check to ensure we don\'t access negative indices' },
          ],
        },
        {
          code: '                     float hx_diff = hx[cell_id - n] - hx[cell_id];',
          breakdown: [
            { part: 'hx[...] - hx[...]', explanation: 'Calculates the spatial derivative of Hx (dHx/dy) using neighbor offsets' },
          ],
        },
        {
          code: '                     float hy_diff = hy[cell_id] - hy[cell_id - 1];',
          breakdown: [
            { part: 'hy[...] - hy[...]', explanation: 'Calculates the spatial derivative of Hy (dHy/dx)' },
          ],
        },
        {
          code: '                     dz[cell_id] += dli::C0 * dt * (hx_diff / dx + hy_diff / dy);',
          breakdown: [
            { part: '+=', explanation: 'Accumulates the change (time integration)' },
            { part: '(...)', explanation: 'Sum of spatial derivatives (Curl of H)' },
          ],
        },
        {
          code: '                   }',
          breakdown: [],
        },
        {
          code: '                 });',
          breakdown: [
            { part: '});', explanation: 'End of lambda and for_each call' },
          ],
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
          code: 'void update_ez(thrust::device_vector<float> &ez, thrust::device_vector<float> &dz) {',
          breakdown: [
            { part: 'update_ez', explanation: 'Function to update Electric field (Ez) from Flux density (Dz)' },
          ],
        },
        {
          code: '  thrust::transform(thrust::device, dz.begin(), dz.end(), ez.begin(),',
          breakdown: [
            { part: 'transform', explanation: 'Parallel operation to map Dz values to Ez values' },
          ],
        },
        {
          code: '                 [] __host__ __device__ (float d) { return d / 1.3f; });',
          breakdown: [
            { part: 'd / 1.3f', explanation: 'Divides flux by permittivity (epsilon) to get field strength' },
          ],
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
          code: '// Do not change the signature of this function',
          breakdown: [
            { part: '//', explanation: 'Comment indicating this is an API entry point' },
          ],
        },
        {
          code: 'void simulate(int cells_along_dimension, float dx, float dy, float dt,',
          breakdown: [
            { part: 'void simulate', explanation: 'Main driver function for the simulation' },
            { part: 'cells_along_dimension', explanation: 'The width/height of the square grid' },
          ],
        },
        {
          code: '              thrust::device_vector<float> &d_hx,',
          breakdown: [
            { part: 'd_hx', explanation: 'Device vector for Hx component' },
          ],
        },
        {
          code: '              thrust::device_vector<float> &d_hy,',
          breakdown: [
            { part: 'd_hy', explanation: 'Device vector for Hy component' },
          ],
        },
        {
          code: '              thrust::device_vector<float> &d_dz,',
          breakdown: [
            { part: 'd_dz', explanation: 'Device vector for Dz component' },
          ],
        },
        {
          code: '              thrust::device_vector<float> &d_ez) {',
          breakdown: [
            { part: 'd_ez', explanation: 'Device vector for Ez component' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  int cells = cells_along_dimension * cells_along_dimension;',
          breakdown: [
            { part: 'int cells', explanation: 'Total number of grid points' },
          ],
        },
        {
          code: '  auto cells_begin = thrust::make_counting_iterator(0);',
          breakdown: [
            { part: 'make_counting_iterator(0)', explanation: 'Creates an iterator starting at index 0' },
          ],
        },
        {
          code: '  auto cells_end = thrust::make_counting_iterator(cells);',
          breakdown: [
            { part: 'make_counting_iterator(cells)', explanation: 'Creates the end iterator for the total cell count' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '  for (int step = 0; step < dli::steps; step++) {',
          breakdown: [
            { part: 'for', explanation: 'Time-stepping loop' },
            { part: 'dli::steps', explanation: 'Total number of iterations defined in dli.h' },
          ],
        },
        {
          code: '    update_hx(cells_along_dimension, dx, dy, dt, d_hx, d_ez);',
          breakdown: [
            { part: 'update_hx', explanation: 'Step 1: Update magnetic field X' },
          ],
        },
        {
          code: '    update_hy(cells_along_dimension, dx, dy, dt, d_hy, d_ez);',
          breakdown: [
            { part: 'update_hy', explanation: 'Step 2: Update magnetic field Y' },
          ],
        },
        {
          code: '    update_dz(cells_along_dimension, dx, dy, dt, d_hx, d_hy, d_dz, cells_begin, cells_end);',
          breakdown: [
            { part: 'update_dz', explanation: 'Step 3: Update electric flux density using new H fields' },
          ],
        },
        {
          code: '    update_ez(d_ez, d_dz);',
          breakdown: [
            { part: 'update_ez', explanation: 'Step 4: Update electric field from flux density' },
          ],
        },
        {
          code: '  }',
          breakdown: [],
        },
        {
          code: '}',
          breakdown: [
            { part: '}', explanation: 'End of simulation function' },
          ],
        },
      ],
    },
  };