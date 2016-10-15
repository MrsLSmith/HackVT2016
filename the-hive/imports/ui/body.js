import { Template } from 'meteor/templating';

import './body.html';

import { Users, Groups } from '../api/tasks.js';

Template.body.helpers({
    users() {
        return Users.find({});
    },

    groups() {
        return Groups.find({});
    },

});

Template.studygroups.helpers({
    groups() {
        return Groups.find({});
    },
});