// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/worker/WorkerUtil",["dojo/Deferred","dojo/when"],function(b,c){return{run:function(d){var a=new b;window.Worker||c(d(),a.resolve,a.reject);return a.promise}}});