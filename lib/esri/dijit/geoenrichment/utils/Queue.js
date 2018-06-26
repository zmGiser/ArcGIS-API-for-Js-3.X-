// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/Queue",["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when"],function(d,e,c,f){return d(null,{_dfd:null,_loadEndDfd:null,constructor:function(a){e.mixin(this,a)},add:function(a){var b=this;this._dfd||(this.onLoadStart(),this._loadEndDfd=new c);this._dfd&&this._dfd.resolve("cancel");this._dfd=new c;this._dfd.promise.then(function(a){"cancel"!==a&&(b._dfd=null,b._loadEndDfd.resolve(),b._loadEndDfd=null,b.onLoadEnd())});f(a).always(this._dfd.resolve)},
getLoadPromise:function(){return this._loadEndDfd&&this._loadEndDfd.promise},onLoadStart:function(){},onLoadEnd:function(){}})});