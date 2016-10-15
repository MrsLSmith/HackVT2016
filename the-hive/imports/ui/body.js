import moment from "moment";

import {Template} from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';

import './body.html';

import {Users, Groups} from '../api/tasks.js';

var selectedStudyGroup = null;
var bodyInstance;

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();



});

Template.body.helpers({
    users() {
        return Users.find({});
    },
    isCurrent(myScreen){
        const instance = Template.instance();
        var screen = "login";

        if (instance.state.get("currentScreen")) {
            screen = instance.state.get("currentScreen");
        }
        return myScreen === screen ? "display:block" : "display:none";
    }




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


Template.body.events({
    'click .create-button'(event, instance) {
        // Prevent default browser form submit

        // Get value from form element

        // Insert a task into the collection
        // Tasks.insert({
        //     text,
        //     createdAt: new Date(), // current time
        // });
        ///var bInstance = event.view.parentView.templateInstance();

        instance.state.set('currentScreen', "create");

        // Clear form
        console.log('create button clicked');
    },
});

Template.body.events({
    'click #btn'(event, instance) {
        // Prevent default browser form submit
        // Get value from form element
        // Insert a task into the collection
        // Tasks.insert({
        //     text,
        //     createdAt: new Date(), // current time
        // });

        // var bInstance = event.view.parentView.templateInstance();

        instance.state.set('currentScreen', "studyGroups");

        console.log('login button clicked');
    },
});