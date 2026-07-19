document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}
// //document.body.addEventListener("mousemove", (e) => {
//   document.querySelectorAll(".eye").forEach((eye) => {
//     let rect = eye.getBoundingClientRect();

//     let x = rect.left + rect.width / 2;
//     let y = rect.top + rect.height / 2;

//     let angle = Math.atan2(e.pageX - x, e.pageY - y);
//     let rotate = angle * (180 / Math.PI) * -1 + 270;

//     eye.style.transform = `rotate(${rotate}deg)`;
//   });
// });
