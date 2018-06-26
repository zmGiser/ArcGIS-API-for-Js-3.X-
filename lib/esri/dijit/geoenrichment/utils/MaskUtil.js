// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/MaskUtil",[],function(){function b(a,c){return"string"!==typeof a?a:String(a).replace(/[^\x20-\x7f]/g,function(a){a=a.charCodeAt(0).toString(16).toUpperCase();return c(a)})}return{maskWithUnicode:function(a){return b(a,function(a){return"\\u000".substr(0,6-a.length)+a})},maskWithUnicodeXML:function(a){return b(a,function(a){return"\x26#x000".substr(0,7-a.length)+a+";"})}}});