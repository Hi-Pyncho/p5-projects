class TwitchyRect {
  /**
  * @param {Object} options
  * @param {number} options.x
  * @param {number} options.y
  * @param {number} options.width
  * @param {number} options.height
  * @param {number} [options.horizontalCount=5]
  * @param {number} [options.verticalCount=5]
  * @param {number} [options.gap=2]
  * @param {number} [options.offset=1]
  * @param {number} [options.lineWidth=1]
  * @param {number} [options.color]
  */
 constructor(options = {}) {
   this.x = options.x;
   this.y = options.y;
   this.width = options.width;
   this.height = options.height;
   this.horizontalCount = options.horizontalCount || 5;
   this.verticalCount = options.verticalCount || 5;
   this.gap = options.gap || 2;
   this.offset = options.offset || 1;
   this.lineWidth = options.lineWidth || 1;
   this.color = options.color || color(0);
 }

 draw() {
   push();
   strokeWeight(this.lineWidth);
   stroke(this.color);

   for (let i = 0; i < this.horizontalCount; i++) {
     line(
       this.x + this.width / this.horizontalCount * i, this.y + random(-this.offset, this.offset),
       this.x + this.width / this.horizontalCount * (i + 1), this.y + random(-this.offset, this.offset),
     );
   }

   for (let i = 0; i < this.verticalCount; i++) {
     line(
       this.x + random(-this.offset, this.offset), this.y + this.height / this.verticalCount * i,
       this.x + random(-this.offset, this.offset), this.y + this.height / this.verticalCount * (i + 1),
     );
   }

   for (let i = 0; i < this.horizontalCount; i++) {
     line(
       this.x + this.width / this.horizontalCount * i, this.y + this.height + random(-this.offset, this.offset),
       this.x + this.width / this.horizontalCount * (i + 1), this.y + this.height + random(-this.offset, this.offset),
     );
   }

   for (let i = 0; i < this.verticalCount; i++) {
     line(
       this.x + this.width + random(-this.offset, this.offset), this.y + this.height / this.verticalCount * i,
       this.x + this.width + random(-this.offset, this.offset), this.y + this.height / this.verticalCount * (i + 1),
     );
   }

   pop();
 }
}
