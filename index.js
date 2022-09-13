import colorsys from "./colorsys2.js"

function dot(a,b){
  return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}

function length(v){
  return Math.sqrt(v[0]**2 + v[1]**2 + v[2]**2);
}

function normalize(v){
  return [
    v[0]/length(v),
    v[1]/length(v),
    v[2]/length(v),
  ]
}

function distance(a,b){
  return length([a[0]-b[0], a[1]-b[1], a[2]-b[2]])
}

function myConvertRGBtoHSV(r, g, b){

  let invsqr3 = 1/Math.sqrt(3);
  let v1 = normalize([1,1,1])
  let v2 = normalize([r,g,b])
  let lineDot = dot(v1, v2) ;
  lineDot *= Math.sqrt(3);
  let d = distance([r,g,b], [lineDot, lineDot, lineDot])
  //console.log(d) * 255;





  return [0, lineDot, 0]
}


let colors = [
  {name:"Red", rgb:[255, 0, 0]},
  {name:"Green", rgb:[0, 255, 0]},
  {name:"Blue", rgb:[0, 0, 255]},
]

for(let color of colors){
  console.log(color.name);
  let try1 = myConvertRGBtoHSV(color.rgb[0], color.rgb[1], color.rgb[2]);
  let try2 = colorsys.rgb2Hsv(color.rgb[0], color.rgb[1], color.rgb[2]);
  console.log("Hue: " + try1[0] + " " + try2["h"])
  console.log("Sat: " + try1[1] + " " + try2["s"])
  console.log("Val: " + try1[2] + " " + try2["v"])
}

// console.log("Green")
// let r = 0;
// let g = 255;
// let b = 0;
// let try1 = myConvertRGBtoHSV(r,g,b);
// let try2 = colorsys.rgb2Hsv(r,g,b);
// console.log("Hue: " + try1[0] + " " + try2["h"])
// console.log("Sat: " + try1[1] + " " + try2["s"])
// console.log("Val: " + try1[2] + " " + try2["v"])
