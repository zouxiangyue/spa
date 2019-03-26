$(function(){
  var $img=$('img');
  var $inp=$('input');
  $img.mouseover(()=>{
    //console.log($img.attr("src"),$inp.attr("type"))
    $inp.attr("type","text");
    $img.attr("src","imgs/eye1.png");
  });
  $img.mouseout(()=>{
    $inp.attr('type',"password");
    $img.attr('src',"imgs/eye.png")
  })
  console.log('hello world!');
});
