$('.carousel').carousel({

  interval: 1700
  
})

$(function() {
 
  // ボタンをクリックしたら発動
  $('img-fluid').click(function() {
 
    // 1.5秒かけてゆっくりフェードインさせる
    $('p').fadeIn(1500);
 
  });
});


$('.form-logo').hover(
  function() {
  $(this).css('color','silver',)
  $(this).css('font-size','60px',)
});
