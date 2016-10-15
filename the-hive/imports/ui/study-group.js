import { Template } from 'meteor/templating';

import './study-group.html';
import { Users, Groups } from '../api/tasks.js';

Template.study-group.helpers({
    users() {
        return Users.find({});
    },
    groups() {
         var g = Groups.find({});
         return ;
    },
});