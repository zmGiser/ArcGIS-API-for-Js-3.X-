// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/TransformUtil",["dojo/dom-geometry","dojo/dom-style"],function(f,c){return{measureNode:function(a){var b=c.get(a,"transform");b&&"none"!=b&&(a.style.transform="none",a.style.webkitTransform="none");var g=f.position(a);b&&"none"!=b&&c.set(a,"transform",b);if((b=c.get(a,"transform"))&&"none"!=b){var d=f.position(a),h=c.get(a,"transformOrigin");c.set(a,"transformOrigin",-g.x+"px "+-g.y+"px");var e=f.position(a);c.set(a,"transformOrigin",
h);a="translate("+-(e.x+e.w/2-(d.x+d.w/2))+" "+-(e.y+e.h/2-(d.y+d.h/2))+") "+b}else a=void 0;return{box:g,transform:a}}}});