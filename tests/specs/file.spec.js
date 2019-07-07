const { svgToJSON } = require("../../index");
const {
    ICON_WITH_PATH,
    ICON_WITH_MULTIPLE_PATHS,
    ICON_WITH_PATH_AND_ID,
    ICON_WITH_PATH_AND_CLASS,
    ICON_WITH_GROUP_AND_PATHS,
    ICON_WITH_CIRCLE_TAG,
    ICON_WITH_POLYGON_TAG,
    ICON_WITH_NESTED_GROUP_TAG,
    DEFAULT_OPTIONS
} = require("./helpers");

describe("SVG File to JSON", () => {
    it("Converts path correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_PATH,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0031_glasses_a.svg"].path).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts multiple paths correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_MULTIPLE_PATHS,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(
                output["0037_exclamation_i_heavyTriangleRed.svg"].path
            ).toBeDefined();
            expect(
                output["0037_exclamation_i_heavyTriangleRed.svg"].path.length
            ).toBe(2);
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts multiple paths and ids correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_PATH_AND_ID,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path
            ).toBeDefined();
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path.length
            ).toBe(2);
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path[0].id
            ).toBe("triangle_1_");
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path[1].id
            ).toBe("exclamation");
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path[0]
                    .fill
            ).toBeDefined();
            expect(
                output["0037_exclamation_i_heavyTriangleYellow.svg"].path[1]
                    .fill
            ).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts classes correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_PATH_AND_CLASS,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(
                output["0037_exclamation_i_lightCircleGray.svg"].path
            ).toBeDefined();
            expect(
                output["0037_exclamation_i_lightCircleGray.svg"].path.class
            ).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts group and its children correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_GROUP_AND_PATHS,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0169_bed_a.svg"].g).toBeDefined();
            expect(output["0169_bed_a.svg"].g.path).toBeDefined();
            expect(output["0169_bed_a.svg"].g.circle).toBeDefined();
            expect(output["0169_bed_a.svg"].g.circle.cx).toBeDefined();
            expect(output["0169_bed_a.svg"].g.circle.cy).toBeDefined();
            expect(output["0169_bed_a.svg"].g.circle.r).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts circle and its attrs correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_CIRCLE_TAG,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0041_x_i_heavyCircle.svg"].circle).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].circle.cx).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].circle.cy).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].circle.r).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Converts polygon and its attrs correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_POLYGON_TAG,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0041_x_i_heavyCircle.svg"].polygon).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].polygon.id).toBeDefined();
            expect(
                output["0041_x_i_heavyCircle.svg"].polygon.fill
            ).toBeDefined();
            expect(
                output["0041_x_i_heavyCircle.svg"].polygon.points
            ).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });

    it("Adds options to output correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_POLYGON_TAG,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0041_x_i_heavyCircle.svg"].options).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].options.x).toBeDefined();
            expect(output["0041_x_i_heavyCircle.svg"].options.y).toBeDefined();
            expect(
                output["0041_x_i_heavyCircle.svg"].options.scale
            ).toBeDefined();
        });
    });

    it("Converts nested group and its children correctly", async () => {
        await svgToJSON({
            path: ICON_WITH_NESTED_GROUP_TAG,
            options: DEFAULT_OPTIONS
        }).then((output) => {
            expect(output["0143_personCurvedArrow_a.svg"].g).toBeDefined();
            expect(output["0143_personCurvedArrow_a.svg"].g.g).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.g.circle
            ).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.g.circle.cx
            ).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.g.circle.cy
            ).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.g.circle.r
            ).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.path[0]
            ).toBeDefined();
            expect(
                output["0143_personCurvedArrow_a.svg"].g.path[1]
            ).toBeDefined();
            expect(output).toMatchSnapshot();
        });
    });
});
