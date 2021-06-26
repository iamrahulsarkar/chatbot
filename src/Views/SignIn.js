import React from 'react';
import clsx from 'clsx';
import '../App.css';
import BG2 from '../assests/images/BG2.svg';
import fb from '../assests/images/FBicon.svg';
import g from '../assests/images/Gicon.svg';
import IN from '../assests/images/INicon.svg';
import apple from '../assests/images/APPLEicon.svg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: '50px',
                border:'1px black solid'
            },
          },
      display: 'flex',
      flexWrap: 'wrap',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 'calc(80.53*0.230rem)',
      marginBottom:'calc(1.84729*0.230rem)',
      borderRadius: '50px'
    },
    icon:{
        '& .MuiIconButton-label': {
            '& .MuiSvgIcon-root': {
                fill:'#FF0100'
            },
          },
    }
  }));

function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
      emailId:'',
      password: '',
     showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
        <div className="landBG">
            <img src={BG2} style={{width:"100vw"}}/>
        </div>
        <div className="landOPAC"/>
        <div className="landContentBox">
            <div className="signUpIn">
                Sign In
            </div>
            <div className="signUpInBox">
                <div className="whiteBoxContent">
                    <div className="socialEntry">
                        <div className="socialBox g1">
                            <img className="icon" src={fb}/>
                        </div>
                        <div className="socialBox g2">
                            <img className="icon" src={g}/>
                        </div>
                        <div className="socialBox g3">
                            <img className="icon" src={IN}/>
                        </div>
                        <div className="socialBox g4">
                            <img className="icon" src={apple}/>
                        </div>
                    </div>
                </div>
                <div className="signEmail">
                    <p>or sign in with email</p>
                </div>
                <div style={{marginBottom:'3.6845vmax'}}>
                    <TextField id="outlined-basic" 
                        className={clsx(classes.margin, classes.textField, classes.root)}
                        label="EmailId" 
                        variant="outlined" 
                        type="text" 
                        value={values.emailId}
                        onChange={handleChange('emailId')}
                    />
                    <FormControl className={clsx(classes.margin, classes.textField, classes.root)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            className={clsx(classes.icon)}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    </FormControl>
                </div>
                <button className="signUpInButton" onClick={() => { history.push("/chat"); }}>Log In</button>
                <div className="loginRedirect">
                        <p>New to Novigi? <span className="login" onClick={() => { history.push("/sign/up"); }}>Sign Up</span></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
