sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("project1.controller.App", {
      onInit() {
        // this.getOwnerComponent().getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
      }, 
    //   phbFunction: async function(){
    //         var oRouter = this.getOwnerComponent().getRouter();
    //         oRouter.navTo("PHView", { });
    // }
  });
});