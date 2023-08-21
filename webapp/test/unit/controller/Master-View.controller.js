/*global QUnit*/

sap.ui.define([
	"sapui5final/controller/Master-View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Master-View Controller");

	QUnit.test("I should test the Master-View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
