import { Meteor } from 'meteor/meteor';
import {setKamazAuthDebug} from "meteor-kamaz-oauth";

Meteor.startup(() => {
  // code to run on server at startup
    console.log({settings: Meteor.settings})
});
