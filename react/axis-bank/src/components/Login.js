import React from 'react';
import Registration from './Registration';

class Login extends React.Component{
    render(){
        return(
            <div className="App">
                <form>
                    <h4 >login HERE</h4>
                    Name:<input type="text"/><br/>
                    password:<input type="password"/><br/>
                    <button>signIn</button>
                </form>
                <br/><br/>
                NOT A USER? REGISTER HERE
                <Registration></Registration>
                
            </div>
        )
    }
}
export default Login;
