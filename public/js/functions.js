function removeClass($el,name) {
    var className = $el.className;
    className = className.split(" ");
    var newClassName = "";
    for(var k = 0; k < className.length; k++) {
        if(className[k] != name) newClassName += className[k] + " ";
    }

    $el.className = newClassName;
}

function hasClass($el,name) {
    var className = $el.className;
    className = className.split(" ");
    for(var k = 0; k < className.length; k++) {
        if(className[k] == name) return true;
    }

    return false;
}

function divExists(id) {
    if(!id) return false;

    return document.getElementById(id);
}
app.responsive = {
    isDesktop: function() {
        return window.innerWidth >= 1101;
    },
    isTablet: function() {
        return window.innerWidth >= 650 && window.innerWidth <= 1000;
    },
    isPhone: function() {
        return window.innerWidth <= 649;
    }
}

function waitForImgThen(callback) {
    allImgLoaded = setInterval(function() {
        var img = document.getElementsByTagName('img');

        for(var i=0;i<img.length;i++) {

            if(img[i].complete == true && imgLoadedArray.indexOf(img[i]) == -1) {
                imgLoaded+=1;
                imgLoadedArray.push(img[i]);
            }
        }

        if(imgLoadedArray.length >= img.length) {
            clearInterval(allImgLoaded)
            callback();
        }
    },100);
}

