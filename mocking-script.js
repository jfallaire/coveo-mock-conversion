var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var program = require('commander');
var vm = require('vm');


DocumentInfo = require('./DocumentInfo.js');
PostConversion = require('./PostConversion.js');

// Mocking VBArray
VBArray = function(string){
  this.content = string;
}

VBArray.prototype.toArray = function () {
  return this.content.split(';');
}

program
   .version('0.0.1')
   .option('-c, --chdir <path>', 'change the working directory')
   .option('-t, --conversion-type <type>', 'conversion type', 'post')
   .option('-b, --show-body', 'printing final body')
   .arguments('<env> <script>')
   .action((env, script) => {
     var env = JSON.parse(fs.readFileSync(path.resolve(env || program.chdir + '/' + env)));
     var code = fs.readFileSync(script || program.chdir + '/' + script);

     _.each(env, (result) => {
         DocumentInfo = _.extend(DocumentInfo, result);
         PostConversion.SetBody(DocumentInfo.Body);
         delete DocumentInfo.Body;

         vm.runInThisContext(code);

         console.log(JSON.stringify(DocumentInfo, null, 2));
         if(program.showBody) {
           console.log('Final Body >>> ' + PostConversion.Body);
         }
     });

   });

program.parse(process.argv);
