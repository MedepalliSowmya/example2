import React from 'react';
import Loan from './Loan';
import Deposit from './Deposit';
import RcIf from'rc-if';

class Services extends React.Component{
    constructor(){
        super();
        this.state={
            Loan:"",
            Deposit:"",
        }
        this.setLoan = this.setLoan.bind(this);
        this.setDeposit=this.setDeposit.bind(this);

    }
    setLoan()
    {
        this.setState({
            Loan:true,
            Deposit:false,
        })
    }
    setDeposit()
    {
        this.setState({
            Loan:false,
            Deposit:true,
        })
    }
    render(){
        return(
            <div>
                <h2>Welcome to AXIS Services</h2>
                <span onClick={this.setLoan}>LOAN</span>&nbsp;&nbsp;
                <span onClick={this.setDeposit}>DEPOSIT</span>
                
                <RcIf if={this.state.Loan && !this.state.Deposit}>
                <Loan></Loan>
                </RcIf>
                <RcIf if={this.state.Deposit && !this.state.Loan}>
                <Deposit></Deposit>
                </RcIf>
              
                
            </div>
        );
        
    }
}
export default Services;