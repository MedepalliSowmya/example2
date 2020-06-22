import React from 'react';
export default class Car extends React.Component{
    constructor()
    {
        super();
        this.state={
            principle:'',
            rate:10/1200,
            year:'',
            emi:'',
            mon:'null'
        }
        this.setPrinciple=this.setPrinciple.bind(this);
        this.setYear=this.setYear.bind(this);
    }
    setPrinciple(event){
        this.setState({
            principle:event.target.value
        })
    }
    setYear(event){
        this.setState({
            year:event.target.value
         } )
    }
    calEmi(){
        this.mon=this.state.year*12;
        this.emi=[this.state.principle * this.state.rate *Math.pow((1+this.state.rate),this.mon)]/(Math.pow(1+this.state.rate,this.mon)-1);
        this.emi=this.emi.toFixed(0);
        console.log(this.emi);
        alert("Equated monthly installement: Rs."+this.emi);
    
    }
    render()
    {
        return(
            <div>
                <h3>Enter the values to calculate car loan emi</h3>
                <form>
                    Enter amount:<input type="number" value={this.state.principle} onChange={this.setPrinciple}/><br/>
                    Duration:<select value={this.state.year } onChange={this.setYear}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select><br/>
                    Rate of interest:<input type="text" value="10%" disabled/><br/>
                    <button onClick={()=>this.calEmi() }>calculate Emi</button>
                </form> 
            </div>
        )
    }
}
