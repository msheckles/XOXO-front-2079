import useTopTenUsers from "../hooks/useTopTenUsers";




function TopPlayers(){
    let {data,error,isLoading} = useTopTenUsers();
    console.log(data);
    console.log(error);
    let topscores = [{name: "A", score:'12'},{name: "A", score:'11'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},{name: "A", score:'10'},]
    return(
        <div style={{display: "flex", alignItems:"center", flexDirection:'column',width: "100%", color: "white"}}>
            <h1>Top Scores</h1>
            <div style={{display: "flex",alignItems: "center",width: '100%', flexDirection:'column'}}>
                { data?.map((item,index) => <div style={{display: 'flex', width : "70%", justifyContent: 'space-between'}} key={index}>
                    <p>{item.name}</p>
                    <p>{item.score}</p>
                </div> )}
            </div>
        </div>
    )
}
export default TopPlayers;