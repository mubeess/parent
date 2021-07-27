import { Typography } from '@material-ui/core';
import React,{useContext} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Logo from './logo.png'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppContext from '../../../Context/app/appContext'
import { green, orange,grey,yellow } from '@material-ui/core/colors';
import { makeStyles,  fade,
    ThemeProvider,
    withStyles,
    createMuiTheme, } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
const StyledNav=styled.div`
position: fixed;
height: 69px;
background-color: #FFFFFF;
width: 100%;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
top: 0;
z-index: 100;
display: flex;
flex-direction: row;
img{
    width: 100px;
    height: 60px;
}
`;
const theme = createMuiTheme({
    palette: {
      primary: orange,
    
    },
  });
 function Nav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const appProps=useContext(AppContext)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={theme}>
       <StyledNav>
        <img src={Logo} alt='logo'></img>
        <div style={{
            display:'flex',
            flexDirection:'column',
           padding:'10px',
            borderRight:'1px solid gray'
        }}>
        <Typography style={{
               color:'black'
             }} variant="button" align='center' gutterBottom>NOBLE INTELLECT</Typography>
               <Typography style={{
               color:'black'
             }} variant="button" align='center' gutterBottom>ACADEMY</Typography>
        </div>
        <Typography style={{
               color:'black',
               marginLeft:'auto',
               marginTop:'25px',
             }} variant="caption" align='center' gutterBottom>{`${JSON.parse(localStorage.getItem('user')).user.firstName+" "+JSON.parse(localStorage.getItem('user')).user.lastName}`}</Typography>
        <Avatar
    onClick={handleClick}
     aria-controls="simple-menu" aria-haspopup="true"  style={{
    marginTop:'20px',
    marginLeft:'20px',
    cursor:'pointer',
    marginRight:'50px'
}}>{JSON.parse(localStorage.getItem('user')).user.firstName.split('')[0]}</Avatar>
<Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{
          props.history.push('profile')
        }}>Profile</MenuItem>
        <MenuItem onClick={()=>{
       window.location='/'
        }}>Logout</MenuItem>
      </Menu>

        
       </StyledNav>
       </ThemeProvider>
    )
}
export default withRouter(Nav)