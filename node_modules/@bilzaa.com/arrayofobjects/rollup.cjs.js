//import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/ArrayOfObjects.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/ArrayOfObjectsCjs.js',
	  format: 'cjs',
	}
  };