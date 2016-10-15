import { Template } from 'meteor/templating';
import './studygroup.html';
import { Users, Groups } from '../api/tasks.js';

Template.studygroup.helpers({
    groups() {
          return Users.find({});
    }
});