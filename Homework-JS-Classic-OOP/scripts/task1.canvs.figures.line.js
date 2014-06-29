var Line = (function () {
    function Line(context, startX, startY, endX, endY) {
        var self = this;
        self.cntx = context;
        self.startX = startX;
        self.startY = startY;
        self.endX = endX;
        self.endY = endY;
    }

    Line.prototype.draw = function () {
        this.cntx.beginPath();
        this.cntx.moveTo(this.startX, this.startY);
        this.cntx.lineTo(this.endX, this.endY);
        this.cntx.stroke();
    }

    return Line;
})();