var Circle = (function () {
    function Circle(context, circleX, circleY, radius) {
        var self = this;
        self.circleX = circleX;
        self.circleY = circleY;
        self.radius = radius;
        self.cntx = context;
    }

    Circle.prototype.draw = function () {
        this.cntx.beginPath();
        this.cntx.arc(this.circleX, this.circleY, this.radius, 0, 2 * Math.PI);
        this.cntx.stroke();
    }

    return Circle;
})();