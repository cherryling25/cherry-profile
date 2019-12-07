window.onload = function () {
    var aboutMe = document.getElementById('aboutMe');
    var ulDropdown = document.getElementById('ulDropdown');
    aboutMe.onmouseover = function () {
        ulDropdown.style.display = 'block';
    }
    aboutMe.onmouseout = function () {
        ulDropdown.style.display = 'none';
    }

}