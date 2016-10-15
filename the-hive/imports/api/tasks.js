import { Mongo } from 'meteor/mongo';

export const Locations = new Mongo.Collection('locations');
export const Users = new Mongo.Collection('users');
export const Groups = new Mongo.Collection('groups');
export const Topics = new Mongo.Collection('topics');