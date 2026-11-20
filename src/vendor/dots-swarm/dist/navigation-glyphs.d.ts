import type { Point } from "./shapes.js";
export declare const NAVIGATION_GLYPHS: {
    readonly pin: {
        readonly label: "Map pin";
        readonly category: "Maps";
        readonly description: "A place on the map.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [6.675512, 12.728247], readonly [6.317593, 12.155986], readonly [6.020948, 11.549694], readonly [5.788777, 10.915909], readonly [5.623582, 10.261463], readonly [5.527145, 9.593416], readonly [5.500505, 8.918969], readonly [5.543951, 8.245396], readonly [5.657013, 7.57996], readonly [5.838472, 6.929837], readonly [6.086372, 6.302036], readonly [6.39804, 5.703328], readonly [6.770114, 5.140169], readonly [7.198583, 4.61863], readonly [7.678827, 4.144337], readonly [8.205666, 3.722403], readonly [8.77342, 3.357378], readonly [9.375967, 3.053198], readonly [10.006809, 2.813144], readonly [10.659144, 2.639803], readonly [11.325938, 2.535045], readonly [12, 2.5], readonly [12.674062, 2.535045], readonly [13.340856, 2.639803], readonly [13.993191, 2.813144], readonly [14.624033, 3.053198], readonly [15.22658, 3.357378], readonly [15.794334, 3.722403], readonly [16.321173, 4.144337], readonly [16.801417, 4.61863], readonly [17.229886, 5.140169], readonly [17.60196, 5.703328], readonly [17.913628, 6.302036], readonly [18.161528, 6.929837], readonly [18.342987, 7.57996], readonly [18.456049, 8.245396], readonly [18.499495, 8.918969], readonly [18.472855, 9.593416], readonly [18.376418, 10.261463], readonly [18.211223, 10.915909], readonly [17.979052, 11.549694], readonly [17.682407, 12.155986], readonly [17.324488, 12.728247]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [6.68, 12.73], readonly [12, 22], readonly [17.32, 12.73]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [14.2, 9], readonly [14.187948, 9.229963], readonly [14.151925, 9.457406], readonly [14.092324, 9.679837], readonly [14.0098, 9.894821], readonly [13.905256, 10.1], readonly [13.779837, 10.293128], readonly [13.634919, 10.472087], readonly [13.472087, 10.634919], readonly [13.293128, 10.779837], readonly [13.1, 10.905256], readonly [12.894821, 11.0098], readonly [12.679837, 11.092324], readonly [12.457406, 11.151925], readonly [12.229963, 11.187948], readonly [12, 11.2], readonly [11.770037, 11.187948], readonly [11.542594, 11.151925], readonly [11.320163, 11.092324], readonly [11.105179, 11.0098], readonly [10.9, 10.905256], readonly [10.706872, 10.779837], readonly [10.527913, 10.634919], readonly [10.365081, 10.472087], readonly [10.220163, 10.293128], readonly [10.094744, 10.1], readonly [9.9902, 9.894821], readonly [9.907676, 9.679837], readonly [9.848075, 9.457406], readonly [9.812052, 9.229963], readonly [9.8, 9], readonly [9.812052, 8.770037], readonly [9.848075, 8.542594], readonly [9.907676, 8.320163], readonly [9.9902, 8.105179], readonly [10.094744, 7.9], readonly [10.220163, 7.706872], readonly [10.365081, 7.527913], readonly [10.527913, 7.365081], readonly [10.706872, 7.220163], readonly [10.9, 7.094744], readonly [11.105179, 6.9902], readonly [11.320163, 6.907676], readonly [11.542594, 6.848075], readonly [11.770037, 6.812052], readonly [12, 6.8], readonly [12.229963, 6.812052], readonly [12.457406, 6.848075], readonly [12.679837, 6.907676], readonly [12.894821, 6.9902], readonly [13.1, 7.094744], readonly [13.293128, 7.220163], readonly [13.472087, 7.365081], readonly [13.634919, 7.527913], readonly [13.779837, 7.706872], readonly [13.905256, 7.9], readonly [14.0098, 8.105179], readonly [14.092324, 8.320163], readonly [14.151925, 8.542594], readonly [14.187948, 8.770037], readonly [14.2, 9]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [];
        };
        readonly flow: false;
    };
    readonly "current-location": {
        readonly label: "Current location";
        readonly category: "Maps";
        readonly description: "Your live GPS position.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [18, 12], readonly [17.967131, 12.627171], readonly [17.868886, 13.24747], readonly [17.706339, 13.854102], readonly [17.481273, 14.44042], readonly [17.196152, 15], readonly [16.854102, 15.526712], readonly [16.458869, 16.014784], readonly [16.014784, 16.458869], readonly [15.526712, 16.854102], readonly [15, 17.196152], readonly [14.44042, 17.481273], readonly [13.854102, 17.706339], readonly [13.24747, 17.868886], readonly [12.627171, 17.967131], readonly [12, 18], readonly [11.372829, 17.967131], readonly [10.75253, 17.868886], readonly [10.145898, 17.706339], readonly [9.55958, 17.481273], readonly [9, 17.196152], readonly [8.473288, 16.854102], readonly [7.985216, 16.458869], readonly [7.541131, 16.014784], readonly [7.145898, 15.526712], readonly [6.803848, 15], readonly [6.518727, 14.44042], readonly [6.293661, 13.854102], readonly [6.131114, 13.24747], readonly [6.032869, 12.627171], readonly [6, 12], readonly [6.032869, 11.372829], readonly [6.131114, 10.75253], readonly [6.293661, 10.145898], readonly [6.518727, 9.55958], readonly [6.803848, 9], readonly [7.145898, 8.473288], readonly [7.541131, 7.985216], readonly [7.985216, 7.541131], readonly [8.473288, 7.145898], readonly [9, 6.803848], readonly [9.55958, 6.518727], readonly [10.145898, 6.293661], readonly [10.75253, 6.131114], readonly [11.372829, 6.032869], readonly [12, 6], readonly [12.627171, 6.032869], readonly [13.24747, 6.131114], readonly [13.854102, 6.293661], readonly [14.44042, 6.518727], readonly [15, 6.803848], readonly [15.526712, 7.145898], readonly [16.014784, 7.541131], readonly [16.458869, 7.985216], readonly [16.854102, 8.473288], readonly [17.196152, 9], readonly [17.481273, 9.55958], readonly [17.706339, 10.145898], readonly [17.868886, 10.75253], readonly [17.967131, 11.372829], readonly [18, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [12, 1], readonly [12, 5]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [12, 19], readonly [12, 23]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [1, 12], readonly [5, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [19, 12], readonly [23, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [13.8, 12], readonly [13.790139, 12.188151], readonly [13.760666, 12.374241], readonly [13.711902, 12.556231], readonly [13.644382, 12.732126], readonly [13.558846, 12.9], readonly [13.456231, 13.058013], readonly [13.337661, 13.204435], readonly [13.204435, 13.337661], readonly [13.058013, 13.456231], readonly [12.9, 13.558846], readonly [12.732126, 13.644382], readonly [12.556231, 13.711902], readonly [12.374241, 13.760666], readonly [12.188151, 13.790139], readonly [12, 13.8], readonly [11.811849, 13.790139], readonly [11.625759, 13.760666], readonly [11.443769, 13.711902], readonly [11.267874, 13.644382], readonly [11.1, 13.558846], readonly [10.941987, 13.456231], readonly [10.795565, 13.337661], readonly [10.662339, 13.204435], readonly [10.543769, 13.058013], readonly [10.441154, 12.9], readonly [10.355618, 12.732126], readonly [10.288098, 12.556231], readonly [10.239334, 12.374241], readonly [10.209861, 12.188151], readonly [10.2, 12], readonly [10.209861, 11.811849], readonly [10.239334, 11.625759], readonly [10.288098, 11.443769], readonly [10.355618, 11.267874], readonly [10.441154, 11.1], readonly [10.543769, 10.941987], readonly [10.662339, 10.795565], readonly [10.795565, 10.662339], readonly [10.941987, 10.543769], readonly [11.1, 10.441154], readonly [11.267874, 10.355618], readonly [11.443769, 10.288098], readonly [11.625759, 10.239334], readonly [11.811849, 10.209861], readonly [12, 10.2], readonly [12.188151, 10.209861], readonly [12.374241, 10.239334], readonly [12.556231, 10.288098], readonly [12.732126, 10.355618], readonly [12.9, 10.441154], readonly [13.058013, 10.543769], readonly [13.204435, 10.662339], readonly [13.337661, 10.795565], readonly [13.456231, 10.941987], readonly [13.558846, 11.1], readonly [13.644382, 11.267874], readonly [13.711902, 11.443769], readonly [13.760666, 11.625759], readonly [13.790139, 11.811849], readonly [13.8, 12]];
                readonly width: 2.25;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [];
        };
        readonly flow: false;
    };
    readonly compass: {
        readonly label: "Compass";
        readonly category: "Maps";
        readonly description: "Find your bearing.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [22, 12], readonly [21.945219, 13.045285], readonly [21.781476, 14.079117], readonly [21.510565, 15.09017], readonly [21.135455, 16.067366], readonly [20.660254, 17], readonly [20.09017, 17.877853], readonly [19.431448, 18.691306], readonly [18.691306, 19.431448], readonly [17.877853, 20.09017], readonly [17, 20.660254], readonly [16.067366, 21.135455], readonly [15.09017, 21.510565], readonly [14.079117, 21.781476], readonly [13.045285, 21.945219], readonly [12, 22], readonly [10.954715, 21.945219], readonly [9.920883, 21.781476], readonly [8.90983, 21.510565], readonly [7.932634, 21.135455], readonly [7, 20.660254], readonly [6.122147, 20.09017], readonly [5.308694, 19.431448], readonly [4.568552, 18.691306], readonly [3.90983, 17.877853], readonly [3.339746, 17], readonly [2.864545, 16.067366], readonly [2.489435, 15.09017], readonly [2.218524, 14.079117], readonly [2.054781, 13.045285], readonly [2, 12], readonly [2.054781, 10.954715], readonly [2.218524, 9.920883], readonly [2.489435, 8.90983], readonly [2.864545, 7.932634], readonly [3.339746, 7], readonly [3.90983, 6.122147], readonly [4.568552, 5.308694], readonly [5.308694, 4.568552], readonly [6.122147, 3.90983], readonly [7, 3.339746], readonly [7.932634, 2.864545], readonly [8.90983, 2.489435], readonly [9.920883, 2.218524], readonly [10.954715, 2.054781], readonly [12, 2], readonly [13.045285, 2.054781], readonly [14.079117, 2.218524], readonly [15.09017, 2.489435], readonly [16.067366, 2.864545], readonly [17, 3.339746], readonly [17.877853, 3.90983], readonly [18.691306, 4.568552], readonly [19.431448, 5.308694], readonly [20.09017, 6.122147], readonly [20.660254, 7], readonly [21.135455, 7.932634], readonly [21.510565, 8.90983], readonly [21.781476, 9.920883], readonly [21.945219, 10.954715], readonly [22, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [10, 10], readonly [8, 19], readonly [14, 14]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [{
                readonly vertices: readonly [readonly [16, 5], readonly [14, 14], readonly [10, 10]];
                readonly depth: 0.45;
            }];
        };
        readonly flow: false;
    };
    readonly map: {
        readonly label: "Folded map";
        readonly category: "Maps";
        readonly description: "An overview of the area.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [2, 5], readonly [8.5, 2], readonly [15.5, 5], readonly [22, 2], readonly [22, 19], readonly [15.5, 22], readonly [8.5, 19], readonly [2, 22], readonly [2, 5]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [8.5, 2], readonly [8.5, 19]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [15.5, 5], readonly [15.5, 22]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [];
        };
        readonly flow: false;
    };
    readonly car: {
        readonly label: "Car";
        readonly category: "Transport";
        readonly description: "Driving directions.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [3, 17], readonly [3, 12], readonly [6, 5], readonly [18, 5], readonly [21, 12], readonly [21, 17], readonly [3, 17]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [3, 12], readonly [21, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [5, 17], readonly [5, 20], readonly [8, 20], readonly [8, 17]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [16, 17], readonly [16, 20], readonly [19, 20], readonly [19, 17]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [6, 15], readonly [8, 15]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [16, 15], readonly [18, 15]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [];
        };
        readonly flow: false;
    };
    readonly walking: {
        readonly label: "Walking";
        readonly category: "Transport";
        readonly description: "Pedestrian directions.";
        readonly ink: {
            readonly strokes: readonly [{
                readonly points: readonly [readonly [16, 4], readonly [15.989044, 4.209057], readonly [15.956295, 4.415823], readonly [15.902113, 4.618034], readonly [15.827091, 4.813473], readonly [15.732051, 5], readonly [15.618034, 5.175571], readonly [15.48629, 5.338261], readonly [15.338261, 5.48629], readonly [15.175571, 5.618034], readonly [15, 5.732051], readonly [14.813473, 5.827091], readonly [14.618034, 5.902113], readonly [14.415823, 5.956295], readonly [14.209057, 5.989044], readonly [14, 6], readonly [13.790943, 5.989044], readonly [13.584177, 5.956295], readonly [13.381966, 5.902113], readonly [13.186527, 5.827091], readonly [13, 5.732051], readonly [12.824429, 5.618034], readonly [12.661739, 5.48629], readonly [12.51371, 5.338261], readonly [12.381966, 5.175571], readonly [12.267949, 5], readonly [12.172909, 4.813473], readonly [12.097887, 4.618034], readonly [12.043705, 4.415823], readonly [12.010956, 4.209057], readonly [12, 4], readonly [12.010956, 3.790943], readonly [12.043705, 3.584177], readonly [12.097887, 3.381966], readonly [12.172909, 3.186527], readonly [12.267949, 3], readonly [12.381966, 2.824429], readonly [12.51371, 2.661739], readonly [12.661739, 2.51371], readonly [12.824429, 2.381966], readonly [13, 2.267949], readonly [13.186527, 2.172909], readonly [13.381966, 2.097887], readonly [13.584177, 2.043705], readonly [13.790943, 2.010956], readonly [14, 2], readonly [14.209057, 2.010956], readonly [14.415823, 2.043705], readonly [14.618034, 2.097887], readonly [14.813473, 2.172909], readonly [15, 2.267949], readonly [15.175571, 2.381966], readonly [15.338261, 2.51371], readonly [15.48629, 2.661739], readonly [15.618034, 2.824429], readonly [15.732051, 3], readonly [15.827091, 3.186527], readonly [15.902113, 3.381966], readonly [15.956295, 3.584177], readonly [15.989044, 3.790943], readonly [16, 4]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [13, 7], readonly [10, 13], readonly [16, 18], readonly [17, 22]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [10, 13], readonly [8, 19], readonly [4, 22]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [12, 9], readonly [17, 12], readonly [21, 12]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }, {
                readonly points: readonly [readonly [12, 8], readonly [7, 8], readonly [3, 13]];
                readonly width: 1.3;
                readonly depth: 0.35;
            }];
            readonly triangles: readonly [];
        };
        readonly flow: false;
    };
};
export type NavigationGlyph = keyof typeof NAVIGATION_GLYPHS;
export declare const NAVIGATION_GLYPH_IDS: NavigationGlyph[];
export declare function isNavigationGlyph(shape: string): shape is NavigationGlyph;
export declare function getNavigationGlyphPoints(shape: NavigationGlyph, count: number, time: number): Point[];
