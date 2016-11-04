import {Modal} from 'meteor/peppelg:bootstrap-3-modal';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';


import './sys_navbar.html';



Template.sysNavbar.events({
  'click .signIn': function(event) {
    var options = {
      requestPermissions: ['identify', 'users:read']
    };
    Meteor.loginWithSlack(options);
  },
  "click #logout": function(event, template){
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('landing');
  },
});
