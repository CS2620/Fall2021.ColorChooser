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

function myConvertRGBtoHSV(r, g, b){

  let invsqr3 = 1/Math.sqrt(3);
  let v1 = normalize([1,1,1])
  let v2 = normalize([r,g,b])
  let v = dot(v1, v2);


  return [0, 0, 0]
}

let try1 = myConvertRGBtoHSV(0, 255, 0);
let try2 = colorsys.rgb2Hsv(0, 255, 0);

console.log("Hue: " + try1[0] + " " + try2["h"])
console.log("Sat: " + try1[1] + " " + try2["s"])
console.log("Val: " + try1[2] + " " + try2["v"])
