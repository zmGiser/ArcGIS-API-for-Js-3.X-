// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/WaitingUtil",["dojo/dom-class"],function(b){return{showProgress:function(a,c){a["esri.dijit.geoenrichment.utils.WaitingUtil.waitingClass"]="esriGEProgress esriGEProgressAbsolute "+(c||"");b.add(a,a["esri.dijit.geoenrichment.utils.WaitingUtil.waitingClass"])},removeProgress:function(a){b.remove(a,a["esri.dijit.geoenrichment.utils.WaitingUtil.waitingClass"])}}});