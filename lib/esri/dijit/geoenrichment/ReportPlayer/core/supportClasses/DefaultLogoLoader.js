// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DefaultLogoLoader",["dojo/when","./images/DefaultLogoGraphicReportGeneric","./images/DefaultLogoGraphicReportLight","./images/DefaultLogoGraphicReportDark","esri/dijit/geoenrichment/utils/ColorUtil"],function(b,d,e,f,c){return{_identifyDefaultLogoBackground:function(a){return!a||c.isTransparent(a.backgroundColor)?"transparent":c.isLightColor(a.backgroundColor)?"light":"dark"},getDefaultLogo:function(a){switch(this._identifyDefaultLogoBackground(a)){case "light":return b(f);
case "dark":return b(e);default:return b(d)}}}});