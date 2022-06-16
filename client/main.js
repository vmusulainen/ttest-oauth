import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from "meteor/meteor";
import {setKamazAuthDebug} from "meteor-kamaz-oauth";

setKamazAuthDebug();

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        Meteor.loginWithKamazAuth({}, (err, res) => {
                console.log({err, res})
            }
        )
    }
})