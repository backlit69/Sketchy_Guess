import React from 'react'
import Logout from '../login/Logout'
import { useContext } from 'react'
import GameContext from '../../context/GameContext'
import Player from './Player'
import SocketContext from '../../context/SocketContext'
import UserContext from '../../context/UserContext'
import ChatBox from './ChatBox'

const Lobby = () => {
  const {game} = useContext(GameContext)
  const {socket} = useContext(SocketContext)
  const {user} = useContext(UserContext)
  const startGame = () =>{
      socket.emit("start_game",{room : game.roomNo})
      console.log("fired start game")
  }

  return (
    <div>
      <h1>{game.type}</h1>
     { Object.keys(game.player_names).map((data,index)=>{
        return <Player user={data}/>
      })}
      <Logout></Logout>
      {(user==game.admin_name)? <button onClick={()=>{startGame()}}>StartGame</button>:<div></div>}
      <ChatBox/>
    </div>
  )
}

export default Lobby