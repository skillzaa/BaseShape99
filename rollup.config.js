//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/BaseShape.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/BaseShape.js',
	  format: 'es',
	}
  };