$('.category').click(function(){
  $(this).toggleClass('active-category').siblings().removeClass('active-category');
});

$('.filter').click(function(){
  $(this).toggleClass('active-filter').siblings().removeClass('active-filter');
});
