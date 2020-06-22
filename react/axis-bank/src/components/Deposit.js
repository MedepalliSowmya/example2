import React from 'react';
import FixDeposit from './FixDeposit';
import RecDeposit from './RecDeposit';
import RcIf from 'rc-if';

class Deposit extends React.Component{
    constructor(){
        super();
        this.state={
            fixDep:"",
            recDep:"",
        }
        this.setFixdep=this.setFixdep.bind(this);
        this.setRecdep=this.setRecdep.bind(this);

    }
    setFixdep()
    {
        this.setState({
            fixDep:true,
            recDep:false,
        })
    }
    setRecdep()
    {
        this.setState({
            fixDep:false,
            recDep:true,
        })
    }

    render(){
        return(
            <div>
                <h3>select option to Deposit</h3>
                <label><input type="radio" name="option"onChange={this.setFixdep} />Fixed Deposit</label>
                <label><input type="radio" name="option"onChange={this.setRecdep} />Recurring Deposit</label>
                <RcIf if={this.state.fixDep &&  !this.state.recDep}>
                    <FixDeposit></FixDeposit>
                </RcIf>
                <RcIf if={this.state.recDep &&  !this.state.fixDep}>
                    <RecDeposit></RecDeposit>
                </RcIf>
               
            </div>
        )
    }
}
export default Deposit;