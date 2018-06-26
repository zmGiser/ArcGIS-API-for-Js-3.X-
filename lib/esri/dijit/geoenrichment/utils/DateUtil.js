// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DateUtil",["dojo/date/locale"],function(a){return{getReportFooterDate:function(b){return a.format(b||new Date,{datePattern:"MMMM d, yyyy",selector:"date"})},getFullYear:function(){return(new Date).getFullYear()}}});