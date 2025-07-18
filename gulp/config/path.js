import * as nodePath from "node:path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        iconFonts: `${buildFolder}/css/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,mp4,webp}`,
        iconFonts: `${srcFolder}/sass/**/*.{ttf,woff,svg,eot}`,
        svg: `${srcFolder}/img/**/*.svg`,
        sass: `${srcFolder}/sass/style.sass`,
        html: `${srcFolder}/*.{pug,html}`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,mp4,webp,svg}`,
        sass: `${srcFolder}/sass/**/*.{sass,css}`,
        html: `${srcFolder}/**/*.{pug,html}`,
        svgicons: `${srcFolder}/svgicons/**/*.svg`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
};