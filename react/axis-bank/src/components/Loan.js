import React from 'react';
import Home2 from './Home2';
import Car from './Car';
import Personal from './Personal';
import RcIf from 'rc-if';

export default class Loan extends React.Component{
    constructor()
    {
        super();
        this.state={
            home:"",
            car:"",
            personal:""
        }
    
        this.setHome=this.setHome.bind(this);
        this.setCar=this.setCar.bind(this);
        this.setPersonal=this.setPersonal.bind(this);
    }
    setHome()
    {
       this.setState({
           home:true,
           car:false,
           personal:false
       })
    }
    setCar()
    {
       this.setState({
           home:false,
           car:true,
           personal:false
       })
    }
    setPersonal()
    {
       this.setState({
           home:false,
           car:false,
           personal:true
       })
    }
    render()
    {
        return(
         <div>
             <h4>Loan services</h4>
             <label><input type="radio" name="option" onChange={this.setHome}/>HomeLoan</label>
             <label><input type="radio" name="option" onChange={this.setCar}/>carLoan</label>
             <label><input type="radio" name="option" onChange={this.setPersonal}/>PersonalLoan</label>
             <RcIf if={this.state.home && ! this.state.car && !this.state.personal}>
                 <Home2></Home2>
             </RcIf>
             <RcIf if={this.state.car && ! this.state.home && !this.state.personal}>
                 <Car></Car>
             </RcIf>
             <RcIf if={this.state.personal && ! this.state.home && !this.state.car}>
                 <Personal></Personal>
             </RcIf>
         </div>
        )
              
    }
}
