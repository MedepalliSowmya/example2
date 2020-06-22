import React from 'react';
export default class FixDeposit extends React.Component{
    constructor()
    {
        super();
        this.state={
            roi:0,
            t:'',
            principal:'',
            year:'',
            fixdep:0,
            r:''
        }
        this.changeRoi=this.changeRoi.bind(this);
        this.setAmount=this.setAmount.bind(this);
        this.setYear=this.setYear.bind(this);
        this.calFix=this.calFix.bind(this);
        }
        setYear(event)
        {
            this.setState({
                t:event.target.value
            })
        }
        setAmount(event)
        {
            this.setState({
                principal :event.target.value
            })
        }
       changeRoi()
       {
           if(this.state.t==1)
           {
               this.setState({roi:7 })
               return this.roi;
           }
           else if((this.state.t>1)&&(this.state.t<=5))
           {
               this.setState({ roi:8 })
               return this.roi;
           }
           else if((this.state.t>5) && (this.state.t<=10))
           {
               this.setState({ roi:9 })
               return this.roi;
           }
           else{
               alert("Enter valid year")
           }
       }
       calFix()
       {
           this.amount=this.state.principal;
           this.year=this.state.t;
           this.r=this.state.roi/100;
           this.fixdep=this.amount*Math.pow((1+this.r),this.year);
           alert("your Maturity Amount is:"+this.fixdep);
       }
       render(){
           return(
               <div>
                   <h3>Fixed Deposit</h3>
                   Deposit Amount:<input type="number" onChange={this.setAmount}/><br/>
                   Duration:<select onChange={this.setYear }>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                   </select><br/><br/>
                   <button value={this.state.roi} onClick={this.changeRoi }>Rate of interest</button>{this.state.roi}<br/><br/>
                   <button onClick={this.calFix}>Fixed Deposit</button>
               </div>
           )
       }

    }

