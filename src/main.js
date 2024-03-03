let canvas;
import "gl-matrix-min.js";
const { mat2, mat2d, mat4, mat3, quat, quat2, vec2, vec3, vec4 } = glMatrix;

window.onload = window['initializeAll'];

let rot = mat4

console.log(rot)

function initializeAll() {
    requestAnimationFrame(initializeAll)
    if(canvas == null) canvas = new Canvas("webgl-canvas");
    console.log("Something happend!");
    canvas.render();
}