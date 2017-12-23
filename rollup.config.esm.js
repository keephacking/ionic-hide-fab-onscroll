import config from './rollup.config.umd.js';
import { nameLibrary, PATH_DIST } from './config.js'
config.output.format = "es";
config.output.file = PATH_DIST + nameLibrary + ".esm.js";
export default config;