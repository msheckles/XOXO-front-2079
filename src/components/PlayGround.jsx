import { useEffect, useState } from "react";
import PlayButton from "./PlayButton";
import { Navigate, useParams } from "react-router-dom";
import APIClient from "../connections/apiconnection";
function postResults(winner,loser){
    const apiClient = new APIClient('users/changeScore');
    apiClient.post([{name : winner, status : "Win"},{name: loser, status : "Lose"}]);
}

function PlayGround({player1name , player2name}){
    let [turn,setTurn] = useState(1);
    let [selected,setSelected] = useState([0,0,0,0,0,0,0,0,0]);
    let [winner,setWinner] = useState(null);
    let [isdone,setIsdone] = useState(false);
    let [replay,setReplay] = useState(0);
    let params = useParams();
    [player1name,player2name] = params.names.split("::"); 
    if( player1name == undefined || player2name == undefined || player1name == '' || player2name == '' ){
        return <Navigate to={'/signupForm'} />
    }
    console.log(params.names);
    useEffect(() =>{console.log(selected);
        for(let i= 0;i<9;i+=3){
            if(selected[i] == selected[i+1] && selected[i+1] == selected[i+2] && selected[i] != 0){
                selected[i] == 1 ? setWinner(player1name) : setWinner(player2name);
                selected[i] == 1 ? postResults(player1name,player2name) : postResults(player2name,player1name);
                setIsdone(true);
                return;
                
            }
        }
        for(let i = 0 ; i<3 ; i++){
            if(selected[i] == selected[i+3] && selected[i+3] == selected[i+6] && selected[i] != 0){
                selected[i] == 1 ? setWinner(player1name) : setWinner(player2name);
                selected[i] == 1 ? postResults(player1name,player2name) : postResults(player2name,player1name);
                setIsdone(true);
                return;
            }
        }
        if(selected[0] == selected[4] && selected[4] == selected[8] && selected[0] != 0){
            selected[0] == 1 ? setWinner(player1name) : setWinner(player2name);
            selected[0] == 1 ? postResults(player1name,player2name) : postResults(player2name,player1name);
            setIsdone(true);
            return;
        }
        if(selected[2] == selected[4] && selected[4] == selected[6] && selected[2] != 0){
            selected[2] == 1 ? setWinner(player1name) : setWinner(player2name);
            selected[2] == 1 ? postResults(player1name,player2name) : postResults(player2name,player1name);
            setIsdone(true);
            return;
        }
    },[turn]);
    return (
        <div style={{alignItems: "center",display: 'flex', flexDirection : "column",width : '100%'}}>
            <div style={{display: "flex", justifyContent: "space-between", color : "white", width : '100%'}}>

                <p>{player2name + " is : O"}</p>
                <p>{winner ? `The Winner is ${winner}` : null}</p>
                <p>{player1name + " is : X"}</p>
                
            </div>
            {winner? null : <p style={{color : 'white'}}><span style={{color :(turn % 2 == 1)? 'blue' : 'red'}}>{(turn % 2 == 1)? player1name : player2name}</span>'s turn</p>}
            
            
            <div style={{display: "flex",flexWrap: 'wrap',width : '500px', justifyContent: 'space-between' }}>
            {selected.map((item,i) => <PlayButton turn={turn} isdone={isdone} replay={replay} setTurn = {() => setTurn(turn +1 )} setSelecter={(selector) => setSelected(selected.map((item2, j) => (j === i ? selector : item2)))}/>)}

            </div>
        </div>
    )
}
export default PlayGround;