//import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/Validator.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/Validator.js',
	//   file: 'dist/ValidatorCjs.js',
	  format: 'es',
	//   format: 'cjs',
	}
  };