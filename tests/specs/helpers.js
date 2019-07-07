const path = require("path");

const ICON_WITH_PATH = path.join(
    __dirname,
    "../../dev/assets/0031_glasses_a.svg"
);
const ICON_WITH_MULTIPLE_PATHS = path.join(
    __dirname,
    "../../dev/assets/0037_exclamation_i_heavyTriangleRed.svg"
);
const ICON_WITH_PATH_AND_ID = path.join(
    __dirname,
    "../../dev/assets/0037_exclamation_i_heavyTriangleYellow.svg"
);
const ICON_WITH_PATH_AND_CLASS = path.join(
    __dirname,
    "../../dev/assets/0037_exclamation_i_lightCircleGray.svg"
);
const ICON_WITH_GROUP_AND_PATHS = path.join(
    __dirname,
    "../../dev/assets/0169_bed_a.svg"
);
const ICON_WITH_CIRCLE_TAG = path.join(
    __dirname,
    "../../dev/assets/0041_x_i_heavyCircle.svg"
);
const ICON_WITH_POLYGON_TAG = path.join(
    __dirname,
    "../../dev/assets/0041_x_i_heavyCircle.svg"
);
const ICON_WITH_NESTED_GROUP_TAG = path.join(
    __dirname,
    "../../dev/assets/0143_personCurvedArrow_a.svg"
);
const DEFAULT_OPTIONS = {
    x: -5,
    y: -5,
    scale: 1.25
};

module.exports = {
    ICON_WITH_PATH,
    ICON_WITH_MULTIPLE_PATHS,
    ICON_WITH_PATH_AND_ID,
    ICON_WITH_PATH_AND_CLASS,
    ICON_WITH_GROUP_AND_PATHS,
    ICON_WITH_CIRCLE_TAG,
    ICON_WITH_POLYGON_TAG,
    ICON_WITH_NESTED_GROUP_TAG,
    DEFAULT_OPTIONS
};
