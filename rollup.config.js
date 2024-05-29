import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "esm",
        name: "react-jumping-text",
        sourcemap: false
    },
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        postcss({
            extract: 'jumpingText.css',
            minimize: true
        })
    ]
});
