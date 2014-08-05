PIXI.BulgePinchFilter = function()
{
    PIXI.AbstractFilter.call( this );

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        radius: {type: '1f', value:0.5},
        strength: {type: '1f', value:5},
        center: {type: '2f', value:{x:0.5, y:0.5}}
    };

    this.fragmentSrc = [

        'precision mediump float;',
        'uniform sampler2D uSampler;',
        'uniform vec2 dimensions;',
        'varying vec4 vColor;',
        'varying vec2 vTextureCoord;',
        'uniform float radius;',
        'uniform float strength;',
        'uniform vec2 center;',

        'void main() {',
            'vec2 coord = vTextureCoord * dimensions;',

            'coord -= center;',
            'float distance = length(coord);',

            'if (distance < radius) {',
                'float percent = distance / radius;',
                'if (strength > 0.0) {',
                    'coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);',
                '} else {',
                     ' coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);',
                '}',
            '}',
            'coord += center;',

            'gl_FragColor = texture2D(uSampler, coord / dimensions);',
            'vec2 clampedCoord = clamp(coord, vec2(0.0), dimensions);',
            'if (coord != clampedCoord) {',
                'gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));',
            '}',
        '}'
    ];
};

PIXI.BulgePinchFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BulgePinchFilter.prototype.constructor = PIXI.BulgePinchFilter;


/**
 *
 * This point describes the the offset of the twist
 * @property size
 * @type Point
 */
Object.defineProperty(PIXI.BulgePinchFilter.prototype, 'center', {
    get: function() {
        return this.uniforms.center.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.center.value = value;
    }
});

/**
 *
 * This radius describes size of the twist
 * @property size
 * @type Number
 */
Object.defineProperty(PIXI.BulgePinchFilter.prototype, 'radius', {
    get: function() {
        return this.uniforms.radius.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.radius.value = value;
    }
});

/**
 *
 * This radius describes angle of the twist
 * @property angle
 * @type Number
 */
Object.defineProperty(PIXI.BulgePinchFilter.prototype, 'strength', {
    get: function() {
        return this.uniforms.strength.value;
    },
    set: function(value) {
        this.dirty = true;
        this.uniforms.strength.value = value;
    }
});