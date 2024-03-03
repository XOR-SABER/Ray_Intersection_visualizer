class Canvas {
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        this.gl = this.canvas.getContext("webgl");
        if (!this.gl) alert("Error initializing WebGL:");
        this.gl.canvasWidth = this.canvas.width;
        this.gl.canvasHeight = this.canvas.height;
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        console.log("WebGL initialized successfully.");
    }
    clearGL = (gl) => { 
        gl.viewport(0, 0, gl.canvasWidth, gl.canvasHeight);
        gl.clearColor(0.707, 0.707, 1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    resizeCanvas = (gl, canvas) => {
        canvas.width = window.innerWidth - 6;
        canvas.height = window.innerHeight - 6;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.canvasWidth = window.innerWidth;
        gl.canvasHeight = window.innerHeight;
    }
    render = () => {
        this.clearGL(this.gl);
        this.resizeCanvas(this.gl, this.canvas);
    }
};