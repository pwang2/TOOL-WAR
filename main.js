console.log('Trying to access this in my context', this);

(function(root){
    console.log('I am a experienced developer but I still failed', this);
}).call(this);

window.jQuery=123;
var jq=require('jquery');
console.log(jq);
