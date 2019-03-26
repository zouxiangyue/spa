$(function(){
  let $btn=$('button');
  var n=6;
  $btn.html('同意'+n+'s');
  var timer=setInterval(()=>{
    n--;
    $btn.html("同意"+n+"s")
    if(n===0){
      clearInterval(timer);
      $btn.removeAttr('disabled');
    }
  
 },1000);
  $btn.click(()=>{
    alert('同意')
  })
})
