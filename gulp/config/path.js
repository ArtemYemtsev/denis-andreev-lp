import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./assets`
const srcFolder = `./src`

export const path = {
    build: {
        html: `./`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/main.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        fonts: `${srcFolder}/fonts/*.*`,
        js: `${srcFolder}/js/app.js`,
    },
    watch: {
        html: `./*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        js: `${srcFolder}/js/**/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}