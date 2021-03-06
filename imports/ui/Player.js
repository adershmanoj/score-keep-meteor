import React from 'react';
import {Players} from './../api/players';
export default class Player extends React.Component {
    render(){
        let itemClassName=`item item--position-${this.props.player.rank}`;
        var player=this.props.player;
        return  <div className={itemClassName}>
                    <div className='player'>
                        <div>
                            <h3 className='player__name'>{player.name}</h3>
                            <p key={player._id} className='player__stats'>{player.position} {player.score} point(s)</p>
                        </div>
                        <div className='player__actions'>
                            <button className='button button--round' onClick={()=>Players.update(player._id,{$inc:{score:1}})}> +1 </button>
                            <button className='button button--round' onClick={()=>Players.update(player._id,{$inc:{score:-1}})}> -1 </button>
                            <button className='button button--round' onClick={()=>Players.remove(player._id)}> X</button>
                        </div>
                    </div>
                </div>
        
    }
    
}
Player.prototypes={
    player: React.PropTypes.object.isRequired
}