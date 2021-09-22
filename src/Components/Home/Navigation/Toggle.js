import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import style from './vi.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomizedMenus from './menu';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
class Toggle extends React.Component {
   render() {
      return <div>
         <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {this.props.hidden ? null : <div className="toggle-base">{this.props.children}</div>}
         </ReactCSSTransitionGroup>
      </div>
   }
}

export default class Test extends React.Component {
   constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.state = { hidden: true, show: true };
   }

   onClick() {
      this.setState((prevState, props) => ({
         hidden: !(prevState.hidden),
         show: !(prevState.show)
      }));
   }
   render() {
      return <div className="navbar">
         <div className="navbar_inner">
            <Toggle hidden={this.state.hidden}>
               <Input placeholder="Enter to search" disableUnderline="false" className="searchInput_Style" />
            </Toggle>
            <Toggle hidden={!this.state.show}>
               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <CustomizedMenus name="Home" />
                  <CustomizedMenus name="Us Model" />
                  <CustomizedMenus name="Our World" />
                  <CustomizedMenus name="Be creative" />
                  <IconButton
                     size="large"
                     aria-label="show 17 new notifications"
                     color="inherit"
                  >
                     <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls='primary-search-account-menu'
                     aria-haspopup="true"
                     color="inherit"
                  >
                     <AccountCircleIcon />
                  </IconButton>
               </Box>
            </Toggle>
         </div>
         <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls='primary-search-account-menu'
            aria-haspopup="true"
            color="inherit"
            onClick={this.onClick}
         >
            {this.state.hidden === true ?
               (<SearchIcon />) : (<CloseIcon />)}
         </IconButton>
      </div>;
   }
}

