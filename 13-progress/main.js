$(function(){
  console.log('hello world!');
  var $pro=$('progress');
  var $p=$("p");
  $p.html('进度：'+$pro.val()+'%')
  var $btn1=$(".btn1"),
      $btn2=$(".btn2"),
      $btn3=$(".btn3");
var timer;
$btn1.click(()=>{
  timer=setInterval(()=>{
    console.log(Number($pro.val())+1)
    $pro.val(Number($pro.val())+1);
    $p.html('进度：'+$pro.val()+'%');
    if($pro.val()==='100'){
      clearInterval(timer);
    }
  },100)
})

$btn2.click(()=>{
  clearInterval(timer);
})

$btn3.click(()=>{
  clearInterval(timer);
  $pro.val('0');
  $p.html('进度：'+$pro.val()+'%')
})
  var timer=setInterval(()=>{

  })
});
