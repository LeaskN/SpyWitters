import React, { Component } from 'react';

class Hexagon extends Component {
    state = {
        width: 5, 
        height: 10,
        gameWidth:10000, 
        tileWidth: 200,
        allTiles:[],
    }
    createHex(n){
        let tileWidth = this.state.tileWidth;
        return(
            <li className="hex" style={{width: tileWidth, position:'relative', outline:'1px solid transparent'}} >
                <div className="hexIn" onClick={()=>console.log(n)}>
                    <div className="hexLink">
                        <div className="innerHex" style={{backgroundColor:'darkgrey'}}/>
                        <h1>{n}</h1>
                        <h2>{this.showOptions(n)}</h2>
                    </div>
                </div>
            </li>    
        )
    }
    reportCoordinate(e){
        // console.log(e.target.id)
    }
    makeTileAttributes(tileNum){
        let newTile = { NW: tileNum, NE: tileNum, EE: tileNum, SE: tileNum, SW: tileNum, WW: tileNum };
        let currentTiles = this.state.allTiles;
        currentTiles.push(newTile)
        console.log(currentTiles)
    }
    showOptions(tileNum){
        //assign outliers before "normals" corners > edges > center
        if(tileNum === 1){ //first tile
            return(<p id={tileNum}>Near: {tileNum+1}, {tileNum+this.state.width}</p>)
        } else if (tileNum === this.state.width){ //last tile first row
            return(<p id={tileNum}>Near: {tileNum-1}, {tileNum+this.state.width-1}, {tileNum+this.state.width}</p>)
        } else if (tileNum === (this.state.width * this.state.height)){ //last row last tile
            return(<p id={tileNum}>Near: {tileNum-1}, {tileNum-this.state.width}</p>)
        } else if (tileNum === ((this.state.width * this.state.height)-(this.state.width-1))){ //last row first tile
            return(<p id={tileNum}>Near: {tileNum+1}, {tileNum-this.state.width}, {tileNum-this.state.width+1}</p>)
        } else if (tileNum % (2 * this.state.width) === 0){ // even rows end-right
            return(<p id={tileNum}>Near: {tileNum-this.state.width}, {tileNum-1}, {tileNum+this.state.width}</p>)
        } else if (tileNum % (this.state.width) === 0){ //odd rows end-right
            return(<p id={tileNum}>Near: {tileNum-this.state.width-1}, {tileNum-this.state.width}, {tileNum-1}, {tileNum+this.state.width-1}, {tileNum+this.state.width}</p>)
        } else if (tileNum % (2 * this.state.width) === 1){ //odd rows end-left
            return(<p id={tileNum}>Near: {tileNum-this.state.width}, {tileNum+1}, {tileNum+this.state.width}</p>)
        } else if (tileNum % (this.state.width) === 1){ //even rows end-left
            return(<p id={tileNum}>Near: {tileNum-this.state.width}, {tileNum-this.state.width+1}, {tileNum+1}, {tileNum+this.state.width}, {tileNum+this.state.width+1}</p>)
        } else if (tileNum < this.state.width){ //first row, not ends
            return(<p id={tileNum}>Near: {tileNum-1}, {tileNum+1}, {tileNum+this.state.width-1}, {tileNum+this.state.width}</p>)
        } else if (tileNum > ((this.state.width * this.state.height)-this.state.width)){ //last row, not ends
            return(<p id={tileNum}>Near: {tileNum-this.state.width}, {tileNum-this.state.width+1}, {tileNum-1}, {tileNum+1} </p>)
        } else if(tileNum % (2 * this.state.width) < this.state.width){ //odd rows
            return(<p id={tileNum}>Near: {tileNum-this.state.width-1}, {tileNum-this.state.width}, {tileNum+1}, {tileNum-1}, {tileNum+this.state.width-1}, {tileNum+this.state.width}</p>)
        } else { // even rows
            this.makeTileAttributes(tileNum)
            return(<p id={tileNum}>Near: {tileNum-this.state.width}, {tileNum-this.state.width+1}, {tileNum-1}, {tileNum+1}, {tileNum+this.state.width}, {tileNum+this.state.width+1}</p>)
        }
    }
    makeTiles(){
        let row = [];
        let column = [];
        let indent = false;
        let tileNum = 0;
        let totalTiles = this.state.width;
        let height = this.state.height;
        for (let i = 0; i <= height - 1; i++) {
            for (let j = 1; j <= totalTiles; j++) {
                tileNum++
                row.push(this.createHex(tileNum));
            }
            if (!indent){
                row.push(<div style={{width:(this.state.gameWidth-totalTiles * this.state.tileWidth)}}></div>)
                column.push(row)
            } else {
                row.unshift(<div style={{width:(this.state.tileWidth/2)}}></div>)
                row.push(<div style={{width:((this.state.gameWidth-totalTiles * this.state.tileWidth)-(this.state.tileWidth/2))}}></div>)
                column.push(row)
            }
            row = [];
            indent = !indent;
        }
        return column
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