import { Template } from 'meteor/templating';

import './study-group.html';
import { Users, Tasks } from '../api/tasks.js';

Template.study-group.helpers({
    users() {
        return Users.find({});
    },
    tasks() {
        return Tasks.find({});
    },
});