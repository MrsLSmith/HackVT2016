import { Template } from 'meteor/templating';

import './login.html';
import { Users, Tasks } from '../api/tasks.js';

Template.login.helpers({
    users() {
        return Users.find({});
    },
    tasks() {
        return Tasks.find({});
    },
});