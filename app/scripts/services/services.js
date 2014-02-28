'use strict';

/* Services */

var myPhoneAppServices = angular.module('myPhoneAppServices', []);

myPhoneAppServices.service('CallService', function() {

	var self = this;
	self.callContainer = new CallsContainer();

	this.makeCall =  function (phoneNumber, callStausEventHandler) {
	
		var outgoingCall = new Call("1", phoneNumber);
		outgoingCall.registerListener(callStausEventHandler);
		this.callContainer.addCall(outgoingCall);
		handleOutgoingCalls (outgoingCall);

		return outgoingCall;
	}

	function handleOutgoingCalls (outgoingCall) {
		if (outgoingCall.phoneNumber==="111") {
			window.setTimeout(
				function(){
					outgoingCall.changeCallStatus("no answer !")
				},
				3000
			);
		}
		else if (outgoingCall.phoneNumber==="222") {
			window.setTimeout(
				function(){
					outgoingCall.changeCallStatus("ringing");
					fakeAcceptedCall();
				},
				4000
			);
		} else {
			window.setTimeout(
				function(){
					outgoingCall.changeCallStatus("call destination is unavailable")
				},
				1000
			);
		};
	}

	function fakeAcceptedCall(call) {
		window.setTimeout(
			function(){
				CallWasAccepted()
			},
			3000
		);			
	}

	function CallWasAccepted () {
		self.callContainer.getCallById("1").changeCallStatus("accepted");
	}

});

myPhoneAppServices.service('SharedData', function() {

	this.setData = function(value) {
		this.value = value;
	};

	this.getData = function() {
		return this.value;
	};

});
