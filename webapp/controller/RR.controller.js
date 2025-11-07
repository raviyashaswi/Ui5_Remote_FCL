sap.ui.define([
  "sap/ui/core/mvc/Controller",
    "sap/f/library"

], (BaseController,fioriLibrary) => {
  "use strict";

  return BaseController.extend("project1.controller.RR", {
      onInit() {
        this.oEventBus = sap.ui.getCore().getEventBus();
        this.oEventBus.subscribe("Remote", "navigateMid", this._onNavigateMid, this);
      },
      _onNavigateMid: function (sChannelId, sEventId, sData) {
        const oFCL = this.getView().byId("layout");
        console.log(oFCL)
        const sViewName = sData.viewName;
        //const oComponent = this.getOwnerComponent(); // get the current component

        const oMidView = sap.ui.view({
          viewName: sViewName,
          type: sap.ui.core.mvc.ViewType.XML,
          viewData: {
            RequestId: sData.RequestId,
          //   component: oComponent // pass component context
          oModel: this.getView().getModel() 
          }
        });
        oFCL.removeAllMidColumnPages();
        oFCL.addMidColumnPage(oMidView);
        oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
      }
  });
});