//packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


//all the template
import '../../template';


FlowRouter.notFound = {

    action: function() {
      BlazeLayout.render('layout', { main: 'notFound' });
    }
};


//visitor routes
FlowRouter.route('/', {
  name: 'landing',
  action() {
    BlazeLayout.render('layout', { main: 'landing' });
  },
});


//user routes
FlowRouter.route('/user/:userId', {
  name: 'user profile',
  action() {
    BlazeLayout.render('layout', { main: 'profile' });
  },
});




//admin routes
var sys = FlowRouter.group({
  prefix: '/admin',
});

sys.route('/manage-user', {
  name: 'manage user',
  action() {
    BlazeLayout.render('layout', { main: 'isModerator', targetTemplate: 'manageUser' });
  },
});

sys.route('/users/:role', {
  name: 'user by role',
  action() {
    BlazeLayout.render('layout', { main: 'isModerator', targetTemplate: 'usersByRole' });
  },
});
sys.route('/user/:userId', {
  name: 'single user',
  action() {
    BlazeLayout.render('layout', { main: 'isModerator', targetTemplate: 'singleUser' });
  },
});

sys.route('/dashboard/', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('layout', { main: 'isModerator', targetTemplate: 'dashboard' });
  },
});

sys.route('/activities/user-management', {
  name: 'user management activity',
  action() {
    BlazeLayout.render('layout', { main: 'isModerator', targetTemplate: 'userManagementLogs' });
  },
});
