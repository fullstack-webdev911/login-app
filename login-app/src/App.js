import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Text from './Text'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Paper style={{height:'450px',width:'500px',textAlign:'center',display:'inline-block',marginLeft:'700px',marginTop:'150px'}} zDepth={5} >
            <h2 style={{marginTop:'50px',color:'gray'}} >LOGIN</h2>
              <Text />
              <input 
                type="submit" 
                value="LOGIN" 
                style={{width:'52%',
                        backgroundColor:'#4CAF50',
                        color:'white',
                        padding:'14px 20px',
                        margin:'15px 0',
                        border:'none',
                        borderRadius:'4px',
                        cursor:'pointer'}} />
              <div class="TopNavigation">
                <ul>
                  <li style={{listStyle:'none',font:'15px Georgia',display:'inline',float:'left',marginLeft:'80px'}} ><a href="#" style={{textDecoration:'none',color:'#6e6e6e'}} >Forgot Password</a></li>
                  <li style={{listStyle:'none',font:'15px Georgia',display:'inline',float:'left',marginLeft:'100px'}} ><a href="#" style={{textDecoration:'none',color:'#6e6e6e'}} >Signup</a></li>
                </ul>
              </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
