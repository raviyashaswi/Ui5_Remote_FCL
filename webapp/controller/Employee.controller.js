sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("project1.controller.Employee", {
      onInit() {
      }, 
      async onItemPress(oEvent){
        const oTableItem = oEvent.getSource();
            var oContext = oTableItem.getBindingContext();
            var sE = oContext.getObject();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RemoteView", { eID: sE.ID});
            console.log("Selected Request Code: " + sE.ID);
      }
  });
});