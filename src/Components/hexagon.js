import React, { Component } from 'react';

class Hexagon extends Component {
    state = {
        width: 9, 
        height: 20, 
        indent: true,
    }
    createHex(n){
        let w = this.state.width;
        let tileWidth = 1440/w;
        console.log((w-1)*n+(w+1))
        if( n === 9 || n === 24 || n === 39 || n === 54 || n === 69 ){
            // if width = 9  then 15n-6
            // if width = 10 then 17n-7
            // if width = 11 then 18n-8
            return(
                <li className="hex" style={{marginLeft: tileWidth/2, width: tileWidth, position:'relative', outline:'1px solid transparent'}} onClick={()=>console.log(n)}>
                    <div className="hexIn">
                        <div className="hexLink">
                            <div className="innerHex" style={{backgroundColor:'red'}}/>
                            <h1>{n}</h1>
                        </div>
                    </div>
                </li>    
            )
        } else {
            return(
                <li className="hex" style={{width: tileWidth, position:'relative', outline:'1px solid transparent'}} onClick={()=>console.log(n)}>
                    <div className="hexIn">
                        <div className="hexLink">
                            <div className="innerHex" style={{backgroundColor:'red'}}/>
                            <h1>{n}</h1>
                        </div>
                    </div>
                </li>    
            )
        }
    }
    reportCoordinate(e){
        console.log(e.target.id)
    }
    showOptions(tileNum){
        if(tileNum===1){
            return(<p id={tileNum}>Near:{tileNum+1}, {tileNum+10}</p>)
        } else if (tileNum % this.state.size === 1 && tileNum > 1){
            return(<p id={tileNum}>Near: {tileNum-this.state.size/2}, {tileNum+1}, {tileNum+this.state.size/2}</p>)
        } else if (tileNum % (this.state.size/2) === 1 && tileNum > 1){
            return(<p id={tileNum}>Near: {tileNum-this.state.size/2}, {tileNum-(this.state.size/2)-1}, {tileNum+1}, {tileNum+this.state.size/2}, {tileNum+(this.state.size/2)+1}</p>)
        }
        // return(<p id={tileNum}>Options: {tileNum-11}, {tileNum-10}, {tileNum-1}, {tileNum+1}, {tileNum+9}, {tileNum+10}</p>)
    }
    makeTiles(){
        let tiles = [];
        let tileNum = 0;
        let width = this.state.width;
        let height = this.state.height;
        for (let i = 0; i <= height; i++) {
            for (let j = 1; j <= width; j++) {
                tileNum++
                tiles.push(this.createHex(tileNum))
            }
        }
        return tiles
    }
    render() {
        return (
            <ul id="hexGrid">
            {this.makeTiles()}
          </ul>
        )
    }
};

export default Hexagon;