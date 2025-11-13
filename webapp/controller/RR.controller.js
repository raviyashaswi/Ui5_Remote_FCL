sap.ui.define([
  "sap/ui/core/mvc/Controller",
	"sap/f/library",
	"sap/ui/model/json/JSONModel"


], (BaseController,fioriLibrary,JSONModel) => {
  "use strict";

  return BaseController.extend("project1.controller.RR", {
      onInit() {

		var oViewModel = new JSONModel({
				busy : true,
				delay : 0,
				layout : "OneColumn",
				previousLayout : "",
				actionButtonsInfo : {
					midColumn : {
						fullScreen : true
					},
					smallScreenMode: true
				}
			});
			this.getView().setModel(oViewModel, "RRViewModel");

      }
      
  });
});