sap.ui.define([
	"sap/ui/core/ValueState" // 1. Import ValueState for colors
], (ValueState)=> {
	"use strict";

	return {
		statusText(sStatus) {
			switch (sStatus) {
				case "0":
					return ("Pending");
				case "1":
					return ("Accepted");
				case "-1":
					return ("Rejected");
			}
		},
		statusColor(sStatus) {
			switch (sStatus) {
				case "0":
					return ValueState.Information;;
				case "1":
					return ValueState.Success;
				case "-1":
					return ValueState.Error;
			}
		}
	};
});