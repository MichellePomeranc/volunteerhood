import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  list: {
    textDecorationLine: 'none',
    color: 'black',
    width: '70vw',
    fontFamily: 'sans-serif',
    fontSize: '25px'
  }
});


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      left: false
    }
  }

    classes = useStyles();
    // const [state, setState] = React.useState({
    //   left: false,
    // });

    // console.log(props)

    toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      this.setState({ ...this.state, [side]: open });
    };

    sideList = side => (
      <div className={this.classes.list} role="presentation" onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar><Avatar alt="Remy Sharp" src="../public/logo512.png" /></ListItemAvatar>
          </ListItem>
          <Divider />
          <ListItem><Link className={this.classes.list} to="/profile">Profile</Link></ListItem>
          <Divider />
          <ListItem><Link className={this.classes.list} to="/feed">Feed</Link></ListItem>
          <Divider />
          {/* <ListItem><Link className={classes.list} to="/login">login</Link></ListItem> */}
          <ListItem>{!this.props.user.login ? <Link className={this.classes.list} to="/login">Log In</Link> : <Link className={this.classes.list} to="/">Log out</Link>}</ListItem>
          <Divider />
        </List>
      </div>
    )

    render() {
      return (
        <div>
          <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>{this.sideList('left')}</Drawer>
        </div>
      );
    }
  }

export default Menu