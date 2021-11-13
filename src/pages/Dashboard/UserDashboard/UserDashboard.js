import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './UserDashboard.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import Pay from '../Pay/Pay';
import DashBoardHome from '../DashboardHome/DashBoardHome';
import AddReview from '../AddReview/AddReview';
import UserOrder from '../UserOrder/UserOrder';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';

const drawerWidth = 200;

function UserDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, user, logout } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div style={{ color: '#2C394B' }}>
        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        <p>{user?.displayName}</p>
      </div>
      <Divider />

      {!admin ? (
        <div className='dashboard-nav'>
          <Link to='/home'>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </Link>
          <Link to={`${url}/myOrder`}>
            <Button variant='text'>My Order</Button>
          </Link>
          <Link to={`${url}/review`}>
            <Button variant='text'>Add Review</Button>
          </Link>
          <Link to={`${url}/payment`}>
            <Button variant='text'>Payment</Button>
          </Link>
          <Button
            onClick={logout}
            style={{
              backgroundColor: '#94c300',
              fontWeight: 'bold',
              marginLeft: '8px',
            }}
            variant='success'
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className='dashboard-nav'>
          <Link to='/home'>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </Link>
          <Link to={`${url}/manageAllOrders`}>
            <Button variant='text'>ManageAllOrders</Button>
          </Link>
          <Link to={`${url}/addProduct`}>
            <Button variant='text'>Add Product</Button>
          </Link>
          <Link to={`${url}/makeAdmin`}>
            <Button variant='text'>Make Admin</Button>
          </Link>

          <Link to={`${url}/manageProducts`}>
            <Button variant='text'>Manage Products</Button>
          </Link>
          <Button
            onClick={logout}
            style={{
              backgroundColor: '#94c300',
              fontWeight: 'bold',
              marginLeft: '8px',
            }}
            variant='success'
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: '#94c300',
          textTransform: 'uppercase',
        }}
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Sports Bike
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/*user component route route */}
        <Switch>
          <Route exact path={path}>
            <DashBoardHome></DashBoardHome>
          </Route>
          <Route path={`${path}/myOrder`}>
            <UserOrder></UserOrder>
          </Route>
          <Route path={`${path}/payment`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageAllOrders`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

UserDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDashboard;
