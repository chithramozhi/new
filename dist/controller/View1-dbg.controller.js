sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent",
 
"project1/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,History, UIComponent, formatter) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            formatter: formatter,
            getModel: function(sName) {
                return this.getView().getModel(sName);
            },
            onInit: function () {
                

            },
            setModel: function(oModel, sName) {
                return this.getView().setModel(oModel, sName);
              },
              getResourceBundle: function() {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
              },
              navTo: function(psTarget, pmParameters, pbReplace) {
                this.getRouter().navTo(psTarget, pmParameters, pbReplace);
              },
              getRouter: function() {
                return UIComponent.getRouterFor(this);
              },
              onNavBack: function() {
                var sPreviousHash = History.getInstance().getPreviousHash();
          
                if (sPreviousHash !== undefined) {
                  window.history.back();
                } else {
                  this.getRouter().navTo("appHome", {}, true /*no history*/ );
                }
            }
        });
    });
