sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "project1/model/formatter",
  "sap/f/library"
], (BaseController,formatter,fioriLibrary) => {
  "use strict";

  return BaseController.extend("project1.controller.Remote", {
    onInit() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("RemoteView").attachPatternMatched(this._onRouteMatched, this);
    },
    formatter: formatter, 
      addRequest(){
        sap.ui.getCore().getEventBus().publish("Remote", "navigateMid", {
        viewName: "project1.view.Request",
        RequestId: "new",
      });
    },
    onItemPress(oEvent){
      const oTableItem = oEvent.getSource();
      var oContext = oTableItem.getBindingContext();
      var sRequestCode = oContext.getObject();
        sap.ui.getCore().getEventBus().publish("Remote", "navigateMid", {
        viewName: "project1.view.Request",
        RequestId: sRequestCode.ID,
      });
    },
    phbFunction: async function(){
      sap.ui.getCore().getEventBus().publish("Remote", "navigateMid", {
        viewName: "project1.view.PH"
      });
    }

    

    
  });
});