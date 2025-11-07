sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/f/library",
  "sap/ui/model/json/JSONModel"


], (Controller, fioriLibrary, JSONModel) => {
  "use strict";

  return Controller.extend("project1.controller.Request", {
    onInit() {
      const oViewData = this.getView().getViewData();
      const sPath = `/Remote(${oViewData.RequestId})`;
      this.bindRequest(sPath);
    },

    async bindRequest(sPath) {
      
      this.getView().bindElement({
        path: sPath,
        events: {
          dataReceived: () => console.log(`Data loaded for ${sPath}`),
          change: () => console.log(`Binding changed to ${sPath}`)
        }
      });
      console.log(this.getView().getModel().getMetadata().getName());
    },
    onHeaderButtonPress() {
      var oFCL = this.oView.getParent().getParent();
      oFCL.setLayout(fioriLibrary.LayoutType.OneColumn);
    },
  });
});