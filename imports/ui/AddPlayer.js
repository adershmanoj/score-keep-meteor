import React from 'react';
import {Players} from './../api/players';
export default class AddPlayer extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var playerName=e.target.playerName.value;
        if(playerName){
            Players.insert({
                name:playerName,
                score:0
            });
        };
        e.target.playerName.value='';  
    }
    render(){
        return <div className='item'>
                    <form className='form' onSubmit={this.handleSubmit}>
                    <input className='form__input' type='text' placeholder='Player Name' name='playerName'/>
                    <button className='button'>Add Player</button>
                    </form>
               </div>;   
    }
}