import { Template } from 'meteor/templating';

import './body.html';
import { Users } from '../api/tasks.js';
import { Location } from '../api/tasks.js';

Template.body.helpers({
    users() {
        return Users.find({});
    },
});