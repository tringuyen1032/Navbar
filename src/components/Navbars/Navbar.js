import React from 'react'
import Header from '../Headers/Header'
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "../CustomButtons/Button.js";
import navbarsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import LineStyle from "@material-ui/icons/LineStyle";
import Layers from "@material-ui/icons/Layers";
import Icon from "@material-ui/core/Icon";
import style from './style.css'
import image from '../../assets/img/logo3.png'
import avatar from '../../assets/img/dg10.jpg'
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

class Navbar extends React.Component {
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
      const { classes } = this.props;
      return (
         <div >
            <Header
               color="transparent"
               changeColorOnScroll={{
                  height: 200,
               }}
               links={
                  <div className="navbar">
                     <div className="navbar_left">
                        <img id="logo_image" alt="" src={image} style={{paddingTop: '0.3rem'}}/>
                     </div>
                     <div className="navbar_right">
                        <div className="navbar_inside">
                           <Toggle hidden={this.state.hidden}>
                              <Input placeholder="Enter to search" disableUnderline="false" className="searchInput_Style" />
                           </Toggle>
                           <Toggle hidden={!this.state.show}>
                              <List className={classes.list + " " + classes.mlAuto}>
                                 <ListItem className={classes.listItem}>
                                    <Button
                                       href="#pablo"
                                       className={classes.navLink + " " + classes.navLinkActive}
                                       onClick={(e) => e.preventDefault()}
                                       color="transparent"
                                    >
                                       Home
                                    </Button>
                                 </ListItem>
                                 <ListItem className={classes.listItem}>
                                    <Button
                                       href="#pablo"
                                       className={classes.navLink + " " + classes.navLinkActive}
                                       onClick={(e) => e.preventDefault()}
                                       color="transparent"
                                    >
                                       Home
                                    </Button>
                                 </ListItem>
                                 <ListItem className={classes.listItem}>
                                    <Button
                                       href="#pablo"
                                       className={classes.navLink + " " + classes.navLinkActive}
                                       onClick={(e) => e.preventDefault()}
                                       color="transparent"
                                    >
                                       Home
                                    </Button>
                                 </ListItem>
                                 <ListItem className={classes.listItem}>
                                    <CustomDropdown
                                       left
                                       noLiPadding
                                       navDropdown
                                       dropdownHeader="Dropdown Header"
                                       buttonText="Be Creative"
                                       buttonProps={{
                                          className: classes.navLink,
                                          color: "transparent",
                                       }}
                                       dropdownList={[
                                          <Link to="/" className={classes.dropdownLink}>
                                             <LineStyle className={classes.dropdownIcons} /> Presentation Page
                                          </Link>,
                                          <Link to="/components" className={classes.dropdownLink}>
                                             <Layers className={classes.dropdownIcons} />
                                             All components
                                          </Link>,
                                          <a
                                             href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
                                             className={classes.dropdownLink}
                                          >
                                             <Icon className={classes.dropdownIcons}>content_paste</Icon>
                                             Documentation
                                          </a>,
                                       ]}
                                    />
                                 </ListItem>
                                 <ListItem className={classes.listItem}>
                                    <Button color="transparent" className={classes.navLink + " " + classes.navLinkActive}
                                    >
                                       <NotificationsIcon style={{
                                          color: "black",
                                       }} />
                                    </Button>
                                 </ListItem>

                              </List>
                           </Toggle>
                        </div>
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls='primary-search-account-menu'
                           aria-haspopup="true"
                           color="inherit"
                           onClick={this.onClick}
                           style={{height: '4rem'}}
                        >
                           {this.state.hidden === true ?
                              (<SearchIcon className={classes.navLink + " " + classes.navLinkActive} />)
                              :
                              (<CloseIcon className={classes.navLink + " " + classes.navLinkActive} />)}
                        </IconButton>
                        <CustomDropdown
                           left
                           navDropdown
                           dropdownHeader="Dropdown Header"
                           buttonText={
                              <img
                                 src={avatar}
                                 className={classes.img}
                                 alt="profile"
                              />
                           }
                           buttonProps={{
                              className: classes.navLink,
                              color: "transparent",
                           }}
                           dropdownList={[
                              <Link to="/" className={classes.dropdownLink}>
                                 <LineStyle className={classes.dropdownIcons} /> Presentation Page
                              </Link>,
                              <Link to="/components" className={classes.dropdownLink}>
                                 <Layers className={classes.dropdownIcons} />
                                 All components
                              </Link>,
                              <a
                                 href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
                                 className={classes.dropdownLink}
                              >
                                 <Icon className={classes.dropdownIcons}>content_paste</Icon>
                                 Documentation
                              </a>,
                           ]}
                        />
                     </div>
                  </div>
               }
            />
         </div>
      )
   }
}

export default withStyles(navbarsStyle, { withTheme: true })(Navbar)
