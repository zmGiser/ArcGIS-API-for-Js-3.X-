// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/VisibilityChecker",["dojo/dom-style"],function(b){return{checkNode:function(a){return"hidden"===b.get(a,"visibility")||"none"===b.get(a,"display")||0===b.get(a,"opacity")?!1:!0},checkRect:function(a){return!!a.style.background.opacity||a.style.borderRadius},checkBorder:function(a){return!!a.width&&!!a.opacity}}});