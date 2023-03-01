//@ui5-bundle project1/Component-preload.js
sap.ui.require.preload({
	"project1/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","project1/model/models"],function(e,t,i){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"project1/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,o){"use strict";return e.extend("project1.controller.App",{onInit(){let e=new o("../model/data.json");this.getView().setModel(e,"portfolio")}})});
},
	"project1/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","project1/model/formatter"],function(e,t,o,n){"use strict";return e.extend("project1.controller.View1",{formatter:n,getModel:function(e){return this.getView().getModel(e)},onInit:function(){},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"project1/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Port F\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=Port Folio\ntitle=My Resume\nappTitle=My Resume\nappDescription=App Description',
	"project1/i18n/i18n_en.properties":'title=My Resume\nappTitle=My Resume\nappDescription=App Description',
	"project1/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"project1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.8.6","toolsId":"739b4b54-e2ef-4aad-b66b-f366eebdc1ed"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.110.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"project1.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"project1.view.App","type":"XML","async":true,"id":"App"}}}',
	"project1/model/formatter.js":function(){
sap.ui.define([],function(){"use strict";return{}});
},
	"project1/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"project1/utils/locate-reuse-libs.js":'(function(sap){var e=function(e,t){var n=["sap.apf","sap.base","sap.chart","sap.collaboration","sap.f","sap.fe","sap.fileviewer","sap.gantt","sap.landvisz","sap.m","sap.ndc","sap.ovp","sap.rules","sap.suite","sap.tnt","sap.ui","sap.uiext","sap.ushell","sap.uxap","sap.viz","sap.webanalytics","sap.zen"];Object.keys(e).forEach(function(e){if(!n.some(function(t){return e===t||e.startsWith(t+".")})){if(t.length>0){t=t+","+e}else{t=e}}});return t};var t=function(t){var n="";if(t){if(t["sap.ui5"]&&t["sap.ui5"].dependencies){if(t["sap.ui5"].dependencies.libs){n=e(t["sap.ui5"].dependencies.libs,n)}if(t["sap.ui5"].dependencies.components){n=e(t["sap.ui5"].dependencies.components,n)}}if(t["sap.ui5"]&&t["sap.ui5"].componentUsages){n=e(t["sap.ui5"].componentUsages,n)}}return n};var n=function(e){var n=e;return new Promise(function(r,a){$.ajax(n).done(function(e){r(t(e))}).fail(function(){a(new Error("Could not fetch manifest at \'"+e))})})};var r=function(e){if(e){Object.keys(e).forEach(function(t){var n=e[t];if(n&&n.dependencies){n.dependencies.forEach(function(e){if(e.url&&e.url.length>0&&e.type==="UI5LIB"){jQuery.sap.log.info("Registering Library "+e.componentId+" from server "+e.url);jQuery.sap.registerModulePath(e.componentId,e.url)}})}})}};sap.registerComponentDependencyPaths=function(e){return n(e).then(function(e){if(e&&e.length>0){var t="/sap/bc/ui2/app_index/ui5_app_info?id="+e;var n=jQuery.sap.getUriParameters().get("sap-client");if(n&&n.length===3){t=t+"&sap-client="+n}return $.ajax(t).done(r)}})}})(sap);var scripts=document.getElementsByTagName("script");var currentScript=document.getElementById("locate-reuse-libs");if(!currentScript){currentScript=document.currentScript}var manifestUri=currentScript.getAttribute("data-sap-ui-manifest-uri");var componentName=currentScript.getAttribute("data-sap-ui-componentName");var useMockserver=currentScript.getAttribute("data-sap-ui-use-mockserver");var bundleResources=function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")};sap.registerComponentDependencyPaths(manifestUri).catch(function(e){jQuery.sap.log.error(e)}).finally(function(){sap.ui.getCore().attachInit(bundleResources);if(componentName&&componentName.length>0){if(useMockserver&&useMockserver==="true"){sap.ui.getCore().attachInit(function(){sap.ui.require([componentName.replace(/\\./g,"/")+"/localService/mockserver"],function(e){e.init();sap.ushell.Container.createRenderer().placeAt("content")})})}else{sap.ui.require(["sap/ui/core/ComponentSupport"]);sap.ui.getCore().attachInit(bundleResources)}}else{sap.ui.getCore().attachInit(function(){sap.ushell.Container.createRenderer().placeAt("content")})}});sap.registerComponentDependencyPaths(manifestUri);\n//# sourceMappingURL=locate-reuse-libs.js.map',
	"project1/view/App.view.xml":'<mvc:View controllerName="project1.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"project1/view/View1.view.xml":'<mvc:View xmlns:uxap="sap.uxap" controllerName="project1.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"\n    xmlns:t="sap.ui.table"\n    \n    xmlns:core="sap.ui.core"\n    xmlns:forms="sap.ui.layout.form" ><Page id="page" title="{i18n>title}"><content><uxap:ObjectPageLayout id="ObjectPageLayout" upperCaseAnchorBar="false"><uxap:headerTitle><uxap:ObjectPageDynamicHeaderTitle id="_IDGenObjectPageDynamicHeaderTitle1"><uxap:expandedHeading><Title id="_IDGenTitle1" text="{portfolio>/name}" /></uxap:expandedHeading><uxap:snappedHeading><HBox id="_IDGenHBox1"><VBox id="_IDGenVBox1"><Title id="_IDGenTitle2" text="{portfolio>/name}" /><Text id="_IDGenText1" text="{portfolio>/designation}" /></VBox></HBox></uxap:snappedHeading><uxap:expandedContent><Text id="_IDGenText2" text="{portfolio>/designation}"/></uxap:expandedContent><uxap:snappedTitleOnMobile><Title id="_IDGenTitle3" text="{portfolio>/name}" /></uxap:snappedTitleOnMobile></uxap:ObjectPageDynamicHeaderTitle></uxap:headerTitle><uxap:headerContent><FlexBox id="_IDGenFlexBox1" wrap="Wrap" fitContainer="true"><VBox id="_IDGenVBox2" class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><Title id="_IDGenTitle4" text="Email" class="sapUiTinyMarginBottom" /><ObjectStatus id="_IDGenObjectStatus1" text="{portfolio>/email}" state="Success" class="sapMObjectStatusLarge" /></VBox><VBox id="_IDGenVBox3" class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><Title id="_IDGenTitle5" text="Current Company" class="sapUiTinyMarginBottom" /><ObjectStatus id="_IDGenObjectStatus2" text="{portfolio>/currentcompany}" class="sapMObjectStatusLarge" /></VBox><VBox id="_IDGenVBox4" class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><Title id="_IDGenTitle6" text="Phone" class="sapUiTinyMarginBottom" /><ObjectStatus id="_IDGenObjectStatus3" text="{portfolio>/phone}" state="Error" class="sapMObjectStatusLarge" /></VBox></FlexBox></uxap:headerContent><uxap:sections><uxap:ObjectPageSection id="_IDGenObjectPageSection1" titleUppercase="false" title="Education Details"><uxap:subSections><uxap:ObjectPageSubSection id="_IDGenObjectPageSubSection1" title="Education Details" showTitle="false"><uxap:blocks><Table id="_IDGenTable1" class="sapUxAPObjectPageSubSectionAlignContent" width="auto" items="{portfolio>/education}"><columns><Column id="_IDGenColumn1"><Text id="_IDGenText3" text="Class" /></Column><Column id="_IDGenColumn2" minScreenWidth="Tablet" demandPopin="true"><Text id="_IDGenText4" text="Percentage" /></Column><Column id="_IDGenColumn3" minScreenWidth="Tablet" demandPopin="true"><Text id="_IDGenText5" text="Year" /></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1"><Link id="_IDGenLink1" text="{portfolio>type}" /><Text id="_IDGenText6" text="{portfolio>per}" /><Text id="_IDGenText7" text="{portfolio>year}" /></ColumnListItem></items></Table></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection id="_IDGenObjectPageSection2" titleUppercase="false" title="Certification Details"><uxap:subSections><uxap:ObjectPageSubSection id="_IDGenObjectPageSubSection2" title="Certification Details"><uxap:blocks><FlexBox id="_IDGenFlexBox2" items="{portfolio>/certification}"><GenericTile id="_IDGenGenericTile1"  header="{portfolio>name}"  press="onPress"\n\t\t subheader="{portfolio>year}"><TileContent id="_IDGenTileContent1"></TileContent></GenericTile></FlexBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection id="_IDGenObjectPageSection3" titleUppercase="false" title="Employment details"><uxap:subSections><uxap:ObjectPageSubSection id="_IDGenObjectPageSubSection3" title="Employment details" showTitle="false"><uxap:blocks><t:TreeTable\n                    id="TreeTableBasic"\n                    rows="{path:\'portfolio>/employment\', parameters: {arrayNames:[\'projects\']}}"\n                    enableSelectAll="false"\n                    selectionMode="Single"\n                    ariaLabelledBy="title"><t:columns><t:Column id="_IDGenColumn4" width="400px"><Label id="_IDGenLabel1" text="Description"/><t:template><Text id="_IDGenText8" text="{portfolio>name}" wrapping="false" /></t:template></t:Column><t:Column id="_IDGenColumn5" width="6000px"><Label id="_IDGenLabel2" text="Type"/><t:template><Text id="_IDGenText9" text="{portfolio>type}" wrapping="false" /></t:template></t:Column></t:columns></t:TreeTable></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection></uxap:sections></uxap:ObjectPageLayout></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
