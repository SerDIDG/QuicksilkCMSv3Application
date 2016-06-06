cm.define('App.FileInput', {
    'extend' : 'Com.FileInput',
    'params' : {
        'fileManager' : true,
        'fileManagerConstructor' : 'App.elFinderFileManagerContainer'
    }
},
function(params){
    var that = this;
    // Call parent class construct
    Com.FileInput.apply(that, arguments);
});