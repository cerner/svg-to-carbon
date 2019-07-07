<div align="center">
    <img width="200" height="200" src="https://github.com/cerner/carbon-graphs/raw/master/build/assets/icons/Carbon_256.png">
</div>

<h1 align="center">
  svg-to-carbon
</h1>

A small utility to convert svg file(s) to JSON to provide as an input generating Carbon graphs.

## Usage

Consumer can use the following exposed functions:

-   `svgFolderToJSON` - A path to directory containing SVG files, gives you an array of objects conforming to the below [Object Structure](#output-format)
-   `svgToJSON` - A path to an SVG file, gives you a JSON conforming to the below [Object Structure](#output-format)

```javascript
const path = require("path");
const { svgFolderToJSON } = require("svg-to-carbon");

svgFolderToJSON({
    dirPath: path.join(__dirname, "dev/assets"),
    options: {
        x: -5,
        y: -5,
        scale: 1.25
    }
}).then((output) => {
    console.log(output);
    console.log("Success!");
});
```

```javascript
const { svgToJSON } = require("svg-to-carbon");
svgToJSON({
    path: path.join(__dirname, "../dev/assets/0031_glasses_a.svg"),
    options: {
        x: -5,
        y: -5,
        scale: 1.25
    }
}).then((output) => {
    console.log(output);
    console.log("Success!");
});
```

## Output format

```json
{
    "S_0002_diamond.svg": {
        "path": [Object]
    },
    "options": {
        "x": -5,
        "y": -5,
        "scale": 1.25
    }
}
```

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
