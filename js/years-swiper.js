const swiper = new Swiper('.slider__year', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  direction: "vertical",
  allowTouchMove: 'true',
  initialSlide: 3,
  navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
  },
  on: {
      init() {
          updateClasses(this);
      },
      slideChange() {
          updateClasses(this);
      },
  },
})
function updateClasses({ $el, slides, activeIndex }) {
  $el.find('.swiper-slide-prev-2').removeClass('swiper-slide-prev-2');
  slides.eq(activeIndex).prev().prev().addClass('swiper-slide-prev-2');

  $el.find('.swiper-slide-next-2').removeClass('swiper-slide-next-2');
  slides.eq(activeIndex).next().next().addClass('swiper-slide-next-2');

  $el.find('.swiper-slide-prev-3').removeClass('swiper-slide-prev-3');
  slides.eq(activeIndex).prev().prev().prev().addClass('swiper-slide-prev-3');

  $el.find('.swiper-slide-next-3').removeClass('swiper-slide-next-3');
  slides.eq(activeIndex).next().next().next().addClass('swiper-slide-next-3');

  $el.find('.swiper-slide-next-4').removeClass('swiper-slide-next-4');
  slides.eq(activeIndex).next().next().next().next().addClass('swiper-slide-next-4');

  $el.find('.swiper-slide-next-5').removeClass('swiper-slide-next-5');
  slides.eq(activeIndex).next().next().next().next().next().addClass('swiper-slide-next-5');

  $el.find('.swiper-slide-next-6').removeClass('swiper-slide-next-6');
  slides.eq(activeIndex).next().next().next().next().next().next().addClass('swiper-slide-next-6');

  $el.find('.swiper-slide-next-7').removeClass('swiper-slide-next-7');
  slides.eq(activeIndex).next().next().next().next().next().next().next().addClass('swiper-slide-next-7');
}
$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ5ZWFycy1zd2lwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnNsaWRlcl9feWVhcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gIGFsbG93VG91Y2hNb3ZlOiAndHJ1ZScsXHJcbiAgaW5pdGlhbFNsaWRlOiAzLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLmJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG4gIG9uOiB7XHJcbiAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICB1cGRhdGVDbGFzc2VzKHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZUNoYW5nZSgpIHtcclxuICAgICAgICAgIHVwZGF0ZUNsYXNzZXModGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgfSxcclxufSlcclxuZnVuY3Rpb24gdXBkYXRlQ2xhc3Nlcyh7ICRlbCwgc2xpZGVzLCBhY3RpdmVJbmRleCB9KSB7XHJcbiAgJGVsLmZpbmQoJy5zd2lwZXItc2xpZGUtcHJldi0yJykucmVtb3ZlQ2xhc3MoJ3N3aXBlci1zbGlkZS1wcmV2LTInKTtcclxuICBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpLnByZXYoKS5wcmV2KCkuYWRkQ2xhc3MoJ3N3aXBlci1zbGlkZS1wcmV2LTInKTtcclxuXHJcbiAgJGVsLmZpbmQoJy5zd2lwZXItc2xpZGUtbmV4dC0yJykucmVtb3ZlQ2xhc3MoJ3N3aXBlci1zbGlkZS1uZXh0LTInKTtcclxuICBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpLm5leHQoKS5uZXh0KCkuYWRkQ2xhc3MoJ3N3aXBlci1zbGlkZS1uZXh0LTInKTtcclxuXHJcbiAgJGVsLmZpbmQoJy5zd2lwZXItc2xpZGUtcHJldi0zJykucmVtb3ZlQ2xhc3MoJ3N3aXBlci1zbGlkZS1wcmV2LTMnKTtcclxuICBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpLnByZXYoKS5wcmV2KCkucHJldigpLmFkZENsYXNzKCdzd2lwZXItc2xpZGUtcHJldi0zJyk7XHJcblxyXG4gICRlbC5maW5kKCcuc3dpcGVyLXNsaWRlLW5leHQtMycpLnJlbW92ZUNsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC0zJyk7XHJcbiAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5uZXh0KCkubmV4dCgpLm5leHQoKS5hZGRDbGFzcygnc3dpcGVyLXNsaWRlLW5leHQtMycpO1xyXG5cclxuICAkZWwuZmluZCgnLnN3aXBlci1zbGlkZS1uZXh0LTQnKS5yZW1vdmVDbGFzcygnc3dpcGVyLXNsaWRlLW5leHQtNCcpO1xyXG4gIHNsaWRlcy5lcShhY3RpdmVJbmRleCkubmV4dCgpLm5leHQoKS5uZXh0KCkubmV4dCgpLmFkZENsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC00Jyk7XHJcblxyXG4gICRlbC5maW5kKCcuc3dpcGVyLXNsaWRlLW5leHQtNScpLnJlbW92ZUNsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC01Jyk7XHJcbiAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5uZXh0KCkubmV4dCgpLm5leHQoKS5uZXh0KCkubmV4dCgpLmFkZENsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC01Jyk7XHJcblxyXG4gICRlbC5maW5kKCcuc3dpcGVyLXNsaWRlLW5leHQtNicpLnJlbW92ZUNsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC02Jyk7XHJcbiAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5uZXh0KCkubmV4dCgpLm5leHQoKS5uZXh0KCkubmV4dCgpLm5leHQoKS5hZGRDbGFzcygnc3dpcGVyLXNsaWRlLW5leHQtNicpO1xyXG5cclxuICAkZWwuZmluZCgnLnN3aXBlci1zbGlkZS1uZXh0LTcnKS5yZW1vdmVDbGFzcygnc3dpcGVyLXNsaWRlLW5leHQtNycpO1xyXG4gIHNsaWRlcy5lcShhY3RpdmVJbmRleCkubmV4dCgpLm5leHQoKS5uZXh0KCkubmV4dCgpLm5leHQoKS5uZXh0KCkubmV4dCgpLmFkZENsYXNzKCdzd2lwZXItc2xpZGUtbmV4dC03Jyk7XHJcbn1cclxuJCgnYVtocmVmXj1cIiNcIicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcclxuICB9KTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJmaWxlIjoieWVhcnMtc3dpcGVyLmpzIn0=
