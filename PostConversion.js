var Text = function(Body){
    this.Body = Body;
    this.CharsCount = Body.length;
}

Text.prototype = {
    ReadString : function (charCount) {
        return this.Body;
    }
}

var HTMLOutput = function (Body){
    this.Body = Body;
    this.BytesCount = Body.length;
}

HTMLOutput.prototype = {
    ReadByteString : function (byteCount, charset) {
        return this.Body;
    }
}


var PostConversion = function(){
    var self = this;
    this.Body='';
    this.Parameters={};
    this.GlobalVars={};
    this.Text = new Text(this.Body);
    this.HTMLOutput = new HTMLOutput(this.Body);

    this.HTMLOutputToOverride = {
        WriteString: (html) => self.SetBody(html),
        WriteAsByteString: (html) => self.SetBody(html)
    };
    this.TextToOverride= {
        WriteString: (html) => self.SetBody(html),
        WriteAsByteString: (html) => self.SetBody(html)
    };
}

PostConversion.prototype = {
    //Text: new Text(this.Body),
    // HTMLOutput: {
    //     Body: this.Body,
    //     BytesCount : 0,
    //     ReadByteString: function (byteCount, charset) {
    //         return this.Body;
    //     }
    // },

    GetParameter : function(name) {
        return this.Parameters[name];
    },
    GetBody : function() {
        return this.Body;
    },
    SetBody : function (html, charset) {
        this.Body = html;
        this.Text = new Text(html);
        this.HTMLOutput = new HTMLOutput(html);
    },
    Trace : function (str, level) {
        console.log(str);
    },
    GetGlobalVariable : function(name) {
        var retVal = this.GlobalVars[name];
        if(retVal) { return retVal; }
        else { throw "Global Variable " + name + " doesn't exist"; }
    },
    SetGlobalVariable : function (name, value) {
        GlobalVars[name] = value;
    }
}


// module.exports = {
//     Body: '',
//     Text: {
//         CharsCount : 0,
//         ReadString : function(charCount) {
//             return this.Body;
//         }

//     },
//     HTMLOutput: {
//         Body: this.Body,
//         BytesCount : 0,
//         ReadByteString: function (byteCount, charset) {
//             return this.Body;
//         }
//     },
//     HTMLOutputToOverride: {
//         WriteString: this.SetBody,
//         WriteAsByteString: this.SetBody
//     },
//     TextToOverride: {
//         WriteString: this.SetBody,
//         WriteAsByteString: this.SetBody
//     },
//     Parameters: {},
//     GlobalVars: {},
//     GetParameter : function(name) {
//         return this.Parameters[name];
//     },
//     GetBody : function() {
//         return this.Body;
//     },
//     SetBody : function (html, charset) {
//         this.Body = html;
//     },
//     Trace : function (str, level) {
//         console.log(str);
//     },
//     GetGlobalVariable : function(name) {
//         var retVal = this.GlobalVars[name];
//         if(retVal) { return retVal; }
//         else { throw "Global Variable " + name + " doesn't exist"; }
//     },
//     SetGlobalVariable : function (name, value) {
//         GlobalVars[name] = value;
//     }
// };
module.exports = new PostConversion();
