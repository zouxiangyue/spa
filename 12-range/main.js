$(function(){
  console.log('hello world!');
  var $p=$("p");
  var $range=$("input")
  console.log($range.val());
  $range.change(()=>{
    $p.html("你的年龄："+$range.val()+"岁")
  })
});
