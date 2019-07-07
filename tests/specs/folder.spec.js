const path = require("path");
const { svgFolderToJSON } = require("../../index");
const { DEFAULT_OPTIONS } = require("./helpers");

describe("SVG Folder to JSON", () => {
    it("Converts correctly", async () => {
        await svgFolderToJSON({
            dirPath: path.join(__dirname, "../../dev/assets"),
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output).toMatchSnapshot();
        });
    });
});
