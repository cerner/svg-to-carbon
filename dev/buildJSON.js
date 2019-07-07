/*eslint-disable*/
"use strict";

const path = require("path");
const { svgFolderToJSON, svgToJSON } = require("../index");

svgFolderToJSON({
    dirPath: path.join(__dirname, "../dev/assets"),
    options: {
        x: -5,
        y: -5,
        scale: 1.25
    }
}).then((output) => {
    console.log(JSON.stringify(output));
    console.log("Success!");
});

svgToJSON({
    path: path.join(__dirname, "../dev/assets/0031_glasses_a.svg"),
    options: {
        x: -5,
        y: -5,
        scale: 1.25
    }
}).then((output) => {
    console.log(JSON.stringify(output));
    console.log("Success!");
});
