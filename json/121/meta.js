"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sketch_file_format_ts_1 = require("@sketch-hq/sketch-file-format-ts");
exports.default = (function (pageId) {
    var _a;
    return ({
        "commit": "263281c53601afed11c5ffc64635380925727011",
        "pagesAndArtboards": (_a = {},
            _a[pageId] = {
                "name": "Page 1",
                "artboards": {}
            },
            _a),
        // @ts-ignore
        "version": 121,
        "fonts": [],
        "compatibilityVersion": 99,
        "app": sketch_file_format_ts_1.FileFormat3.BundleId.PublicRelease,
        "autosaved": 0,
        "variant": "NONAPPSTORE",
        "created": {
            "commit": "263281c53601afed11c5ffc64635380925727011",
            // @ts-ignore
            "appVersion": "61",
            "build": 89581,
            "app": sketch_file_format_ts_1.FileFormat3.BundleId.PublicRelease,
            "compatibilityVersion": 99,
            // @ts-ignore
            "version": 121,
            "variant": "NONAPPSTORE"
        },
        "saveHistory": [
            "NONAPPSTORE.89581"
        ],
        // @ts-ignore
        "appVersion": "61",
        "build": 89581
    });
});
