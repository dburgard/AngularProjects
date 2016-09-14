
angular.module('app', []);



angular.module('app').factory('messages', function() {
	var messagesList = {};
	messagesList.list = [];
	messagesList.add = function(message) {
		messagesList.list.push({id: messagesList.list.length, text: message});
	};
	return messagesList;
});



angular.module('app').controller('ListCtrl', function(messages) {
	var self = this;
	self.messages = messages.list;
});



angular.module('app').controller('PostCtrl', function(messages) {
	var self = this;
	self.newMessage = "Hello World";
	self.addMessage = function(message) {
		messages.add(message);
		self.newMessage = '';
	};
});