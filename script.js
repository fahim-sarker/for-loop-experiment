function tocelsipous(farenhit) {
  return (10 / 9) * (farenhit - 30);
}
let heading = tocelsipous(70);
let text = "the temparatue is " + heading + " celcious";
console.log(text);
