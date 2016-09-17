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
    return document.getElementById(id);
}
app.responsive = {
    isDesktop: function() {
        return window.innerWidth >= 1001;
    },
    isTablet: function() {
        return window.innerWidth >= 650 && window.innerWidth <= 1000;
    },
    isPhone: function() {
        return window.innerWidth <= 649;
    }
}