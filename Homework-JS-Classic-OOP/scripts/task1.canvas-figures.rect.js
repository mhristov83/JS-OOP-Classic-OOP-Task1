var Rect = (function () {
    function Rect(context, startX, startY, width, height) {
        var self = this;
        self.cntx = context;
        self.startX = startX;
        self.startY = startY;
        self.width = width;
        self.height = height;
    }

    Rect.prototype.draw = function () {
        this.cntx.strokeRect(this.startX, this.startY, this.width, this.height);
    }

    return Rect;
})();