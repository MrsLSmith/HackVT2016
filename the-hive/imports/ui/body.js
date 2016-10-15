import moment from "moment";

import {Template} from 'meteor/templating';

import './body.html';

import {Users, Groups} from '../api/tasks.js';

var activeScreen = "studygroup";
var selectedStudyGroup = null;


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


Template.studygroup.events({
    'click .btn2'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const studyGroupId = target._id.value;

        // Insert a task into the collection
        // Tasks.insert({
        //     text,
        //     createdAt: new Date(), // current time
        // });

        // Clear form
        activeScreen = "logon";
    },
});

