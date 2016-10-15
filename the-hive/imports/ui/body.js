import { Template } from 'meteor/templating';

import './body.html';
import { Users, Tasks } from '../api/tasks.js';

Template.body.helpers({
    users() {
        return Users.find({});
    },
    tasks() {
        return Tasks.find({});
    },
});