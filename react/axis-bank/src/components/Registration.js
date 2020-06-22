import React from 'react';
import axios from 'axios';

export default class Registration extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            password:'',
            cpassword:'',
            accountno:0
        }
        this.setName=this.setName.bind(this);
        this.setPassword=this.setPassword.bind(this);
        this.setCpassword=this.setCpassword.bind(this);
        this.setAccountno=this.setAccountno.bind(this);

    this.insertStud =this.insertStud.bind(this);
    }
    setName(event)
    {
        this.setState({
            name:event.target.value
        })
    }
        setPassword(event)
        {
            this.setState({
                password:event.target.value
            })
        }
        setCpassword(event)
            {
                this.setState({
                    cpassword:event.target.value
                })
            }
            setAccountno(event)
                {
                    this.setState({
                        accountno:parseInt(event.target.value)
                    })
                }
                
                insertStud(event)
                {
                    event.preventDefault();
                    axios.post('http://localhost:3001/students',this.state)
                    .then(response=>{
                        console.log("successfully inserted")

                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
                 render()
                    {
                        return(
                            <React.Fragment>
                                <h2>Enter accountno details :</h2>
                                <form onSubmit={this.insertStud }>
                                   Enter Username:  <input type="text" placeholder="Enter name" onChange={this.setName} /><br/>
                                   Enter Password: <input type="password" placeholder="password" onChange={this.setPassword} /><br/>
                                   Enter Cpassword:<input type="cpassword" placeholder="confirm password" onChange={this.setCpassword} /><br/>
                                   Enter AccountNo:<input type="number" placeholder="accountno" onChange={this.setAccountno} /><br/>
                                    <br/>
                                    <button type ="submit">SUBMIT </button>
                                    <button type="reset">RESET</button>
                                </form>
                            </React.Fragment>
                        )
                    }
                
    }
