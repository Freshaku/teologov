// const circle = document.querySelectorAll('.circle');

// circle.forEach(one => {
//   one.addEventListener("click", () => {
//       circle.forEach((el) => {
//         el.classList.remove('circle_active');
//       });
//     one.classList.add('circle_active');
//   })
// })

$('.circle').click(function(){
  $(this).toggleClass('circle_active').siblings().removeClass('circle_active');
});
