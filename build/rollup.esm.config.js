import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import filesize from "rollup-plugin-filesize";
import json from "rollup-plugin-json";

export default {
  input: "src/plugin.js",
  plugins: [
    vue({ compileTemplate: true, css: false }),
    json(),
    buble({
      objectAssign: "Object.assign",
      jsx: "h"
    }),
    filesize()
  ],
  output: [
    {
      file: `dist/vstx-data-table.min.esm.js`,
      format: "es"
    }
  ]
};
