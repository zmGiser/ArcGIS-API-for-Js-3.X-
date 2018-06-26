// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/createHTML/CSSFilesLoader",["dojo/Deferred","require"],function(e,f){return{AVENIR_FONTS:["../../../themes/common/fonts/AvenirNext.css"],loadCssFontFiles:function(){return this._loadFiles(this.AVENIR_FONTS)},_loadFiles:function(g){var d=new e;f(g.map(function(a){return"dojo/text!"+a}),function(){for(var a=[],c=0;c<arguments.length;c++)(function(b){for(var a=[];;){var c=b.indexOf("}");if(5E3>c){b&&a.push(b);break}a.push(b.substr(0,
c+1).trim());b=b.substr(c+1).trim()}return a})(arguments[c]).forEach(function(b){a.push(b)});d.resolve(a)});return d.promise}}});