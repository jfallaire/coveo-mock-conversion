var jsdom = require('jsdom').jsdom;
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var ActiveXObject = (function(){

    function ActiveXObject(objName) {
        var retVal = undefined;

        if(objName == 'htmlfile') { 
            var document = jsdom("hello world");
            var window = document.defaultView;
            retVal = window.document;
        } else if ('Msxml2.XMLHTTP') {
            // returning fake XMLHttpRequest...
            retVal = new XMLHttpRequest();
        }
        return retVal;
    }

    return ActiveXObject;
}());


module.exports = ActiveXObject;