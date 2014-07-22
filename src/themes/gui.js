JXG.Options = JXG.merge(JXG.Options, {

    device: 'tablet',

    opacityLevel: 0.5,

    sensitive_area: 20,

    lastRegPolCorners: 4,

    lastSliderStart: 0,
    lastSliderEnd: 2,
    lastSliderIni: 1,
    
    board: {
        minimizeReflow: 'all'
    },

    angle: {
        fillColor: '#ddd',
        strokeColor: '#000',
        strokeWidth: 1,
        radius: 1.0, 
        orthotype: 'sectordot'
    },

    axis: {
        ticks: {
            strokeColor: '#666666',
            strokeOpacity: 0.4,
            label: {
                fontSize: 14,
                display: 'internal'
            }
        },
        label: {
            position: 'urt',
            offset: [-15, 30],
            display: 'internal'
        }
    },
    
    curve: {
        strokeWidth: 3,
        strokeOpacity: 0.7
    },
    
    glider : {
        fillColor: '#ff0',
        strokeColor: '#000',
        opacity: 1
    },

    intersection: {
        fillColor: '#fff',
        opacity: 1
    },

    line: {
        strokeOpacity: 0.7,
        strokeWidth: 3
    },
    
    point: {
        size: 4,
        fillColor:   '#c00',
        strokeColor: '#c00',
        strokeOpacity: 0.8,
        //fillOpacity: 0.7,
        highlightFillColor:   '#c00',
        highlightStrokeColor: '#c00',
        highlightFillOpacity: 0.4,
        highlightStrokeOpacity: 0.4,

        // snap on majorTicks

        snapX: -1,
        snapY: -1
    },

    polygon: {
        fillColor: '#ffff00',
        highlightFillColor: '#ffff00',
        hasInnerPoints: false
    },

    precision: {
        touchMax: Infinity
    },
    
    sector: {
        strokeWidth: 0,
        highlightStrokeWidth: 0,
        arc: {
            visible: true,
            fillColor: 'none'
        }
    },
        
    segment: {
        label: {
            position: 'bot',
            offsets: [0,-12]
        }
    },

    slider: {
        highlightFillColor: '#ffffff',
        strokeOpacity: 0.5,
        strokeColor: '#444444',
        
        face: '[]',
        point1: { needsRegularUpdate: true },
        point2: { needsRegularUpdate: true },
        ticks: { tickEndings: [0, 1],
            minTicksDistance: 15,
            strokeColor: '#444444',
            strokeOpacity: 0.5,
            highlightStrokeColor: '#444444',
            strokeOpacity: 0.5,
            highlightStrokeOpacity: 0.5,
            needsRegularUpdate: true
            },
        baseline: {
            strokeColor: '#444444',
            highlightStrokeColor: '#444444',
            strokeOpacity: 0.5,
            highlightStrokeOpacity: 0.5,
            needsRegularUpdate: true
        },
        highline: {
            strokeColor: '#444444',
            highlightStrokeColor: '#444444',
            strokeOpacity: 0.5,
            highlightStrokeOpacity: 0.5,
            needsRegularUpdate: true
        }

    },

    tapemeasure: {
        point1: {
            snapToPoints: true,
            attractorUnit: 'screen',
            attractorDistance: 20
        },
        point2: {
            snapToPoints: true,
            attractorUnit: 'screen',
            attractorDistance: 20
        }
    },

    text: {
        fontSize: 18,
        strokeColor: '#000000',
        highlightStrokeColor: '#000000',
        strokeOpacity: 1,
        highlightStrokeOpacity: 0.66666
    },

    trunclen: 2

/*
    line: {
        strokeColor: '#f00' // can't see red lines anymore for NOW ...
    },

    renderer: 'canvas'
*/
});

if (JXG.isAndroid() || JXG.isApple()) {
    JXG.Options.curve.RDPsmoothing = false;
    JXG.Options.curve.numberPointsHigh = 600;
    JXG.Options.curve.numberPointsLow = 100;
    JXG.Options.curve.doAdvancedPlot = true;
}
