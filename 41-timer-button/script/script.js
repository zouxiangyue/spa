$(function(){
  var $add=$("#add"),
      $on=$("#on"),
      $off=$("#off"),
      $btnTxt=$("#btnTxt"),
      $code=$("#code"),
      $groupBtn=$("#groupBtn"),
      $time=$("#time");
  function isOk(){
    var t=$time.val();
    console.log(t)
    var timer=setInterval(function(){
      if(t<=0){
         $newBtn.html($btnTxt.val());
         $newBtn.attr("disabled",false);
         clearInterval(timer);      
      }
      else{$newBtn.html($btnTxt.val()+' '+(--t)+'s')};   
    },1000)
  } 
  $on.click(function(){
    $add.attr('disabled',false);
    $off.attr("checked",false);
    $on.attr("checked",true)
  });
  $off.click(function(){
      $add.attr('disabled',false);
      $on.attr("checked",false);
      $off.attr("checked",true)
  });
  $add.click(function(){
    console.log(123);
    var $newBtn=$('<button class="btn"></button>');
    console.log($newBtn,$btnTxt.val())
    $newBtn.html($btnTxt.val());
    function isOk(){
      var t=$time.val();
      console.log(t)
      var timer=setInterval(function(){
      if(t<=1){
          $newBtn.html($btnTxt.val());
          $newBtn.attr("disabled",false);
          clearInterval(timer);  
      }
      else{$newBtn.html($btnTxt.val()+' '+(--t)+'s')};    
    },1000)   
  } 
    //console.log($on.attr("checked"))
    if($on.attr("checked")){
      $newBtn.attr("disabled",false);
      $newBtn.html($btnTxt.val());
      $groupBtn.append($newBtn);
    }else{
      $newBtn.attr("disabled",true);
      $newBtn.html($btnTxt.val()+' '+$time.val()+'s');
      $groupBtn.append($newBtn);
      isOk();
    }
      $newBtn.click(function(){
         eval($code.val());
         $newBtn.attr("disabled",true);
         $newBtn.html($btnTxt.val()+' '+$time.val()+'s');
         isOk();
      })
  })
})
