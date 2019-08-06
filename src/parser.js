"use strict";

const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({
    explicitArray: false,
    preserveChildrenOrder: true
});
const glob = require("glob");
const tagList = require("./tagList");

const getNodeWithInnerHtml = (html, attrs) =>
    Object.assign(attrs, {
        _html: html
    });
/**
 * Parses the node based on the buffered output provided using node js scan of the file
 * @param {Object} node - The svg node to process.
 * @returns {Object} The node as an object.
 */
const parseNode = (node) => {
    const nodes = {};
    const keys = Object.keys(node);
    const processAsArray = (childKey, childNode) =>
        Object.assign(nodes, {
            [childKey]: childNode.map((child) => child.$)
        });
    keys.forEach((childKey) => {
        if (tagList.includes(childKey)) {
            const childNode = node[childKey];
            if (Array.isArray(childNode)) {
                processAsArray(childKey, childNode);
            } else {
                const hasMatchingTagList = Object.keys(childNode).some((c) =>
                    tagList.includes(c)
                );
                if (!hasMatchingTagList && childNode._) {
                    Object.assign(nodes, {
                        [childKey]: getNodeWithInnerHtml(
                            childNode._,
                            childNode.$
                        )
                    });
                } else {
                    Object.assign(nodes, {
                        [childKey]: hasMatchingTagList
                            ? parseNode(childNode)
                            : childNode.$
                    });
                }
            }
        }
    });
    return nodes;
};

/**
 * Creates the JSON from an SVG file.
 * @param {string} file - The file for which the function body will be generated.
 * @param {object} [options] - An object containing controls options to utilize when parsing the SVG content
 * @returns {Promise} A promise to generate the function body of an SVG file.
 */
const parseFile = (file, options = {}) =>
    new Promise((resolve, reject) => {
        fs.readFile(file, "utf8", (err, data) => {
            parser.parseString(data, (err, result) =>
                resolve({
                    [path.basename(file)]: Object.assign(
                        {},
                        parseNode(result.svg),
                        { options }
                    )
                })
            );
        });
    });

/**
 * Processes a list of files to create JSON
 * @param {Array<string>} files - Array of file names to be processed.
 * @param {object} [options] - An object containing controls options to utilize when parsing the SVG content
 * @param {boolean} isBulkOperation - true if conversion is a folder, false otherwise
 * @returns {Promise} A promise for all files being processed. Resolved once
 * all child Promises are resolved.
 */
const convertSVGToJSON = (files, options = {}, isBulkOperation = true) =>
    isBulkOperation
        ? Promise.all(files.map((file) => parseFile(file, options)))
        : new Promise((resolve, reject) => {
              resolve(parseFile(files[0], options));
          });

/**
 * Gets a list of svg files starting at the provided directory.
 * @param {string} startingDir - The directory to start searching.
 * @returns {Promise} Returns a promise to a list of files.
 */
const getSVGFiles = (startingDir) => {
    const svgPath = path.join(startingDir, "**/*.svg");
    return new Promise((resolve, reject) => {
        glob(svgPath, {}, (err, files) => resolve(files));
    });
};
/**
 * Get an SVG file based on the path provided
 * @param {string} path - Path for the svg file
 * @returns {Promise<any>} Promises an SVG file
 */
const getSVGFile = (path) =>
    new Promise((resolve, reject) => {
        glob(path, {}, (err, file) => resolve(file));
    });

module.exports = {
    convertSVGToJSON,
    getSVGFiles,
    getSVGFile
};
