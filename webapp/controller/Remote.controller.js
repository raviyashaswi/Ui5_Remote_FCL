sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "project1/model/formatter",
  "sap/f/library"
], (BaseController,formatter,fioriLibrary) => {
  "use strict";

  return BaseController.extend("project1.controller.Remote", {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("RemoteView").attachPatternMatched(this._onEmployeeMatched, this);
    },
    _onEmployeeMatched(oEvent){
      const empID = oEvent.getParameter("arguments").eID;
        console.log(empID);
      var oModel = this.getView().getModel();
      const oTable = this.getView().byId("Table");
      const aFilters = [
                new sap.ui.model.Filter("employee_ID", sap.ui.model.FilterOperator.EQ, empID)
              ]
      oTable.bindItems({
                path: "/Remote",           // Target the Enrollments collection
                filters: aFilters,              // Filter the collection by student_sID
                parameters: {                   // OData V4 parameters
                },
                template: oTable.getBindingInfo("items").template // Use the existing <items> template in the XML View
            });

    },
    formatter: formatter, 
      addRequest(){
        var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RequestView", { ID: "new"});
            console.log("Selected Request Code: " + "new");
    },
    onItemPress(oEvent){
      const oTableItem = oEvent.getSource();
            var oContext = oTableItem.getBindingContext();
            var sR = oContext.getObject();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RequestView", { ID: sR.ID,employee_ID:sR.employee_ID});
            console.log("Selected Request Code: " + sR.ID+sR.employee_ID);
        
    },
    phbFunction: async function(){
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("PHView", { _: "all"});
    }    
  });
});