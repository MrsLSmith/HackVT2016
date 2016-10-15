import moment from "moment";

import {Template} from 'meteor/templating';

import './body.html';

import {Users, Groups} from '../api/tasks.js';

var activeScreen = "create";


Template.body.helpers({
    users() {
        return Users.find({});
    },
    studyGroupScreen(){
        return activeScreen === "studygroup"
    },
    loginScreen(){
        return activeScreen === "login"
    },
    createScreen(){
        return activeScreen === "create"
    },
});

Template.studygroups.helpers({
    groups() {
        return Groups.find({});
    },
});

Template.studygroup.helpers({
    formatDate(date) {
        return moment(date).format("ddd MMM Do h:mm a");
    },
});