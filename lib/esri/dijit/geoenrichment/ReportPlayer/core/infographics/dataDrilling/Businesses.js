// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dataDrilling/Businesses",["./ChartBuilder"],function(b){var a={};a.businessesByType={name:"Businesses by Type",states:"n,p",fieldInfo:{isChart:!0,chartJson:b.createDonutChart("Businesses by Type",[{label:"Businesses",calculator:"n/Health.S27_BUS"},{label:"Sales",calculator:"n/Health.S27_SALES"},{label:"Employees",calculator:"n/Health.S27_EMP"}])}};return a});