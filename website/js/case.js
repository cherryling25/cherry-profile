window.onload = function () {
    //导航条的 '关于我'
    var aboutMe = document.getElementById('aboutMe');
    var ulDropdown = document.getElementById('ulDropdown');
    aboutMe.onmouseover = function () {
        ulDropdown.style.display = 'block';
    }
    aboutMe.onmouseout = function () {
        ulDropdown.style.display = 'none';
    };

    //导航条的 '首页'
    var aClass = document.getElementsByClassName('case'); 
    var divClass = document.getElementsByClassName('linkBorder');
    for (var i = 0; i < aClass.length; i++) {
        aClass[i].onmouseover = function(divStyle) {
            return function(){
                divStyle.display = 'block';
            };
        }(divClass[i].style);

        aClass[i].onmouseout = function(divStyle) {
            return function(){
                divStyle.display = 'none';
            };
        }(divClass[i].style);
    }
  
    
    /* var pic = document.getElementsByClassName('img_hover'); 
    var projectHover = document.getElementsByClassName('project_item_hover');
    for (var i = 0; i < pic.length; i++) {
        pic[i].onmouseover = function(divStyle) {
            return function(){
              divStyle.add();
            };
        }(projectHover[i]);

        pic[i].onmouseout = function(divStyle) {
            return function(){
                divStyle.className='';
            };
        }(projectHover[i]);
    } */

    $(".project_item_hover").hide();

    $(".img_hover").mouseover(function(event) {
        $(".project_item_hover").show();
    });
    $(".img_hover").mouseout(function(event) {
        $(".project_item_hover").hide();
    });
  
        var w = document.documentElement.clientWidth;
   
   
}