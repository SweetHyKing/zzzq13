// $(function(){
//   var $winH = $(window).height();
//   var $img = $(".blog-img ");
//   var $imgH = parseInt($img.height()/2);
//   var $srcDef = "http://img181.poco.cn/mypoco/myphoto/20110126/10/5637885820110126103051018.gif";
//   runing();
//   $(window).scroll(function(){
//    runing();
//   })
//   function runing(){
//    $img.each(function(i){
//     var $src = $img.eq(i).attr("original");
//     var $scroTop = $img.eq(i).offset();
//     if($scroTop.top + $imgH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroTop.top + $imgH)
//     {
//      if($img.eq(i).attr("src") == $srcDef){
//       $img.eq(i).hide();
//      }
//      $img.eq(i).attr("src",function(){return $src}).fadeIn(1000);

//     }
//    })
//   }
//  })