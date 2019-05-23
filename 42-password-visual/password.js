$(function(){
  var $addpwd=$("#addpwd"),
      $getpwd=$("#getpwd"),
      $show=$("#show"),
      $imgs=$('')
  $addpwd.click(function(){
      var $newpwd=$('<div>密码：<input value="" type="password"/><img src="./images/eye1.png"/></div>');
      $show.append($newpwd);
      var $imgs=$("img");
      var $pwd=$("input")
      for(let j=0;j<$imgs.length;j++){
        console.log($imgs[j],$pwd[j].type)
        $imgs[j].onmouseover=function(){
          $pwd[j].type="text";
          $imgs[j].src="./images/eye2.png";
        };
        $imgs[j].onmouseout=function(){
          $pwd[j].type='password';
          $imgs[j].src='./images/eye1.png';
      } 
    }   
  });
  $getpwd.click(function(){
    var $pwd=$("input")
    for(var i=0;i<$pwd.length;i++){
      alert($pwd[i].value);
    }
  })
})
