app.Ajax = {
    get: function(url,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.open( "GET", url, true );
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if(typeof callback == 'function') {
                    callback(xhttp);
                }
            }
        }
    },
    post: function(url,post,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.open( "POST", url, true );
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(post);
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if(typeof callback == 'function') {
                    callback(xhttp);
                }
            }
        }
    }
};

app.AjaxBinder = {
    unbind: function() {
        var links = document.getElementsByTagName('a');

        for(var a=0;a<links.length;a++) {
            links[a].removeEventListener('click', app.AjaxBinder.bindlinks)
        }
    },
    init: function() {
        var links = document.getElementsByTagName('a');

        for(var a=0;a<links.length;a++) {
            links[a].addEventListener('click', app.AjaxBinder.bindlinks)
        }
    },
    bindlinks: function(e) {
        e.preventDefault();


        link = this.href;

        if(window.location.origin + window.location.pathname == link) return;

        app.loader.$loaderDOM.show(
            app.Ajax.get(link + '?ajax=true', function(data) {
                app.loader.start(data,link);
            })
        );
    }
}

app.AjaxBinder.init();