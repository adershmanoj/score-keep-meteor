import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players,calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';
Meteor.startup(()=>{
    Tracker.autorun(()=>{
        var title='Score-Keep';
        var players=Players.find({},{sort:{score:-1}}).fetch();
        var positionedPlayers=calculatePlayerPositions(players);
        ReactDOM.render(<App title={title} players={positionedPlayers}/>,document.getElementById('app'));
    });
});