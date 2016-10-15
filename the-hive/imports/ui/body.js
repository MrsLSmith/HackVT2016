import { Template } from 'meteor/templating';

import './body.html';
import { Users, Locations, Groups, Schools } from '../api/tasks.js';

Template.body.helpers({
    users() {
        return Users.find({});
    },
    locations() {
        return Locations.find({});
    },
    groups() {
        return Groups.find({});
    },
    schools() {
        return Schools.find({});
    },

});