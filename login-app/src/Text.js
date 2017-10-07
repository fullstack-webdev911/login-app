import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div style={{marginTop:'50px'}} >
    <p style={{width:'65%',color:'gray'}} >Username</p>
    <TextField
      id="text-field-default"
      defaultValue=""
    /><br />
     <p style={{width:'65%',color:'gray',marginBottom:'0px'}} >Password</p>
    <TextField
      type="password"
    /><br />
  </div>
);

export default TextFieldExampleSimple;