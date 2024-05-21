const canvas = new fabric.Canvas("c");

////////////////////////////// Text Object ////////////////////////////
const text = new fabric.Text("Hello Fabric.js!", {
  left: 100,
  top: 50,
  fontFamily: "Arial",
  fontSize: 30,
  fill: "blue",
});

canvas.add(text);

// ////////////////////////////// Img Object ////////////////////////////
// fabric.Image.fromURL(
//   "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
//   function (img) {
//     img.scaleToWidth(200);
//     img.scaleToHeight(200);
//     canvas.add(img);
//   }
// );

//////////////////////////// custom shapes ////////////////////////////
const rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "red",
  width: 200,
  height: 200,
});

canvas.add(rect);

// ////////////////////////////// Grouping Objects ////////////////////////////
// const group = new fabric.Group([rect, text], {
//   left: 300,
//   top: 200,
// });
// canvas.add(group);

// //////////////////////////// Events Handling ////////////////////////////
// rect.on("mousedown", function () {
//   alert("Rectangle clicked");
// });

//////////////////////////// Animation ////////////////////////////
rect.animate("left", 300, {
  duration: 2000,
  onChange: canvas.renderAll.bind(canvas),
  easing: fabric.util.ease.easeInOutBack,
});
