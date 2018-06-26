// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_PrintSupport",["dojo/_base/declare","dojo/when","../printing/PrintableContainer"],function(a,b,d){return a(null,{_getPrintableContainerClass:function(){return d},_getPrintableContainer:function(a){var c=(new this._getPrintableContainerClass)(this,this._viewModel);return b(c.initialize(a),function(a){return a?a:b(c.stop(),function(){return null})})}})});