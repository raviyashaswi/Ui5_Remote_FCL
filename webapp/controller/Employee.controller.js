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
            var sRequestCode = oContext.getObject();
            console.log("Selected Request Code: " + sRequestCode.ID)
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RRView", { eID: sRequestCode.ID});
      }
  });
});