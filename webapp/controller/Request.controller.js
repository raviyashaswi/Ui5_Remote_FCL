sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/f/library",
  "project1/model/formatter",
  "sap/ui/model/json/JSONModel"
], (Controller, fioriLibrary, formatter, JSONModel) => {
  "use strict";

  return Controller.extend("project1.controller.Request", {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("RequestView").attachPatternMatched(this._onRequestMatched, this);
    },
    async _onRequestMatched(oEvent) {
      globalThis.rID = oEvent.getParameter("arguments").ID;
      globalThis.eID = oEvent.getParameter("arguments").employee_ID;

      const sExpandQuery = `remote($filter=ID eq ${rID}),allocation,role`;
      const sPath = `/Employees(${eID})`;
      var oContext = this.getOwnerComponent().getModel().bindContext(sPath, undefined, { $expand: sExpandQuery });
      var oDetail = await oContext.requestObject().then(function (oData) {
        return oData;
      })
      this.getOwnerComponent().getModel("RemoteModel").setData(oDetail);
    }, 
    formatter: formatter,
    Approve() {
      this._updateStatus(1);
    },
    Reject() {
      this._updateStatus(-1);
    },
    async _updateStatus(iNewStatus) {

      var oModel = this.getView().getModel();
      var sPath = "/Remote";
      let oBindList = oModel.bindList(sPath);
      
      let aFilter = new sap.ui.model.Filter("ID", sap.ui.model.FilterOperator.EQ, rID);
      oBindList.filter(aFilter).requestContexts().then(function (aContexts) {
        console.log(aContexts[0]);
        aContexts[0].setProperty("status", iNewStatus);
      });
      var pModel = this.getOwnerComponent().getModel("RemoteModel");
      pModel.setProperty("/remote/0/status",iNewStatus);

    }
  });
});