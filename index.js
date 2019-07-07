"use strict";

const R = require("ramda");
const { convertSVGToJSON, getSVGFiles, getSVGFile } = require("./src/parser");

/**
 * Performs a sequence of operations that transforms svg files to JSON objects with necessary svg functions.
 * @param {object} options - An object containing controls options to utilize when parsing the SVG content
 * @returns {Function} Promise returning function
 */
const convertSVGFolder = (options) =>
    R.composeP(
        (files) => convertSVGToJSON(files, options),
        getSVGFiles
    );
/**
 * Transforms an svg file to a JSON Object with necessary svg functions.
 * @param {object} options - An object containing controls options to utilize when parsing the SVG content
 * @returns {Function} Promise returning function
 */
const convertSVG = (options) =>
    R.composeP(
        (files) => convertSVGToJSON(files, options, false),
        getSVGFile
    );
/**
 * Converts svg files into equivalent fusion functions and outputs to the specified
 * file.
 * @param {Object} opts - The additional parameters to embed within the JSON object
 * @returns {Promise} A promise that is resolve upon completion.
 */
const svgFolderToJSON = (opts) => convertSVGFolder(opts.options)(opts.dirPath);
/**
 * Converts an SVG to JSON given a path to SVG file
 * @param {Object} opts - The additional parameters to embed within the JSON object
 * @returns {Promise} A promise that is resolve upon completion.
 */
const svgToJSON = (opts) => convertSVG(opts.options)(opts.path);

module.exports = {
    svgFolderToJSON,
    svgToJSON
};
