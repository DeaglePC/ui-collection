import type { Point } from "./shapes.js";
export declare const ESSENTIAL_SHAPES: {
    readonly microphone: {
        readonly label: "Microphone";
        readonly category: "Assistant";
        readonly description: "Voice input and listening.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [12, 2], readonly [12, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12, 2], readonly [12.348623, 2.015221], readonly [12.694593, 2.060769], readonly [13.035276, 2.136297], readonly [13.368081, 2.24123], readonly [13.690473, 2.374769], readonly [14, 2.535898], readonly [14.294306, 2.723392], readonly [14.57115, 2.935822], readonly [14.828427, 3.171573], readonly [15.064178, 3.42885], readonly [15.276608, 3.705694], readonly [15.464102, 4], readonly [15.625231, 4.309527], readonly [15.75877, 4.631919], readonly [15.863703, 4.964724], readonly [15.939231, 5.305407], readonly [15.984779, 5.651377], readonly [16, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [16, 6], readonly [16, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [16, 11], readonly [15.984779, 11.348623], readonly [15.939231, 11.694593], readonly [15.863703, 12.035276], readonly [15.75877, 12.368081], readonly [15.625231, 12.690473], readonly [15.464102, 13], readonly [15.276608, 13.294306], readonly [15.064178, 13.57115], readonly [14.828427, 13.828427], readonly [14.57115, 14.064178], readonly [14.294306, 14.276608], readonly [14, 14.464102], readonly [13.690473, 14.625231], readonly [13.368081, 14.75877], readonly [13.035276, 14.863703], readonly [12.694593, 14.939231], readonly [12.348623, 14.984779], readonly [12, 15]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12, 15], readonly [12, 15]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12, 15], readonly [11.651377, 14.984779], readonly [11.305407, 14.939231], readonly [10.964724, 14.863703], readonly [10.631919, 14.75877], readonly [10.309527, 14.625231], readonly [10, 14.464102], readonly [9.705694, 14.276608], readonly [9.42885, 14.064178], readonly [9.171573, 13.828427], readonly [8.935822, 13.57115], readonly [8.723392, 13.294306], readonly [8.535898, 13], readonly [8.374769, 12.690473], readonly [8.24123, 12.368081], readonly [8.136297, 12.035276], readonly [8.060769, 11.694593], readonly [8.015221, 11.348623], readonly [8, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [8, 11], readonly [8, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [8, 6], readonly [8.015221, 5.651377], readonly [8.060769, 5.305407], readonly [8.136297, 4.964724], readonly [8.24123, 4.631919], readonly [8.374769, 4.309527], readonly [8.535898, 4], readonly [8.723392, 3.705694], readonly [8.935822, 3.42885], readonly [9.171573, 3.171573], readonly [9.42885, 2.935822], readonly [9.705694, 2.723392], readonly [10, 2.535898], readonly [10.309527, 2.374769], readonly [10.631919, 2.24123], readonly [10.964724, 2.136297], readonly [11.305407, 2.060769], readonly [11.651377, 2.015221], readonly [12, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 12], readonly [18.973363, 12.61009], readonly [18.893654, 13.215537], readonly [18.761481, 13.811733], readonly [18.577848, 14.394141], readonly [18.344155, 14.958328], readonly [18.062178, 15.5], readonly [17.734064, 16.015035], readonly [17.362311, 16.499513], readonly [16.949747, 16.949747], readonly [16.499513, 17.362311], readonly [16.015035, 17.734064], readonly [15.5, 18.062178], readonly [14.958328, 18.344155], readonly [14.394141, 18.577848], readonly [13.811733, 18.761481], readonly [13.215537, 18.893654], readonly [12.61009, 18.973363], readonly [12, 19], readonly [11.38991, 18.973363], readonly [10.784463, 18.893654], readonly [10.188267, 18.761481], readonly [9.605859, 18.577848], readonly [9.041672, 18.344155], readonly [8.5, 18.062178], readonly [7.984965, 17.734064], readonly [7.500487, 17.362311], readonly [7.050253, 16.949747], readonly [6.637689, 16.499513], readonly [6.265936, 16.015035], readonly [5.937822, 15.5], readonly [5.655845, 14.958328], readonly [5.422152, 14.394141], readonly [5.238519, 13.811733], readonly [5.106346, 13.215537], readonly [5.026637, 12.61009], readonly [5, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 9], readonly [5, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 9], readonly [19, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12, 19], readonly [12, 23]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [8, 23], readonly [16, 23]];
            readonly width: 1.35;
        }];
    };
    readonly headphones: {
        readonly label: "Headphones";
        readonly category: "Assistant";
        readonly description: "Audio output and spoken responses.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [3, 12], readonly [3.034248, 11.128443], readonly [3.13673, 10.263518], readonly [3.306668, 9.41181], readonly [3.542766, 8.579799], readonly [3.84323, 7.773817], readonly [4.205771, 7], readonly [4.627632, 6.264236], readonly [5.1056, 5.572124], readonly [5.636039, 4.928932], readonly [6.214912, 4.339556], readonly [6.837812, 3.80848], readonly [7.5, 3.339746], readonly [8.196436, 2.936922], readonly [8.921819, 2.603074], readonly [9.670629, 2.340742], readonly [10.437166, 2.151922], readonly [11.215598, 2.038053], readonly [12, 2], readonly [12.784402, 2.038053], readonly [13.562834, 2.151922], readonly [14.329371, 2.340742], readonly [15.078181, 2.603074], readonly [15.803564, 2.936922], readonly [16.5, 3.339746], readonly [17.162188, 3.80848], readonly [17.785088, 4.339556], readonly [18.363961, 4.928932], readonly [18.8944, 5.572124], readonly [19.372368, 6.264236], readonly [19.794229, 7], readonly [20.15677, 7.773817], readonly [20.457234, 8.579799], readonly [20.693332, 9.41181], readonly [20.86327, 10.263518], readonly [20.965752, 11.128443], readonly [21, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [4.5, 11], readonly [5.5, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5.5, 11], readonly [5.630734, 11.005708], readonly [5.760472, 11.022788], readonly [5.888229, 11.051111], readonly [6.01303, 11.090461], readonly [6.133927, 11.140538], readonly [6.25, 11.200962], readonly [6.360365, 11.271272], readonly [6.464181, 11.350933], readonly [6.56066, 11.43934], readonly [6.649067, 11.535819], readonly [6.728728, 11.639635], readonly [6.799038, 11.75], readonly [6.859462, 11.866073], readonly [6.909539, 11.98697], readonly [6.948889, 12.111771], readonly [6.977212, 12.239528], readonly [6.994292, 12.369266], readonly [7, 12.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 12.5], readonly [7, 18.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 18.5], readonly [6.994292, 18.630734], readonly [6.977212, 18.760472], readonly [6.948889, 18.888229], readonly [6.909539, 19.01303], readonly [6.859462, 19.133927], readonly [6.799038, 19.25], readonly [6.728728, 19.360365], readonly [6.649067, 19.464181], readonly [6.56066, 19.56066], readonly [6.464181, 19.649067], readonly [6.360365, 19.728728], readonly [6.25, 19.799038], readonly [6.133927, 19.859462], readonly [6.01303, 19.909539], readonly [5.888229, 19.948889], readonly [5.760472, 19.977212], readonly [5.630734, 19.994292], readonly [5.5, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5.5, 20], readonly [4.5, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [4.5, 20], readonly [4.369266, 19.994292], readonly [4.239528, 19.977212], readonly [4.111771, 19.948889], readonly [3.98697, 19.909539], readonly [3.866073, 19.859462], readonly [3.75, 19.799038], readonly [3.639635, 19.728728], readonly [3.535819, 19.649067], readonly [3.43934, 19.56066], readonly [3.350933, 19.464181], readonly [3.271272, 19.360365], readonly [3.200962, 19.25], readonly [3.140538, 19.133927], readonly [3.090461, 19.01303], readonly [3.051111, 18.888229], readonly [3.022788, 18.760472], readonly [3.005708, 18.630734], readonly [3, 18.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 18.5], readonly [3, 12.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 12.5], readonly [3.005708, 12.369266], readonly [3.022788, 12.239528], readonly [3.051111, 12.111771], readonly [3.090461, 11.98697], readonly [3.140538, 11.866073], readonly [3.200962, 11.75], readonly [3.271272, 11.639635], readonly [3.350933, 11.535819], readonly [3.43934, 11.43934], readonly [3.535819, 11.350933], readonly [3.639635, 11.271272], readonly [3.75, 11.200962], readonly [3.866073, 11.140538], readonly [3.98697, 11.090461], readonly [4.111771, 11.051111], readonly [4.239528, 11.022788], readonly [4.369266, 11.005708], readonly [4.5, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [18.5, 11], readonly [19.5, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19.5, 11], readonly [19.630734, 11.005708], readonly [19.760472, 11.022788], readonly [19.888229, 11.051111], readonly [20.01303, 11.090461], readonly [20.133927, 11.140538], readonly [20.25, 11.200962], readonly [20.360365, 11.271272], readonly [20.464181, 11.350933], readonly [20.56066, 11.43934], readonly [20.649067, 11.535819], readonly [20.728728, 11.639635], readonly [20.799038, 11.75], readonly [20.859462, 11.866073], readonly [20.909539, 11.98697], readonly [20.948889, 12.111771], readonly [20.977212, 12.239528], readonly [20.994292, 12.369266], readonly [21, 12.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 12.5], readonly [21, 18.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 18.5], readonly [20.994292, 18.630734], readonly [20.977212, 18.760472], readonly [20.948889, 18.888229], readonly [20.909539, 19.01303], readonly [20.859462, 19.133927], readonly [20.799038, 19.25], readonly [20.728728, 19.360365], readonly [20.649067, 19.464181], readonly [20.56066, 19.56066], readonly [20.464181, 19.649067], readonly [20.360365, 19.728728], readonly [20.25, 19.799038], readonly [20.133927, 19.859462], readonly [20.01303, 19.909539], readonly [19.888229, 19.948889], readonly [19.760472, 19.977212], readonly [19.630734, 19.994292], readonly [19.5, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19.5, 20], readonly [18.5, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [18.5, 20], readonly [18.369266, 19.994292], readonly [18.239528, 19.977212], readonly [18.111771, 19.948889], readonly [17.98697, 19.909539], readonly [17.866073, 19.859462], readonly [17.75, 19.799038], readonly [17.639635, 19.728728], readonly [17.535819, 19.649067], readonly [17.43934, 19.56066], readonly [17.350933, 19.464181], readonly [17.271272, 19.360365], readonly [17.200962, 19.25], readonly [17.140538, 19.133927], readonly [17.090461, 19.01303], readonly [17.051111, 18.888229], readonly [17.022788, 18.760472], readonly [17.005708, 18.630734], readonly [17, 18.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [17, 18.5], readonly [17, 12.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [17, 12.5], readonly [17.005708, 12.369266], readonly [17.022788, 12.239528], readonly [17.051111, 12.111771], readonly [17.090461, 11.98697], readonly [17.140538, 11.866073], readonly [17.200962, 11.75], readonly [17.271272, 11.639635], readonly [17.350933, 11.535819], readonly [17.43934, 11.43934], readonly [17.535819, 11.350933], readonly [17.639635, 11.271272], readonly [17.75, 11.200962], readonly [17.866073, 11.140538], readonly [17.98697, 11.090461], readonly [18.111771, 11.051111], readonly [18.239528, 11.022788], readonly [18.369266, 11.005708], readonly [18.5, 11]];
            readonly width: 1.35;
        }];
    };
    readonly "thought-bubble": {
        readonly label: "Thought bubble";
        readonly category: "Assistant";
        readonly description: "A moment of thought.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [22, 9], readonly [21.961947, 9.61009], readonly [21.848078, 10.215537], readonly [21.659258, 10.811733], readonly [21.396926, 11.394141], readonly [21.063078, 11.958328], readonly [20.660254, 12.5], readonly [20.19152, 13.015035], readonly [19.660444, 13.499513], readonly [19.071068, 13.949747], readonly [18.427876, 14.362311], readonly [17.735764, 14.734064], readonly [17, 15.062178], readonly [16.226183, 15.344155], readonly [15.420201, 15.577848], readonly [14.58819, 15.761481], readonly [13.736482, 15.893654], readonly [12.871557, 15.973363], readonly [12, 16], readonly [11.128443, 15.973363], readonly [10.263518, 15.893654], readonly [9.41181, 15.761481], readonly [8.579799, 15.577848], readonly [7.773817, 15.344155], readonly [7, 15.062178], readonly [6.264236, 14.734064], readonly [5.572124, 14.362311], readonly [4.928932, 13.949747], readonly [4.339556, 13.499513], readonly [3.80848, 13.015035], readonly [3.339746, 12.5], readonly [2.936922, 11.958328], readonly [2.603074, 11.394141], readonly [2.340742, 10.811733], readonly [2.151922, 10.215537], readonly [2.038053, 9.61009], readonly [2, 9], readonly [2.038053, 8.38991], readonly [2.151922, 7.784463], readonly [2.340742, 7.188267], readonly [2.603074, 6.605859], readonly [2.936922, 6.041672], readonly [3.339746, 5.5], readonly [3.80848, 4.984965], readonly [4.339556, 4.500487], readonly [4.928932, 4.050253], readonly [5.572124, 3.637689], readonly [6.264236, 3.265936], readonly [7, 2.937822], readonly [7.773817, 2.655845], readonly [8.579799, 2.422152], readonly [9.41181, 2.238519], readonly [10.263518, 2.106346], readonly [11.128443, 2.026637], readonly [12, 2], readonly [12.871557, 2.026637], readonly [13.736482, 2.106346], readonly [14.58819, 2.238519], readonly [15.420201, 2.422152], readonly [16.226183, 2.655845], readonly [17, 2.937822], readonly [17.735764, 3.265936], readonly [18.427876, 3.637689], readonly [19.071068, 4.050253], readonly [19.660444, 4.500487], readonly [20.19152, 4.984965], readonly [20.660254, 5.5], readonly [21.063078, 6.041672], readonly [21.396926, 6.605859], readonly [21.659258, 7.188267], readonly [21.848078, 7.784463], readonly [21.961947, 8.38991], readonly [22, 9]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [8.8, 19], readonly [8.79315, 19.15688], readonly [8.772654, 19.312567], readonly [8.738666, 19.465874], readonly [8.691447, 19.615636], readonly [8.631354, 19.760713], readonly [8.558846, 19.9], readonly [8.474474, 20.032438], readonly [8.37888, 20.157018], readonly [8.272792, 20.272792], readonly [8.157018, 20.37888], readonly [8.032438, 20.474474], readonly [7.9, 20.558846], readonly [7.760713, 20.631354], readonly [7.615636, 20.691447], readonly [7.465874, 20.738666], readonly [7.312567, 20.772654], readonly [7.15688, 20.79315], readonly [7, 20.8], readonly [6.84312, 20.79315], readonly [6.687433, 20.772654], readonly [6.534126, 20.738666], readonly [6.384364, 20.691447], readonly [6.239287, 20.631354], readonly [6.1, 20.558846], readonly [5.967562, 20.474474], readonly [5.842982, 20.37888], readonly [5.727208, 20.272792], readonly [5.62112, 20.157018], readonly [5.525526, 20.032438], readonly [5.441154, 19.9], readonly [5.368646, 19.760713], readonly [5.308553, 19.615636], readonly [5.261334, 19.465874], readonly [5.227346, 19.312567], readonly [5.20685, 19.15688], readonly [5.2, 19], readonly [5.20685, 18.84312], readonly [5.227346, 18.687433], readonly [5.261334, 18.534126], readonly [5.308553, 18.384364], readonly [5.368646, 18.239287], readonly [5.441154, 18.1], readonly [5.525526, 17.967562], readonly [5.62112, 17.842982], readonly [5.727208, 17.727208], readonly [5.842982, 17.62112], readonly [5.967562, 17.525526], readonly [6.1, 17.441154], readonly [6.239287, 17.368646], readonly [6.384364, 17.308553], readonly [6.534126, 17.261334], readonly [6.687433, 17.227346], readonly [6.84312, 17.20685], readonly [7, 17.2], readonly [7.15688, 17.20685], readonly [7.312567, 17.227346], readonly [7.465874, 17.261334], readonly [7.615636, 17.308553], readonly [7.760713, 17.368646], readonly [7.9, 17.441154], readonly [8.032438, 17.525526], readonly [8.157018, 17.62112], readonly [8.272792, 17.727208], readonly [8.37888, 17.842982], readonly [8.474474, 17.967562], readonly [8.558846, 18.1], readonly [8.631354, 18.239287], readonly [8.691447, 18.384364], readonly [8.738666, 18.534126], readonly [8.772654, 18.687433], readonly [8.79315, 18.84312], readonly [8.8, 19]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3.7, 23], readonly [3.697336, 23.061009], readonly [3.689365, 23.121554], readonly [3.676148, 23.181173], readonly [3.657785, 23.239414], readonly [3.634415, 23.295833], readonly [3.606218, 23.35], readonly [3.573406, 23.401504], readonly [3.536231, 23.449951], readonly [3.494975, 23.494975], readonly [3.449951, 23.536231], readonly [3.401504, 23.573406], readonly [3.35, 23.606218], readonly [3.295833, 23.634415], readonly [3.239414, 23.657785], readonly [3.181173, 23.676148], readonly [3.121554, 23.689365], readonly [3.061009, 23.697336], readonly [3, 23.7], readonly [2.938991, 23.697336], readonly [2.878446, 23.689365], readonly [2.818827, 23.676148], readonly [2.760586, 23.657785], readonly [2.704167, 23.634415], readonly [2.65, 23.606218], readonly [2.598496, 23.573406], readonly [2.550049, 23.536231], readonly [2.505025, 23.494975], readonly [2.463769, 23.449951], readonly [2.426594, 23.401504], readonly [2.393782, 23.35], readonly [2.365585, 23.295833], readonly [2.342215, 23.239414], readonly [2.323852, 23.181173], readonly [2.310635, 23.121554], readonly [2.302664, 23.061009], readonly [2.3, 23], readonly [2.302664, 22.938991], readonly [2.310635, 22.878446], readonly [2.323852, 22.818827], readonly [2.342215, 22.760586], readonly [2.365585, 22.704167], readonly [2.393782, 22.65], readonly [2.426594, 22.598496], readonly [2.463769, 22.550049], readonly [2.505025, 22.505025], readonly [2.550049, 22.463769], readonly [2.598496, 22.426594], readonly [2.65, 22.393782], readonly [2.704167, 22.365585], readonly [2.760586, 22.342215], readonly [2.818827, 22.323852], readonly [2.878446, 22.310635], readonly [2.938991, 22.302664], readonly [3, 22.3], readonly [3.061009, 22.302664], readonly [3.121554, 22.310635], readonly [3.181173, 22.323852], readonly [3.239414, 22.342215], readonly [3.295833, 22.365585], readonly [3.35, 22.393782], readonly [3.401504, 22.426594], readonly [3.449951, 22.463769], readonly [3.494975, 22.505025], readonly [3.536231, 22.550049], readonly [3.573406, 22.598496], readonly [3.606218, 22.65], readonly [3.634415, 22.704167], readonly [3.657785, 22.760586], readonly [3.676148, 22.818827], readonly [3.689365, 22.878446], readonly [3.697336, 22.938991], readonly [3.7, 23]];
            readonly width: 1.05;
        }, {
            readonly vertices: readonly [readonly [7.8, 9], readonly [7.796956, 9.069725], readonly [7.787846, 9.138919], readonly [7.772741, 9.207055], readonly [7.751754, 9.273616], readonly [7.725046, 9.338095], readonly [7.69282, 9.4], readonly [7.655322, 9.458861], readonly [7.612836, 9.51423], readonly [7.565685, 9.565685], readonly [7.51423, 9.612836], readonly [7.458861, 9.655322], readonly [7.4, 9.69282], readonly [7.338095, 9.725046], readonly [7.273616, 9.751754], readonly [7.207055, 9.772741], readonly [7.138919, 9.787846], readonly [7.069725, 9.796956], readonly [7, 9.8], readonly [6.930275, 9.796956], readonly [6.861081, 9.787846], readonly [6.792945, 9.772741], readonly [6.726384, 9.751754], readonly [6.661905, 9.725046], readonly [6.6, 9.69282], readonly [6.541139, 9.655322], readonly [6.48577, 9.612836], readonly [6.434315, 9.565685], readonly [6.387164, 9.51423], readonly [6.344678, 9.458861], readonly [6.30718, 9.4], readonly [6.274954, 9.338095], readonly [6.248246, 9.273616], readonly [6.227259, 9.207055], readonly [6.212154, 9.138919], readonly [6.203044, 9.069725], readonly [6.2, 9], readonly [6.203044, 8.930275], readonly [6.212154, 8.861081], readonly [6.227259, 8.792945], readonly [6.248246, 8.726384], readonly [6.274954, 8.661905], readonly [6.30718, 8.6], readonly [6.344678, 8.541139], readonly [6.387164, 8.48577], readonly [6.434315, 8.434315], readonly [6.48577, 8.387164], readonly [6.541139, 8.344678], readonly [6.6, 8.30718], readonly [6.661905, 8.274954], readonly [6.726384, 8.248246], readonly [6.792945, 8.227259], readonly [6.861081, 8.212154], readonly [6.930275, 8.203044], readonly [7, 8.2], readonly [7.069725, 8.203044], readonly [7.138919, 8.212154], readonly [7.207055, 8.227259], readonly [7.273616, 8.248246], readonly [7.338095, 8.274954], readonly [7.4, 8.30718], readonly [7.458861, 8.344678], readonly [7.51423, 8.387164], readonly [7.565685, 8.434315], readonly [7.612836, 8.48577], readonly [7.655322, 8.541139], readonly [7.69282, 8.6], readonly [7.725046, 8.661905], readonly [7.751754, 8.726384], readonly [7.772741, 8.792945], readonly [7.787846, 8.861081], readonly [7.796956, 8.930275], readonly [7.8, 9]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [12.8, 9], readonly [12.796956, 9.069725], readonly [12.787846, 9.138919], readonly [12.772741, 9.207055], readonly [12.751754, 9.273616], readonly [12.725046, 9.338095], readonly [12.69282, 9.4], readonly [12.655322, 9.458861], readonly [12.612836, 9.51423], readonly [12.565685, 9.565685], readonly [12.51423, 9.612836], readonly [12.458861, 9.655322], readonly [12.4, 9.69282], readonly [12.338095, 9.725046], readonly [12.273616, 9.751754], readonly [12.207055, 9.772741], readonly [12.138919, 9.787846], readonly [12.069725, 9.796956], readonly [12, 9.8], readonly [11.930275, 9.796956], readonly [11.861081, 9.787846], readonly [11.792945, 9.772741], readonly [11.726384, 9.751754], readonly [11.661905, 9.725046], readonly [11.6, 9.69282], readonly [11.541139, 9.655322], readonly [11.48577, 9.612836], readonly [11.434315, 9.565685], readonly [11.387164, 9.51423], readonly [11.344678, 9.458861], readonly [11.30718, 9.4], readonly [11.274954, 9.338095], readonly [11.248246, 9.273616], readonly [11.227259, 9.207055], readonly [11.212154, 9.138919], readonly [11.203044, 9.069725], readonly [11.2, 9], readonly [11.203044, 8.930275], readonly [11.212154, 8.861081], readonly [11.227259, 8.792945], readonly [11.248246, 8.726384], readonly [11.274954, 8.661905], readonly [11.30718, 8.6], readonly [11.344678, 8.541139], readonly [11.387164, 8.48577], readonly [11.434315, 8.434315], readonly [11.48577, 8.387164], readonly [11.541139, 8.344678], readonly [11.6, 8.30718], readonly [11.661905, 8.274954], readonly [11.726384, 8.248246], readonly [11.792945, 8.227259], readonly [11.861081, 8.212154], readonly [11.930275, 8.203044], readonly [12, 8.2], readonly [12.069725, 8.203044], readonly [12.138919, 8.212154], readonly [12.207055, 8.227259], readonly [12.273616, 8.248246], readonly [12.338095, 8.274954], readonly [12.4, 8.30718], readonly [12.458861, 8.344678], readonly [12.51423, 8.387164], readonly [12.565685, 8.434315], readonly [12.612836, 8.48577], readonly [12.655322, 8.541139], readonly [12.69282, 8.6], readonly [12.725046, 8.661905], readonly [12.751754, 8.726384], readonly [12.772741, 8.792945], readonly [12.787846, 8.861081], readonly [12.796956, 8.930275], readonly [12.8, 9]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [17.8, 9], readonly [17.796956, 9.069725], readonly [17.787846, 9.138919], readonly [17.772741, 9.207055], readonly [17.751754, 9.273616], readonly [17.725046, 9.338095], readonly [17.69282, 9.4], readonly [17.655322, 9.458861], readonly [17.612836, 9.51423], readonly [17.565685, 9.565685], readonly [17.51423, 9.612836], readonly [17.458861, 9.655322], readonly [17.4, 9.69282], readonly [17.338095, 9.725046], readonly [17.273616, 9.751754], readonly [17.207055, 9.772741], readonly [17.138919, 9.787846], readonly [17.069725, 9.796956], readonly [17, 9.8], readonly [16.930275, 9.796956], readonly [16.861081, 9.787846], readonly [16.792945, 9.772741], readonly [16.726384, 9.751754], readonly [16.661905, 9.725046], readonly [16.6, 9.69282], readonly [16.541139, 9.655322], readonly [16.48577, 9.612836], readonly [16.434315, 9.565685], readonly [16.387164, 9.51423], readonly [16.344678, 9.458861], readonly [16.30718, 9.4], readonly [16.274954, 9.338095], readonly [16.248246, 9.273616], readonly [16.227259, 9.207055], readonly [16.212154, 9.138919], readonly [16.203044, 9.069725], readonly [16.2, 9], readonly [16.203044, 8.930275], readonly [16.212154, 8.861081], readonly [16.227259, 8.792945], readonly [16.248246, 8.726384], readonly [16.274954, 8.661905], readonly [16.30718, 8.6], readonly [16.344678, 8.541139], readonly [16.387164, 8.48577], readonly [16.434315, 8.434315], readonly [16.48577, 8.387164], readonly [16.541139, 8.344678], readonly [16.6, 8.30718], readonly [16.661905, 8.274954], readonly [16.726384, 8.248246], readonly [16.792945, 8.227259], readonly [16.861081, 8.212154], readonly [16.930275, 8.203044], readonly [17, 8.2], readonly [17.069725, 8.203044], readonly [17.138919, 8.212154], readonly [17.207055, 8.227259], readonly [17.273616, 8.248246], readonly [17.338095, 8.274954], readonly [17.4, 8.30718], readonly [17.458861, 8.344678], readonly [17.51423, 8.387164], readonly [17.565685, 8.434315], readonly [17.612836, 8.48577], readonly [17.655322, 8.541139], readonly [17.69282, 8.6], readonly [17.725046, 8.661905], readonly [17.751754, 8.726384], readonly [17.772741, 8.792945], readonly [17.787846, 8.861081], readonly [17.796956, 8.930275], readonly [17.8, 9]];
            readonly width: 1.2;
        }];
    };
    readonly calendar: {
        readonly label: "Calendar";
        readonly category: "Productivity";
        readonly description: "Appointments and planning.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [5, 5], readonly [19, 5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 5], readonly [19.174311, 5.007611], readonly [19.347296, 5.030384], readonly [19.517638, 5.068148], readonly [19.68404, 5.120615], readonly [19.845237, 5.187384], readonly [20, 5.267949], readonly [20.147153, 5.361696], readonly [20.285575, 5.467911], readonly [20.414214, 5.585786], readonly [20.532089, 5.714425], readonly [20.638304, 5.852847], readonly [20.732051, 6], readonly [20.812616, 6.154763], readonly [20.879385, 6.31596], readonly [20.931852, 6.482362], readonly [20.969616, 6.652704], readonly [20.992389, 6.825689], readonly [21, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 7], readonly [21, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 20], readonly [20.992389, 20.174311], readonly [20.969616, 20.347296], readonly [20.931852, 20.517638], readonly [20.879385, 20.68404], readonly [20.812616, 20.845237], readonly [20.732051, 21], readonly [20.638304, 21.147153], readonly [20.532089, 21.285575], readonly [20.414214, 21.414214], readonly [20.285575, 21.532089], readonly [20.147153, 21.638304], readonly [20, 21.732051], readonly [19.845237, 21.812616], readonly [19.68404, 21.879385], readonly [19.517638, 21.931852], readonly [19.347296, 21.969616], readonly [19.174311, 21.992389], readonly [19, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 22], readonly [5, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 22], readonly [4.825689, 21.992389], readonly [4.652704, 21.969616], readonly [4.482362, 21.931852], readonly [4.31596, 21.879385], readonly [4.154763, 21.812616], readonly [4, 21.732051], readonly [3.852847, 21.638304], readonly [3.714425, 21.532089], readonly [3.585786, 21.414214], readonly [3.467911, 21.285575], readonly [3.361696, 21.147153], readonly [3.267949, 21], readonly [3.187384, 20.845237], readonly [3.120615, 20.68404], readonly [3.068148, 20.517638], readonly [3.030384, 20.347296], readonly [3.007611, 20.174311], readonly [3, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 20], readonly [3, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 7], readonly [3.007611, 6.825689], readonly [3.030384, 6.652704], readonly [3.068148, 6.482362], readonly [3.120615, 6.31596], readonly [3.187384, 6.154763], readonly [3.267949, 6], readonly [3.361696, 5.852847], readonly [3.467911, 5.714425], readonly [3.585786, 5.585786], readonly [3.714425, 5.467911], readonly [3.852847, 5.361696], readonly [4, 5.267949], readonly [4.154763, 5.187384], readonly [4.31596, 5.120615], readonly [4.482362, 5.068148], readonly [4.652704, 5.030384], readonly [4.825689, 5.007611], readonly [5, 5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 10], readonly [21, 10]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [8, 2], readonly [8, 7]];
            readonly width: 1.8;
        }, {
            readonly vertices: readonly [readonly [16, 2], readonly [16, 7]];
            readonly width: 1.8;
        }, {
            readonly vertices: readonly [readonly [7.65, 14], readonly [7.647527, 14.056651], readonly [7.640125, 14.112871], readonly [7.627852, 14.168232], readonly [7.6108, 14.222313], readonly [7.5891, 14.274702], readonly [7.562917, 14.325], readonly [7.532449, 14.372825], readonly [7.497929, 14.417812], readonly [7.459619, 14.459619], readonly [7.417812, 14.497929], readonly [7.372825, 14.532449], readonly [7.325, 14.562917], readonly [7.274702, 14.5891], readonly [7.222313, 14.6108], readonly [7.168232, 14.627852], readonly [7.112871, 14.640125], readonly [7.056651, 14.647527], readonly [7, 14.65], readonly [6.943349, 14.647527], readonly [6.887129, 14.640125], readonly [6.831768, 14.627852], readonly [6.777687, 14.6108], readonly [6.725298, 14.5891], readonly [6.675, 14.562917], readonly [6.627175, 14.532449], readonly [6.582188, 14.497929], readonly [6.540381, 14.459619], readonly [6.502071, 14.417812], readonly [6.467551, 14.372825], readonly [6.437083, 14.325], readonly [6.4109, 14.274702], readonly [6.3892, 14.222313], readonly [6.372148, 14.168232], readonly [6.359875, 14.112871], readonly [6.352473, 14.056651], readonly [6.35, 14], readonly [6.352473, 13.943349], readonly [6.359875, 13.887129], readonly [6.372148, 13.831768], readonly [6.3892, 13.777687], readonly [6.4109, 13.725298], readonly [6.437083, 13.675], readonly [6.467551, 13.627175], readonly [6.502071, 13.582188], readonly [6.540381, 13.540381], readonly [6.582188, 13.502071], readonly [6.627175, 13.467551], readonly [6.675, 13.437083], readonly [6.725298, 13.4109], readonly [6.777687, 13.3892], readonly [6.831768, 13.372148], readonly [6.887129, 13.359875], readonly [6.943349, 13.352473], readonly [7, 13.35], readonly [7.056651, 13.352473], readonly [7.112871, 13.359875], readonly [7.168232, 13.372148], readonly [7.222313, 13.3892], readonly [7.274702, 13.4109], readonly [7.325, 13.437083], readonly [7.372825, 13.467551], readonly [7.417812, 13.502071], readonly [7.459619, 13.540381], readonly [7.497929, 13.582188], readonly [7.532449, 13.627175], readonly [7.562917, 13.675], readonly [7.5891, 13.725298], readonly [7.6108, 13.777687], readonly [7.627852, 13.831768], readonly [7.640125, 13.887129], readonly [7.647527, 13.943349], readonly [7.65, 14]];
            readonly width: 0.975;
        }, {
            readonly vertices: readonly [readonly [7.65, 18], readonly [7.647527, 18.056651], readonly [7.640125, 18.112871], readonly [7.627852, 18.168232], readonly [7.6108, 18.222313], readonly [7.5891, 18.274702], readonly [7.562917, 18.325], readonly [7.532449, 18.372825], readonly [7.497929, 18.417812], readonly [7.459619, 18.459619], readonly [7.417812, 18.497929], readonly [7.372825, 18.532449], readonly [7.325, 18.562917], readonly [7.274702, 18.5891], readonly [7.222313, 18.6108], readonly [7.168232, 18.627852], readonly [7.112871, 18.640125], readonly [7.056651, 18.647527], readonly [7, 18.65], readonly [6.943349, 18.647527], readonly [6.887129, 18.640125], readonly [6.831768, 18.627852], readonly [6.777687, 18.6108], readonly [6.725298, 18.5891], readonly [6.675, 18.562917], readonly [6.627175, 18.532449], readonly [6.582188, 18.497929], readonly [6.540381, 18.459619], readonly [6.502071, 18.417812], readonly [6.467551, 18.372825], readonly [6.437083, 18.325], readonly [6.4109, 18.274702], readonly [6.3892, 18.222313], readonly [6.372148, 18.168232], readonly [6.359875, 18.112871], readonly [6.352473, 18.056651], readonly [6.35, 18], readonly [6.352473, 17.943349], readonly [6.359875, 17.887129], readonly [6.372148, 17.831768], readonly [6.3892, 17.777687], readonly [6.4109, 17.725298], readonly [6.437083, 17.675], readonly [6.467551, 17.627175], readonly [6.502071, 17.582188], readonly [6.540381, 17.540381], readonly [6.582188, 17.502071], readonly [6.627175, 17.467551], readonly [6.675, 17.437083], readonly [6.725298, 17.4109], readonly [6.777687, 17.3892], readonly [6.831768, 17.372148], readonly [6.887129, 17.359875], readonly [6.943349, 17.352473], readonly [7, 17.35], readonly [7.056651, 17.352473], readonly [7.112871, 17.359875], readonly [7.168232, 17.372148], readonly [7.222313, 17.3892], readonly [7.274702, 17.4109], readonly [7.325, 17.437083], readonly [7.372825, 17.467551], readonly [7.417812, 17.502071], readonly [7.459619, 17.540381], readonly [7.497929, 17.582188], readonly [7.532449, 17.627175], readonly [7.562917, 17.675], readonly [7.5891, 17.725298], readonly [7.6108, 17.777687], readonly [7.627852, 17.831768], readonly [7.640125, 17.887129], readonly [7.647527, 17.943349], readonly [7.65, 18]];
            readonly width: 0.975;
        }, {
            readonly vertices: readonly [readonly [12.65, 14], readonly [12.647527, 14.056651], readonly [12.640125, 14.112871], readonly [12.627852, 14.168232], readonly [12.6108, 14.222313], readonly [12.5891, 14.274702], readonly [12.562917, 14.325], readonly [12.532449, 14.372825], readonly [12.497929, 14.417812], readonly [12.459619, 14.459619], readonly [12.417812, 14.497929], readonly [12.372825, 14.532449], readonly [12.325, 14.562917], readonly [12.274702, 14.5891], readonly [12.222313, 14.6108], readonly [12.168232, 14.627852], readonly [12.112871, 14.640125], readonly [12.056651, 14.647527], readonly [12, 14.65], readonly [11.943349, 14.647527], readonly [11.887129, 14.640125], readonly [11.831768, 14.627852], readonly [11.777687, 14.6108], readonly [11.725298, 14.5891], readonly [11.675, 14.562917], readonly [11.627175, 14.532449], readonly [11.582188, 14.497929], readonly [11.540381, 14.459619], readonly [11.502071, 14.417812], readonly [11.467551, 14.372825], readonly [11.437083, 14.325], readonly [11.4109, 14.274702], readonly [11.3892, 14.222313], readonly [11.372148, 14.168232], readonly [11.359875, 14.112871], readonly [11.352473, 14.056651], readonly [11.35, 14], readonly [11.352473, 13.943349], readonly [11.359875, 13.887129], readonly [11.372148, 13.831768], readonly [11.3892, 13.777687], readonly [11.4109, 13.725298], readonly [11.437083, 13.675], readonly [11.467551, 13.627175], readonly [11.502071, 13.582188], readonly [11.540381, 13.540381], readonly [11.582188, 13.502071], readonly [11.627175, 13.467551], readonly [11.675, 13.437083], readonly [11.725298, 13.4109], readonly [11.777687, 13.3892], readonly [11.831768, 13.372148], readonly [11.887129, 13.359875], readonly [11.943349, 13.352473], readonly [12, 13.35], readonly [12.056651, 13.352473], readonly [12.112871, 13.359875], readonly [12.168232, 13.372148], readonly [12.222313, 13.3892], readonly [12.274702, 13.4109], readonly [12.325, 13.437083], readonly [12.372825, 13.467551], readonly [12.417812, 13.502071], readonly [12.459619, 13.540381], readonly [12.497929, 13.582188], readonly [12.532449, 13.627175], readonly [12.562917, 13.675], readonly [12.5891, 13.725298], readonly [12.6108, 13.777687], readonly [12.627852, 13.831768], readonly [12.640125, 13.887129], readonly [12.647527, 13.943349], readonly [12.65, 14]];
            readonly width: 0.975;
        }, {
            readonly vertices: readonly [readonly [12.65, 18], readonly [12.647527, 18.056651], readonly [12.640125, 18.112871], readonly [12.627852, 18.168232], readonly [12.6108, 18.222313], readonly [12.5891, 18.274702], readonly [12.562917, 18.325], readonly [12.532449, 18.372825], readonly [12.497929, 18.417812], readonly [12.459619, 18.459619], readonly [12.417812, 18.497929], readonly [12.372825, 18.532449], readonly [12.325, 18.562917], readonly [12.274702, 18.5891], readonly [12.222313, 18.6108], readonly [12.168232, 18.627852], readonly [12.112871, 18.640125], readonly [12.056651, 18.647527], readonly [12, 18.65], readonly [11.943349, 18.647527], readonly [11.887129, 18.640125], readonly [11.831768, 18.627852], readonly [11.777687, 18.6108], readonly [11.725298, 18.5891], readonly [11.675, 18.562917], readonly [11.627175, 18.532449], readonly [11.582188, 18.497929], readonly [11.540381, 18.459619], readonly [11.502071, 18.417812], readonly [11.467551, 18.372825], readonly [11.437083, 18.325], readonly [11.4109, 18.274702], readonly [11.3892, 18.222313], readonly [11.372148, 18.168232], readonly [11.359875, 18.112871], readonly [11.352473, 18.056651], readonly [11.35, 18], readonly [11.352473, 17.943349], readonly [11.359875, 17.887129], readonly [11.372148, 17.831768], readonly [11.3892, 17.777687], readonly [11.4109, 17.725298], readonly [11.437083, 17.675], readonly [11.467551, 17.627175], readonly [11.502071, 17.582188], readonly [11.540381, 17.540381], readonly [11.582188, 17.502071], readonly [11.627175, 17.467551], readonly [11.675, 17.437083], readonly [11.725298, 17.4109], readonly [11.777687, 17.3892], readonly [11.831768, 17.372148], readonly [11.887129, 17.359875], readonly [11.943349, 17.352473], readonly [12, 17.35], readonly [12.056651, 17.352473], readonly [12.112871, 17.359875], readonly [12.168232, 17.372148], readonly [12.222313, 17.3892], readonly [12.274702, 17.4109], readonly [12.325, 17.437083], readonly [12.372825, 17.467551], readonly [12.417812, 17.502071], readonly [12.459619, 17.540381], readonly [12.497929, 17.582188], readonly [12.532449, 17.627175], readonly [12.562917, 17.675], readonly [12.5891, 17.725298], readonly [12.6108, 17.777687], readonly [12.627852, 17.831768], readonly [12.640125, 17.887129], readonly [12.647527, 17.943349], readonly [12.65, 18]];
            readonly width: 0.975;
        }, {
            readonly vertices: readonly [readonly [17.65, 14], readonly [17.647527, 14.056651], readonly [17.640125, 14.112871], readonly [17.627852, 14.168232], readonly [17.6108, 14.222313], readonly [17.5891, 14.274702], readonly [17.562917, 14.325], readonly [17.532449, 14.372825], readonly [17.497929, 14.417812], readonly [17.459619, 14.459619], readonly [17.417812, 14.497929], readonly [17.372825, 14.532449], readonly [17.325, 14.562917], readonly [17.274702, 14.5891], readonly [17.222313, 14.6108], readonly [17.168232, 14.627852], readonly [17.112871, 14.640125], readonly [17.056651, 14.647527], readonly [17, 14.65], readonly [16.943349, 14.647527], readonly [16.887129, 14.640125], readonly [16.831768, 14.627852], readonly [16.777687, 14.6108], readonly [16.725298, 14.5891], readonly [16.675, 14.562917], readonly [16.627175, 14.532449], readonly [16.582188, 14.497929], readonly [16.540381, 14.459619], readonly [16.502071, 14.417812], readonly [16.467551, 14.372825], readonly [16.437083, 14.325], readonly [16.4109, 14.274702], readonly [16.3892, 14.222313], readonly [16.372148, 14.168232], readonly [16.359875, 14.112871], readonly [16.352473, 14.056651], readonly [16.35, 14], readonly [16.352473, 13.943349], readonly [16.359875, 13.887129], readonly [16.372148, 13.831768], readonly [16.3892, 13.777687], readonly [16.4109, 13.725298], readonly [16.437083, 13.675], readonly [16.467551, 13.627175], readonly [16.502071, 13.582188], readonly [16.540381, 13.540381], readonly [16.582188, 13.502071], readonly [16.627175, 13.467551], readonly [16.675, 13.437083], readonly [16.725298, 13.4109], readonly [16.777687, 13.3892], readonly [16.831768, 13.372148], readonly [16.887129, 13.359875], readonly [16.943349, 13.352473], readonly [17, 13.35], readonly [17.056651, 13.352473], readonly [17.112871, 13.359875], readonly [17.168232, 13.372148], readonly [17.222313, 13.3892], readonly [17.274702, 13.4109], readonly [17.325, 13.437083], readonly [17.372825, 13.467551], readonly [17.417812, 13.502071], readonly [17.459619, 13.540381], readonly [17.497929, 13.582188], readonly [17.532449, 13.627175], readonly [17.562917, 13.675], readonly [17.5891, 13.725298], readonly [17.6108, 13.777687], readonly [17.627852, 13.831768], readonly [17.640125, 13.887129], readonly [17.647527, 13.943349], readonly [17.65, 14]];
            readonly width: 0.975;
        }, {
            readonly vertices: readonly [readonly [17.65, 18], readonly [17.647527, 18.056651], readonly [17.640125, 18.112871], readonly [17.627852, 18.168232], readonly [17.6108, 18.222313], readonly [17.5891, 18.274702], readonly [17.562917, 18.325], readonly [17.532449, 18.372825], readonly [17.497929, 18.417812], readonly [17.459619, 18.459619], readonly [17.417812, 18.497929], readonly [17.372825, 18.532449], readonly [17.325, 18.562917], readonly [17.274702, 18.5891], readonly [17.222313, 18.6108], readonly [17.168232, 18.627852], readonly [17.112871, 18.640125], readonly [17.056651, 18.647527], readonly [17, 18.65], readonly [16.943349, 18.647527], readonly [16.887129, 18.640125], readonly [16.831768, 18.627852], readonly [16.777687, 18.6108], readonly [16.725298, 18.5891], readonly [16.675, 18.562917], readonly [16.627175, 18.532449], readonly [16.582188, 18.497929], readonly [16.540381, 18.459619], readonly [16.502071, 18.417812], readonly [16.467551, 18.372825], readonly [16.437083, 18.325], readonly [16.4109, 18.274702], readonly [16.3892, 18.222313], readonly [16.372148, 18.168232], readonly [16.359875, 18.112871], readonly [16.352473, 18.056651], readonly [16.35, 18], readonly [16.352473, 17.943349], readonly [16.359875, 17.887129], readonly [16.372148, 17.831768], readonly [16.3892, 17.777687], readonly [16.4109, 17.725298], readonly [16.437083, 17.675], readonly [16.467551, 17.627175], readonly [16.502071, 17.582188], readonly [16.540381, 17.540381], readonly [16.582188, 17.502071], readonly [16.627175, 17.467551], readonly [16.675, 17.437083], readonly [16.725298, 17.4109], readonly [16.777687, 17.3892], readonly [16.831768, 17.372148], readonly [16.887129, 17.359875], readonly [16.943349, 17.352473], readonly [17, 17.35], readonly [17.056651, 17.352473], readonly [17.112871, 17.359875], readonly [17.168232, 17.372148], readonly [17.222313, 17.3892], readonly [17.274702, 17.4109], readonly [17.325, 17.437083], readonly [17.372825, 17.467551], readonly [17.417812, 17.502071], readonly [17.459619, 17.540381], readonly [17.497929, 17.582188], readonly [17.532449, 17.627175], readonly [17.562917, 17.675], readonly [17.5891, 17.725298], readonly [17.6108, 17.777687], readonly [17.627852, 17.831768], readonly [17.640125, 17.887129], readonly [17.647527, 17.943349], readonly [17.65, 18]];
            readonly width: 0.975;
        }];
    };
    readonly "todo-list": {
        readonly label: "To-do list";
        readonly category: "Productivity";
        readonly description: "Tasks with clear next steps.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [5, 2], readonly [19, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 2], readonly [19.174311, 2.007611], readonly [19.347296, 2.030384], readonly [19.517638, 2.068148], readonly [19.68404, 2.120615], readonly [19.845237, 2.187384], readonly [20, 2.267949], readonly [20.147153, 2.361696], readonly [20.285575, 2.467911], readonly [20.414214, 2.585786], readonly [20.532089, 2.714425], readonly [20.638304, 2.852847], readonly [20.732051, 3], readonly [20.812616, 3.154763], readonly [20.879385, 3.31596], readonly [20.931852, 3.482362], readonly [20.969616, 3.652704], readonly [20.992389, 3.825689], readonly [21, 4]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 4], readonly [21, 21]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 21], readonly [20.992389, 21.174311], readonly [20.969616, 21.347296], readonly [20.931852, 21.517638], readonly [20.879385, 21.68404], readonly [20.812616, 21.845237], readonly [20.732051, 22], readonly [20.638304, 22.147153], readonly [20.532089, 22.285575], readonly [20.414214, 22.414214], readonly [20.285575, 22.532089], readonly [20.147153, 22.638304], readonly [20, 22.732051], readonly [19.845237, 22.812616], readonly [19.68404, 22.879385], readonly [19.517638, 22.931852], readonly [19.347296, 22.969616], readonly [19.174311, 22.992389], readonly [19, 23]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [19, 23], readonly [5, 23]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 23], readonly [4.825689, 22.992389], readonly [4.652704, 22.969616], readonly [4.482362, 22.931852], readonly [4.31596, 22.879385], readonly [4.154763, 22.812616], readonly [4, 22.732051], readonly [3.852847, 22.638304], readonly [3.714425, 22.532089], readonly [3.585786, 22.414214], readonly [3.467911, 22.285575], readonly [3.361696, 22.147153], readonly [3.267949, 22], readonly [3.187384, 21.845237], readonly [3.120615, 21.68404], readonly [3.068148, 21.517638], readonly [3.030384, 21.347296], readonly [3.007611, 21.174311], readonly [3, 21]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 21], readonly [3, 4]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 4], readonly [3.007611, 3.825689], readonly [3.030384, 3.652704], readonly [3.068148, 3.482362], readonly [3.120615, 3.31596], readonly [3.187384, 3.154763], readonly [3.267949, 3], readonly [3.361696, 2.852847], readonly [3.467911, 2.714425], readonly [3.585786, 2.585786], readonly [3.714425, 2.467911], readonly [3.852847, 2.361696], readonly [4, 2.267949], readonly [4.154763, 2.187384], readonly [4.31596, 2.120615], readonly [4.482362, 2.068148], readonly [4.652704, 2.030384], readonly [4.825689, 2.007611], readonly [5, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [6, 6], readonly [7.5, 7.5], readonly [10, 4.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [13, 6], readonly [18, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [6, 12], readonly [7.5, 13.5], readonly [10, 10.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [13, 12], readonly [18, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [6, 18], readonly [7.5, 19.5], readonly [10, 16.5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [13, 18], readonly [18, 18]];
            readonly width: 1.35;
        }];
    };
    readonly note: {
        readonly label: "Note";
        readonly category: "Productivity";
        readonly description: "Capture an idea.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [4, 2], readonly [20, 2], readonly [20, 16], readonly [13, 23], readonly [4, 23], readonly [4, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [13, 23], readonly [13, 16], readonly [20, 16]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 7], readonly [17, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 11], readonly [17, 11]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 15], readonly [10, 15]];
            readonly width: 1.35;
        }];
    };
    readonly message: {
        readonly label: "Message";
        readonly category: "Communication";
        readonly description: "A short conversation.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [3, 3], readonly [21, 3], readonly [21, 17], readonly [11, 17], readonly [5, 22], readonly [5, 17], readonly [3, 17], readonly [3, 3]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 8], readonly [17, 8]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 12], readonly [14, 12]];
            readonly width: 1.35;
        }];
    };
    readonly mail: {
        readonly label: "Email";
        readonly category: "Communication";
        readonly description: "An email waiting to be read or sent.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [4, 5], readonly [20, 5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [20, 5], readonly [20.174311, 5.007611], readonly [20.347296, 5.030384], readonly [20.517638, 5.068148], readonly [20.68404, 5.120615], readonly [20.845237, 5.187384], readonly [21, 5.267949], readonly [21.147153, 5.361696], readonly [21.285575, 5.467911], readonly [21.414214, 5.585786], readonly [21.532089, 5.714425], readonly [21.638304, 5.852847], readonly [21.732051, 6], readonly [21.812616, 6.154763], readonly [21.879385, 6.31596], readonly [21.931852, 6.482362], readonly [21.969616, 6.652704], readonly [21.992389, 6.825689], readonly [22, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [22, 7], readonly [22, 18]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [22, 18], readonly [21.992389, 18.174311], readonly [21.969616, 18.347296], readonly [21.931852, 18.517638], readonly [21.879385, 18.68404], readonly [21.812616, 18.845237], readonly [21.732051, 19], readonly [21.638304, 19.147153], readonly [21.532089, 19.285575], readonly [21.414214, 19.414214], readonly [21.285575, 19.532089], readonly [21.147153, 19.638304], readonly [21, 19.732051], readonly [20.845237, 19.812616], readonly [20.68404, 19.879385], readonly [20.517638, 19.931852], readonly [20.347296, 19.969616], readonly [20.174311, 19.992389], readonly [20, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [20, 20], readonly [4, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [4, 20], readonly [3.825689, 19.992389], readonly [3.652704, 19.969616], readonly [3.482362, 19.931852], readonly [3.31596, 19.879385], readonly [3.154763, 19.812616], readonly [3, 19.732051], readonly [2.852847, 19.638304], readonly [2.714425, 19.532089], readonly [2.585786, 19.414214], readonly [2.467911, 19.285575], readonly [2.361696, 19.147153], readonly [2.267949, 19], readonly [2.187384, 18.845237], readonly [2.120615, 18.68404], readonly [2.068148, 18.517638], readonly [2.030384, 18.347296], readonly [2.007611, 18.174311], readonly [2, 18]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [2, 18], readonly [2, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [2, 7], readonly [2.007611, 6.825689], readonly [2.030384, 6.652704], readonly [2.068148, 6.482362], readonly [2.120615, 6.31596], readonly [2.187384, 6.154763], readonly [2.267949, 6], readonly [2.361696, 5.852847], readonly [2.467911, 5.714425], readonly [2.585786, 5.585786], readonly [2.714425, 5.467911], readonly [2.852847, 5.361696], readonly [3, 5.267949], readonly [3.154763, 5.187384], readonly [3.31596, 5.120615], readonly [3.482362, 5.068148], readonly [3.652704, 5.030384], readonly [3.825689, 5.007611], readonly [4, 5]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 6], readonly [12, 13], readonly [21, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 19], readonly [8, 14]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 19], readonly [16, 14]];
            readonly width: 1.35;
        }];
    };
    readonly send: {
        readonly label: "Send";
        readonly category: "Communication";
        readonly description: "A message on its way.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [1, 9], readonly [23, 1], readonly [15, 23], readonly [10, 14], readonly [1, 9], readonly [10, 14], readonly [23, 1]];
            readonly width: 1.35;
        }];
    };
    readonly play: {
        readonly label: "Play";
        readonly category: "Media";
        readonly description: "Start playback.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [5, 2], readonly [22, 12], readonly [5, 22], readonly [5, 2]];
            readonly width: 1.35;
        }];
    };
    readonly pause: {
        readonly label: "Pause";
        readonly category: "Media";
        readonly description: "Hold the moment.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [4, 2], readonly [9, 2], readonly [9, 22], readonly [4, 22], readonly [4, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [15, 2], readonly [20, 2], readonly [20, 22], readonly [15, 22], readonly [15, 2]];
            readonly width: 1.35;
        }];
    };
    readonly music: {
        readonly label: "Music";
        readonly category: "Media";
        readonly description: "A track, playlist, or soundtrack.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [9, 18], readonly [9, 5], readonly [21, 2], readonly [21, 15]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [9, 19], readonly [8.986681, 19.217889], readonly [8.946827, 19.43412], readonly [8.88074, 19.647048], readonly [8.788924, 19.85505], readonly [8.672077, 20.056546], readonly [8.531089, 20.25], readonly [8.367032, 20.433941], readonly [8.181156, 20.606969], readonly [7.974874, 20.767767], readonly [7.749757, 20.915111], readonly [7.507518, 21.04788], readonly [7.25, 21.165064], readonly [6.979164, 21.265769], readonly [6.697071, 21.349232], readonly [6.405867, 21.414815], readonly [6.107769, 21.462019], readonly [5.805045, 21.490487], readonly [5.5, 21.5], readonly [5.194955, 21.490487], readonly [4.892231, 21.462019], readonly [4.594133, 21.414815], readonly [4.302929, 21.349232], readonly [4.020836, 21.265769], readonly [3.75, 21.165064], readonly [3.492482, 21.04788], readonly [3.250243, 20.915111], readonly [3.025126, 20.767767], readonly [2.818844, 20.606969], readonly [2.632968, 20.433941], readonly [2.468911, 20.25], readonly [2.327923, 20.056546], readonly [2.211076, 19.85505], readonly [2.11926, 19.647048], readonly [2.053173, 19.43412], readonly [2.013319, 19.217889], readonly [2, 19], readonly [2.013319, 18.782111], readonly [2.053173, 18.56588], readonly [2.11926, 18.352952], readonly [2.211076, 18.14495], readonly [2.327923, 17.943454], readonly [2.468911, 17.75], readonly [2.632968, 17.566059], readonly [2.818844, 17.393031], readonly [3.025126, 17.232233], readonly [3.250243, 17.084889], readonly [3.492482, 16.95212], readonly [3.75, 16.834936], readonly [4.020836, 16.734231], readonly [4.302929, 16.650768], readonly [4.594133, 16.585185], readonly [4.892231, 16.537981], readonly [5.194955, 16.509513], readonly [5.5, 16.5], readonly [5.805045, 16.509513], readonly [6.107769, 16.537981], readonly [6.405867, 16.585185], readonly [6.697071, 16.650768], readonly [6.979164, 16.734231], readonly [7.25, 16.834936], readonly [7.507518, 16.95212], readonly [7.749757, 17.084889], readonly [7.974874, 17.232233], readonly [8.181156, 17.393031], readonly [8.367032, 17.566059], readonly [8.531089, 17.75], readonly [8.672077, 17.943454], readonly [8.788924, 18.14495], readonly [8.88074, 18.352952], readonly [8.946827, 18.56588], readonly [8.986681, 18.782111], readonly [9, 19]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 16], readonly [20.986681, 16.217889], readonly [20.946827, 16.43412], readonly [20.88074, 16.647048], readonly [20.788924, 16.85505], readonly [20.672077, 17.056546], readonly [20.531089, 17.25], readonly [20.367032, 17.433941], readonly [20.181156, 17.606969], readonly [19.974874, 17.767767], readonly [19.749757, 17.915111], readonly [19.507518, 18.04788], readonly [19.25, 18.165064], readonly [18.979164, 18.265769], readonly [18.697071, 18.349232], readonly [18.405867, 18.414815], readonly [18.107769, 18.462019], readonly [17.805045, 18.490487], readonly [17.5, 18.5], readonly [17.194955, 18.490487], readonly [16.892231, 18.462019], readonly [16.594133, 18.414815], readonly [16.302929, 18.349232], readonly [16.020836, 18.265769], readonly [15.75, 18.165064], readonly [15.492482, 18.04788], readonly [15.250243, 17.915111], readonly [15.025126, 17.767767], readonly [14.818844, 17.606969], readonly [14.632968, 17.433941], readonly [14.468911, 17.25], readonly [14.327923, 17.056546], readonly [14.211076, 16.85505], readonly [14.11926, 16.647048], readonly [14.053173, 16.43412], readonly [14.013319, 16.217889], readonly [14, 16], readonly [14.013319, 15.782111], readonly [14.053173, 15.56588], readonly [14.11926, 15.352952], readonly [14.211076, 15.14495], readonly [14.327923, 14.943454], readonly [14.468911, 14.75], readonly [14.632968, 14.566059], readonly [14.818844, 14.393031], readonly [15.025126, 14.232233], readonly [15.250243, 14.084889], readonly [15.492482, 13.95212], readonly [15.75, 13.834936], readonly [16.020836, 13.734231], readonly [16.302929, 13.650768], readonly [16.594133, 13.585185], readonly [16.892231, 13.537981], readonly [17.194955, 13.509513], readonly [17.5, 13.5], readonly [17.805045, 13.509513], readonly [18.107769, 13.537981], readonly [18.405867, 13.585185], readonly [18.697071, 13.650768], readonly [18.979164, 13.734231], readonly [19.25, 13.834936], readonly [19.507518, 13.95212], readonly [19.749757, 14.084889], readonly [19.974874, 14.232233], readonly [20.181156, 14.393031], readonly [20.367032, 14.566059], readonly [20.531089, 14.75], readonly [20.672077, 14.943454], readonly [20.788924, 15.14495], readonly [20.88074, 15.352952], readonly [20.946827, 15.56588], readonly [20.986681, 15.782111], readonly [21, 16]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [9, 9], readonly [21, 6]];
            readonly width: 1.35;
        }];
    };
    readonly cart: {
        readonly label: "Cart";
        readonly category: "Commerce";
        readonly description: "Add an item to the order.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [1, 2], readonly [4, 2], readonly [7, 17], readonly [20, 17]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 6], readonly [23, 6], readonly [20, 13], readonly [6, 13]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [9.5, 21], readonly [9.494292, 21.130734], readonly [9.477212, 21.260472], readonly [9.448889, 21.388229], readonly [9.409539, 21.51303], readonly [9.359462, 21.633927], readonly [9.299038, 21.75], readonly [9.228728, 21.860365], readonly [9.149067, 21.964181], readonly [9.06066, 22.06066], readonly [8.964181, 22.149067], readonly [8.860365, 22.228728], readonly [8.75, 22.299038], readonly [8.633927, 22.359462], readonly [8.51303, 22.409539], readonly [8.388229, 22.448889], readonly [8.260472, 22.477212], readonly [8.130734, 22.494292], readonly [8, 22.5], readonly [7.869266, 22.494292], readonly [7.739528, 22.477212], readonly [7.611771, 22.448889], readonly [7.48697, 22.409539], readonly [7.366073, 22.359462], readonly [7.25, 22.299038], readonly [7.139635, 22.228728], readonly [7.035819, 22.149067], readonly [6.93934, 22.06066], readonly [6.850933, 21.964181], readonly [6.771272, 21.860365], readonly [6.700962, 21.75], readonly [6.640538, 21.633927], readonly [6.590461, 21.51303], readonly [6.551111, 21.388229], readonly [6.522788, 21.260472], readonly [6.505708, 21.130734], readonly [6.5, 21], readonly [6.505708, 20.869266], readonly [6.522788, 20.739528], readonly [6.551111, 20.611771], readonly [6.590461, 20.48697], readonly [6.640538, 20.366073], readonly [6.700962, 20.25], readonly [6.771272, 20.139635], readonly [6.850933, 20.035819], readonly [6.93934, 19.93934], readonly [7.035819, 19.850933], readonly [7.139635, 19.771272], readonly [7.25, 19.700962], readonly [7.366073, 19.640538], readonly [7.48697, 19.590461], readonly [7.611771, 19.551111], readonly [7.739528, 19.522788], readonly [7.869266, 19.505708], readonly [8, 19.5], readonly [8.130734, 19.505708], readonly [8.260472, 19.522788], readonly [8.388229, 19.551111], readonly [8.51303, 19.590461], readonly [8.633927, 19.640538], readonly [8.75, 19.700962], readonly [8.860365, 19.771272], readonly [8.964181, 19.850933], readonly [9.06066, 19.93934], readonly [9.149067, 20.035819], readonly [9.228728, 20.139635], readonly [9.299038, 20.25], readonly [9.359462, 20.366073], readonly [9.409539, 20.48697], readonly [9.448889, 20.611771], readonly [9.477212, 20.739528], readonly [9.494292, 20.869266], readonly [9.5, 21]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [20.5, 21], readonly [20.494292, 21.130734], readonly [20.477212, 21.260472], readonly [20.448889, 21.388229], readonly [20.409539, 21.51303], readonly [20.359462, 21.633927], readonly [20.299038, 21.75], readonly [20.228728, 21.860365], readonly [20.149067, 21.964181], readonly [20.06066, 22.06066], readonly [19.964181, 22.149067], readonly [19.860365, 22.228728], readonly [19.75, 22.299038], readonly [19.633927, 22.359462], readonly [19.51303, 22.409539], readonly [19.388229, 22.448889], readonly [19.260472, 22.477212], readonly [19.130734, 22.494292], readonly [19, 22.5], readonly [18.869266, 22.494292], readonly [18.739528, 22.477212], readonly [18.611771, 22.448889], readonly [18.48697, 22.409539], readonly [18.366073, 22.359462], readonly [18.25, 22.299038], readonly [18.139635, 22.228728], readonly [18.035819, 22.149067], readonly [17.93934, 22.06066], readonly [17.850933, 21.964181], readonly [17.771272, 21.860365], readonly [17.700962, 21.75], readonly [17.640538, 21.633927], readonly [17.590461, 21.51303], readonly [17.551111, 21.388229], readonly [17.522788, 21.260472], readonly [17.505708, 21.130734], readonly [17.5, 21], readonly [17.505708, 20.869266], readonly [17.522788, 20.739528], readonly [17.551111, 20.611771], readonly [17.590461, 20.48697], readonly [17.640538, 20.366073], readonly [17.700962, 20.25], readonly [17.771272, 20.139635], readonly [17.850933, 20.035819], readonly [17.93934, 19.93934], readonly [18.035819, 19.850933], readonly [18.139635, 19.771272], readonly [18.25, 19.700962], readonly [18.366073, 19.640538], readonly [18.48697, 19.590461], readonly [18.611771, 19.551111], readonly [18.739528, 19.522788], readonly [18.869266, 19.505708], readonly [19, 19.5], readonly [19.130734, 19.505708], readonly [19.260472, 19.522788], readonly [19.388229, 19.551111], readonly [19.51303, 19.590461], readonly [19.633927, 19.640538], readonly [19.75, 19.700962], readonly [19.860365, 19.771272], readonly [19.964181, 19.850933], readonly [20.06066, 19.93934], readonly [20.149067, 20.035819], readonly [20.228728, 20.139635], readonly [20.299038, 20.25], readonly [20.359462, 20.366073], readonly [20.409539, 20.48697], readonly [20.448889, 20.611771], readonly [20.477212, 20.739528], readonly [20.494292, 20.869266], readonly [20.5, 21]];
            readonly width: 1.35;
        }];
    };
    readonly "credit-card": {
        readonly label: "Payment card";
        readonly category: "Commerce";
        readonly description: "A payment method.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [3, 4], readonly [21, 4]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 4], readonly [21.174311, 4.007611], readonly [21.347296, 4.030384], readonly [21.517638, 4.068148], readonly [21.68404, 4.120615], readonly [21.845237, 4.187384], readonly [22, 4.267949], readonly [22.147153, 4.361696], readonly [22.285575, 4.467911], readonly [22.414214, 4.585786], readonly [22.532089, 4.714425], readonly [22.638304, 4.852847], readonly [22.732051, 5], readonly [22.812616, 5.154763], readonly [22.879385, 5.31596], readonly [22.931852, 5.482362], readonly [22.969616, 5.652704], readonly [22.992389, 5.825689], readonly [23, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [23, 6], readonly [23, 18]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [23, 18], readonly [22.992389, 18.174311], readonly [22.969616, 18.347296], readonly [22.931852, 18.517638], readonly [22.879385, 18.68404], readonly [22.812616, 18.845237], readonly [22.732051, 19], readonly [22.638304, 19.147153], readonly [22.532089, 19.285575], readonly [22.414214, 19.414214], readonly [22.285575, 19.532089], readonly [22.147153, 19.638304], readonly [22, 19.732051], readonly [21.845237, 19.812616], readonly [21.68404, 19.879385], readonly [21.517638, 19.931852], readonly [21.347296, 19.969616], readonly [21.174311, 19.992389], readonly [21, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [21, 20], readonly [3, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [3, 20], readonly [2.825689, 19.992389], readonly [2.652704, 19.969616], readonly [2.482362, 19.931852], readonly [2.31596, 19.879385], readonly [2.154763, 19.812616], readonly [2, 19.732051], readonly [1.852847, 19.638304], readonly [1.714425, 19.532089], readonly [1.585786, 19.414214], readonly [1.467911, 19.285575], readonly [1.361696, 19.147153], readonly [1.267949, 19], readonly [1.187384, 18.845237], readonly [1.120615, 18.68404], readonly [1.068148, 18.517638], readonly [1.030384, 18.347296], readonly [1.007611, 18.174311], readonly [1, 18]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [1, 18], readonly [1, 6]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [1, 6], readonly [1.007611, 5.825689], readonly [1.030384, 5.652704], readonly [1.068148, 5.482362], readonly [1.120615, 5.31596], readonly [1.187384, 5.154763], readonly [1.267949, 5], readonly [1.361696, 4.852847], readonly [1.467911, 4.714425], readonly [1.585786, 4.585786], readonly [1.714425, 4.467911], readonly [1.852847, 4.361696], readonly [2, 4.267949], readonly [2.154763, 4.187384], readonly [2.31596, 4.120615], readonly [2.482362, 4.068148], readonly [2.652704, 4.030384], readonly [2.825689, 4.007611], readonly [3, 4]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [1, 9], readonly [23, 9]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 15], readonly [10, 15]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [16, 15], readonly [19, 15]];
            readonly width: 1.35;
        }];
    };
    readonly package: {
        readonly label: "Package";
        readonly category: "Commerce";
        readonly description: "Shipping and fulfillment.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [12, 2], readonly [22, 7], readonly [22, 18], readonly [12, 23], readonly [2, 18], readonly [2, 7], readonly [12, 2]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [2, 7], readonly [12, 12], readonly [22, 7]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12, 12], readonly [12, 23]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 4.5], readonly [17, 9.5], readonly [17, 14]];
            readonly width: 1.35;
        }];
    };
    readonly "bar-chart": {
        readonly label: "Bar chart";
        readonly category: "Data & security";
        readonly description: "Compare values at a glance.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [2, 1], readonly [2, 22], readonly [23, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 13], readonly [9, 13], readonly [9, 22], readonly [5, 22], readonly [5, 13]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [11, 8], readonly [15, 8], readonly [15, 22], readonly [11, 22], readonly [11, 8]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [17, 3], readonly [21, 3], readonly [21, 22], readonly [17, 22], readonly [17, 3]];
            readonly width: 1.35;
        }];
    };
    readonly "line-chart": {
        readonly label: "Line chart";
        readonly category: "Data & security";
        readonly description: "Progress over time.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [2, 1], readonly [2, 22], readonly [23, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5, 16], readonly [10, 10], readonly [15, 13], readonly [21, 4]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [5.8, 16], readonly [5.796956, 16.069725], readonly [5.787846, 16.138919], readonly [5.772741, 16.207055], readonly [5.751754, 16.273616], readonly [5.725046, 16.338095], readonly [5.69282, 16.4], readonly [5.655322, 16.458861], readonly [5.612836, 16.51423], readonly [5.565685, 16.565685], readonly [5.51423, 16.612836], readonly [5.458861, 16.655322], readonly [5.4, 16.69282], readonly [5.338095, 16.725046], readonly [5.273616, 16.751754], readonly [5.207055, 16.772741], readonly [5.138919, 16.787846], readonly [5.069725, 16.796956], readonly [5, 16.8], readonly [4.930275, 16.796956], readonly [4.861081, 16.787846], readonly [4.792945, 16.772741], readonly [4.726384, 16.751754], readonly [4.661905, 16.725046], readonly [4.6, 16.69282], readonly [4.541139, 16.655322], readonly [4.48577, 16.612836], readonly [4.434315, 16.565685], readonly [4.387164, 16.51423], readonly [4.344678, 16.458861], readonly [4.30718, 16.4], readonly [4.274954, 16.338095], readonly [4.248246, 16.273616], readonly [4.227259, 16.207055], readonly [4.212154, 16.138919], readonly [4.203044, 16.069725], readonly [4.2, 16], readonly [4.203044, 15.930275], readonly [4.212154, 15.861081], readonly [4.227259, 15.792945], readonly [4.248246, 15.726384], readonly [4.274954, 15.661905], readonly [4.30718, 15.6], readonly [4.344678, 15.541139], readonly [4.387164, 15.48577], readonly [4.434315, 15.434315], readonly [4.48577, 15.387164], readonly [4.541139, 15.344678], readonly [4.6, 15.30718], readonly [4.661905, 15.274954], readonly [4.726384, 15.248246], readonly [4.792945, 15.227259], readonly [4.861081, 15.212154], readonly [4.930275, 15.203044], readonly [5, 15.2], readonly [5.069725, 15.203044], readonly [5.138919, 15.212154], readonly [5.207055, 15.227259], readonly [5.273616, 15.248246], readonly [5.338095, 15.274954], readonly [5.4, 15.30718], readonly [5.458861, 15.344678], readonly [5.51423, 15.387164], readonly [5.565685, 15.434315], readonly [5.612836, 15.48577], readonly [5.655322, 15.541139], readonly [5.69282, 15.6], readonly [5.725046, 15.661905], readonly [5.751754, 15.726384], readonly [5.772741, 15.792945], readonly [5.787846, 15.861081], readonly [5.796956, 15.930275], readonly [5.8, 16]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [10.8, 10], readonly [10.796956, 10.069725], readonly [10.787846, 10.138919], readonly [10.772741, 10.207055], readonly [10.751754, 10.273616], readonly [10.725046, 10.338095], readonly [10.69282, 10.4], readonly [10.655322, 10.458861], readonly [10.612836, 10.51423], readonly [10.565685, 10.565685], readonly [10.51423, 10.612836], readonly [10.458861, 10.655322], readonly [10.4, 10.69282], readonly [10.338095, 10.725046], readonly [10.273616, 10.751754], readonly [10.207055, 10.772741], readonly [10.138919, 10.787846], readonly [10.069725, 10.796956], readonly [10, 10.8], readonly [9.930275, 10.796956], readonly [9.861081, 10.787846], readonly [9.792945, 10.772741], readonly [9.726384, 10.751754], readonly [9.661905, 10.725046], readonly [9.6, 10.69282], readonly [9.541139, 10.655322], readonly [9.48577, 10.612836], readonly [9.434315, 10.565685], readonly [9.387164, 10.51423], readonly [9.344678, 10.458861], readonly [9.30718, 10.4], readonly [9.274954, 10.338095], readonly [9.248246, 10.273616], readonly [9.227259, 10.207055], readonly [9.212154, 10.138919], readonly [9.203044, 10.069725], readonly [9.2, 10], readonly [9.203044, 9.930275], readonly [9.212154, 9.861081], readonly [9.227259, 9.792945], readonly [9.248246, 9.726384], readonly [9.274954, 9.661905], readonly [9.30718, 9.6], readonly [9.344678, 9.541139], readonly [9.387164, 9.48577], readonly [9.434315, 9.434315], readonly [9.48577, 9.387164], readonly [9.541139, 9.344678], readonly [9.6, 9.30718], readonly [9.661905, 9.274954], readonly [9.726384, 9.248246], readonly [9.792945, 9.227259], readonly [9.861081, 9.212154], readonly [9.930275, 9.203044], readonly [10, 9.2], readonly [10.069725, 9.203044], readonly [10.138919, 9.212154], readonly [10.207055, 9.227259], readonly [10.273616, 9.248246], readonly [10.338095, 9.274954], readonly [10.4, 9.30718], readonly [10.458861, 9.344678], readonly [10.51423, 9.387164], readonly [10.565685, 9.434315], readonly [10.612836, 9.48577], readonly [10.655322, 9.541139], readonly [10.69282, 9.6], readonly [10.725046, 9.661905], readonly [10.751754, 9.726384], readonly [10.772741, 9.792945], readonly [10.787846, 9.861081], readonly [10.796956, 9.930275], readonly [10.8, 10]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [15.8, 13], readonly [15.796956, 13.069725], readonly [15.787846, 13.138919], readonly [15.772741, 13.207055], readonly [15.751754, 13.273616], readonly [15.725046, 13.338095], readonly [15.69282, 13.4], readonly [15.655322, 13.458861], readonly [15.612836, 13.51423], readonly [15.565685, 13.565685], readonly [15.51423, 13.612836], readonly [15.458861, 13.655322], readonly [15.4, 13.69282], readonly [15.338095, 13.725046], readonly [15.273616, 13.751754], readonly [15.207055, 13.772741], readonly [15.138919, 13.787846], readonly [15.069725, 13.796956], readonly [15, 13.8], readonly [14.930275, 13.796956], readonly [14.861081, 13.787846], readonly [14.792945, 13.772741], readonly [14.726384, 13.751754], readonly [14.661905, 13.725046], readonly [14.6, 13.69282], readonly [14.541139, 13.655322], readonly [14.48577, 13.612836], readonly [14.434315, 13.565685], readonly [14.387164, 13.51423], readonly [14.344678, 13.458861], readonly [14.30718, 13.4], readonly [14.274954, 13.338095], readonly [14.248246, 13.273616], readonly [14.227259, 13.207055], readonly [14.212154, 13.138919], readonly [14.203044, 13.069725], readonly [14.2, 13], readonly [14.203044, 12.930275], readonly [14.212154, 12.861081], readonly [14.227259, 12.792945], readonly [14.248246, 12.726384], readonly [14.274954, 12.661905], readonly [14.30718, 12.6], readonly [14.344678, 12.541139], readonly [14.387164, 12.48577], readonly [14.434315, 12.434315], readonly [14.48577, 12.387164], readonly [14.541139, 12.344678], readonly [14.6, 12.30718], readonly [14.661905, 12.274954], readonly [14.726384, 12.248246], readonly [14.792945, 12.227259], readonly [14.861081, 12.212154], readonly [14.930275, 12.203044], readonly [15, 12.2], readonly [15.069725, 12.203044], readonly [15.138919, 12.212154], readonly [15.207055, 12.227259], readonly [15.273616, 12.248246], readonly [15.338095, 12.274954], readonly [15.4, 12.30718], readonly [15.458861, 12.344678], readonly [15.51423, 12.387164], readonly [15.565685, 12.434315], readonly [15.612836, 12.48577], readonly [15.655322, 12.541139], readonly [15.69282, 12.6], readonly [15.725046, 12.661905], readonly [15.751754, 12.726384], readonly [15.772741, 12.792945], readonly [15.787846, 12.861081], readonly [15.796956, 12.930275], readonly [15.8, 13]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [21.8, 4], readonly [21.796956, 4.069725], readonly [21.787846, 4.138919], readonly [21.772741, 4.207055], readonly [21.751754, 4.273616], readonly [21.725046, 4.338095], readonly [21.69282, 4.4], readonly [21.655322, 4.458861], readonly [21.612836, 4.51423], readonly [21.565685, 4.565685], readonly [21.51423, 4.612836], readonly [21.458861, 4.655322], readonly [21.4, 4.69282], readonly [21.338095, 4.725046], readonly [21.273616, 4.751754], readonly [21.207055, 4.772741], readonly [21.138919, 4.787846], readonly [21.069725, 4.796956], readonly [21, 4.8], readonly [20.930275, 4.796956], readonly [20.861081, 4.787846], readonly [20.792945, 4.772741], readonly [20.726384, 4.751754], readonly [20.661905, 4.725046], readonly [20.6, 4.69282], readonly [20.541139, 4.655322], readonly [20.48577, 4.612836], readonly [20.434315, 4.565685], readonly [20.387164, 4.51423], readonly [20.344678, 4.458861], readonly [20.30718, 4.4], readonly [20.274954, 4.338095], readonly [20.248246, 4.273616], readonly [20.227259, 4.207055], readonly [20.212154, 4.138919], readonly [20.203044, 4.069725], readonly [20.2, 4], readonly [20.203044, 3.930275], readonly [20.212154, 3.861081], readonly [20.227259, 3.792945], readonly [20.248246, 3.726384], readonly [20.274954, 3.661905], readonly [20.30718, 3.6], readonly [20.344678, 3.541139], readonly [20.387164, 3.48577], readonly [20.434315, 3.434315], readonly [20.48577, 3.387164], readonly [20.541139, 3.344678], readonly [20.6, 3.30718], readonly [20.661905, 3.274954], readonly [20.726384, 3.248246], readonly [20.792945, 3.227259], readonly [20.861081, 3.212154], readonly [20.930275, 3.203044], readonly [21, 3.2], readonly [21.069725, 3.203044], readonly [21.138919, 3.212154], readonly [21.207055, 3.227259], readonly [21.273616, 3.248246], readonly [21.338095, 3.274954], readonly [21.4, 3.30718], readonly [21.458861, 3.344678], readonly [21.51423, 3.387164], readonly [21.565685, 3.434315], readonly [21.612836, 3.48577], readonly [21.655322, 3.541139], readonly [21.69282, 3.6], readonly [21.725046, 3.661905], readonly [21.751754, 3.726384], readonly [21.772741, 3.792945], readonly [21.787846, 3.861081], readonly [21.796956, 3.930275], readonly [21.8, 4]];
            readonly width: 1.2;
        }];
    };
    readonly lock: {
        readonly label: "Lock";
        readonly category: "Data & security";
        readonly description: "Private by design.";
        readonly geometry: readonly [{
            readonly vertices: readonly [readonly [6, 10], readonly [18, 10]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [18, 10], readonly [18.174311, 10.007611], readonly [18.347296, 10.030384], readonly [18.517638, 10.068148], readonly [18.68404, 10.120615], readonly [18.845237, 10.187384], readonly [19, 10.267949], readonly [19.147153, 10.361696], readonly [19.285575, 10.467911], readonly [19.414214, 10.585786], readonly [19.532089, 10.714425], readonly [19.638304, 10.852847], readonly [19.732051, 11], readonly [19.812616, 11.154763], readonly [19.879385, 11.31596], readonly [19.931852, 11.482362], readonly [19.969616, 11.652704], readonly [19.992389, 11.825689], readonly [20, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [20, 12], readonly [20, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [20, 20], readonly [19.992389, 20.174311], readonly [19.969616, 20.347296], readonly [19.931852, 20.517638], readonly [19.879385, 20.68404], readonly [19.812616, 20.845237], readonly [19.732051, 21], readonly [19.638304, 21.147153], readonly [19.532089, 21.285575], readonly [19.414214, 21.414214], readonly [19.285575, 21.532089], readonly [19.147153, 21.638304], readonly [19, 21.732051], readonly [18.845237, 21.812616], readonly [18.68404, 21.879385], readonly [18.517638, 21.931852], readonly [18.347296, 21.969616], readonly [18.174311, 21.992389], readonly [18, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [18, 22], readonly [6, 22]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [6, 22], readonly [5.825689, 21.992389], readonly [5.652704, 21.969616], readonly [5.482362, 21.931852], readonly [5.31596, 21.879385], readonly [5.154763, 21.812616], readonly [5, 21.732051], readonly [4.852847, 21.638304], readonly [4.714425, 21.532089], readonly [4.585786, 21.414214], readonly [4.467911, 21.285575], readonly [4.361696, 21.147153], readonly [4.267949, 21], readonly [4.187384, 20.845237], readonly [4.120615, 20.68404], readonly [4.068148, 20.517638], readonly [4.030384, 20.347296], readonly [4.007611, 20.174311], readonly [4, 20]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [4, 20], readonly [4, 12]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [4, 12], readonly [4.007611, 11.825689], readonly [4.030384, 11.652704], readonly [4.068148, 11.482362], readonly [4.120615, 11.31596], readonly [4.187384, 11.154763], readonly [4.267949, 11], readonly [4.361696, 10.852847], readonly [4.467911, 10.714425], readonly [4.585786, 10.585786], readonly [4.714425, 10.467911], readonly [4.852847, 10.361696], readonly [5, 10.267949], readonly [5.154763, 10.187384], readonly [5.31596, 10.120615], readonly [5.482362, 10.068148], readonly [5.652704, 10.030384], readonly [5.825689, 10.007611], readonly [6, 10]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [7, 10], readonly [7.019027, 9.38991], readonly [7.075961, 8.784463], readonly [7.170371, 8.188267], readonly [7.301537, 7.605859], readonly [7.468461, 7.041672], readonly [7.669873, 6.5], readonly [7.90424, 5.984965], readonly [8.169778, 5.500487], readonly [8.464466, 5.050253], readonly [8.786062, 4.637689], readonly [9.132118, 4.265936], readonly [9.5, 3.937822], readonly [9.886909, 3.655845], readonly [10.289899, 3.422152], readonly [10.705905, 3.238519], readonly [11.131759, 3.106346], readonly [11.564221, 3.026637], readonly [12, 3], readonly [12.435779, 3.026637], readonly [12.868241, 3.106346], readonly [13.294095, 3.238519], readonly [13.710101, 3.422152], readonly [14.113091, 3.655845], readonly [14.5, 3.937822], readonly [14.867882, 4.265936], readonly [15.213938, 4.637689], readonly [15.535534, 5.050253], readonly [15.830222, 5.500487], readonly [16.09576, 5.984965], readonly [16.330127, 6.5], readonly [16.531539, 7.041672], readonly [16.698463, 7.605859], readonly [16.829629, 8.188267], readonly [16.924039, 8.784463], readonly [16.980973, 9.38991], readonly [17, 10]];
            readonly width: 1.35;
        }, {
            readonly vertices: readonly [readonly [12.8, 15], readonly [12.796956, 15.069725], readonly [12.787846, 15.138919], readonly [12.772741, 15.207055], readonly [12.751754, 15.273616], readonly [12.725046, 15.338095], readonly [12.69282, 15.4], readonly [12.655322, 15.458861], readonly [12.612836, 15.51423], readonly [12.565685, 15.565685], readonly [12.51423, 15.612836], readonly [12.458861, 15.655322], readonly [12.4, 15.69282], readonly [12.338095, 15.725046], readonly [12.273616, 15.751754], readonly [12.207055, 15.772741], readonly [12.138919, 15.787846], readonly [12.069725, 15.796956], readonly [12, 15.8], readonly [11.930275, 15.796956], readonly [11.861081, 15.787846], readonly [11.792945, 15.772741], readonly [11.726384, 15.751754], readonly [11.661905, 15.725046], readonly [11.6, 15.69282], readonly [11.541139, 15.655322], readonly [11.48577, 15.612836], readonly [11.434315, 15.565685], readonly [11.387164, 15.51423], readonly [11.344678, 15.458861], readonly [11.30718, 15.4], readonly [11.274954, 15.338095], readonly [11.248246, 15.273616], readonly [11.227259, 15.207055], readonly [11.212154, 15.138919], readonly [11.203044, 15.069725], readonly [11.2, 15], readonly [11.203044, 14.930275], readonly [11.212154, 14.861081], readonly [11.227259, 14.792945], readonly [11.248246, 14.726384], readonly [11.274954, 14.661905], readonly [11.30718, 14.6], readonly [11.344678, 14.541139], readonly [11.387164, 14.48577], readonly [11.434315, 14.434315], readonly [11.48577, 14.387164], readonly [11.541139, 14.344678], readonly [11.6, 14.30718], readonly [11.661905, 14.274954], readonly [11.726384, 14.248246], readonly [11.792945, 14.227259], readonly [11.861081, 14.212154], readonly [11.930275, 14.203044], readonly [12, 14.2], readonly [12.069725, 14.203044], readonly [12.138919, 14.212154], readonly [12.207055, 14.227259], readonly [12.273616, 14.248246], readonly [12.338095, 14.274954], readonly [12.4, 14.30718], readonly [12.458861, 14.344678], readonly [12.51423, 14.387164], readonly [12.565685, 14.434315], readonly [12.612836, 14.48577], readonly [12.655322, 14.541139], readonly [12.69282, 14.6], readonly [12.725046, 14.661905], readonly [12.751754, 14.726384], readonly [12.772741, 14.792945], readonly [12.787846, 14.861081], readonly [12.796956, 14.930275], readonly [12.8, 15]];
            readonly width: 1.2;
        }, {
            readonly vertices: readonly [readonly [12, 15], readonly [12, 19]];
            readonly width: 1.35;
        }];
    };
};
export type EssentialShape = keyof typeof ESSENTIAL_SHAPES;
export declare const ESSENTIAL_IDS: EssentialShape[];
export declare const isEssentialShape: (id: string) => id is EssentialShape;
export declare function getEssentialPoints(id: EssentialShape, count: number): Point[];
