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

    /* $(".project_item_hover span").hide();
        $(".project_item_hover em").hide();
    
    $(".lis").mouseover(function(event) {
        $(this).find(".project_item_hover").css({ left: '0', top: '0', height: '100%', width: '100%',overflow: 'hidden' });
        $(".project_item_hover").show();
        $(".project_item_hover span").css({transform: 'none'});
        $(".project_item_hover em").show();
    });
    $(".lis").mouseout(function(event) {
        $(".project_item_hover").hide();
        $(".project_item_hover span").hide();
        $(".project_item_hover em").hide();
    });  */

    /* $(".project_item_hover span").hide();
    $(".project_item_hover em").hide();
    
    $(".lis").mouseover(function(event) {
        $(this).find(".project_item_hover").css({ left: '0', top: '0', height: '100%', width: '100%' });
        $(".project_item_hover").show();
        $(".project_item_hover span").show();
        $(".project_item_hover em").show();
    });
    $(".lis").mouseout(function(event) {
        $(".project_item_hover").hide();
        $(".project_item_hover span").hide();
        $(".project_item_hover em").hide();
    });  */
  
        var w = document.documentElement.clientWidth;
}