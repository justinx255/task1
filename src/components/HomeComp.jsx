import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MainContainer from '../containers/MainContainer';
import Pricingcontainer from '../containers/PricingContainer';
import Aboutcontainer from '../containers/AboutContainer';
import Servicecontainer from '../containers/ServiceContainer';
import Contactcontainer from '../containers/ContactContainer';
import Hirecontainer from '../containers/HireContainer';
import { BrowserRouter as Router, Switch, Route, Link,useHistory } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	flexGrow   : 1,
	padding    : theme.spacing(3),
	transition : theme.transitions.create('margin', {
		easing   : theme.transitions.easing.sharp,
		duration : theme.transitions.duration.leavingScreen
	}),
	marginLeft : `-${drawerWidth}px`,
	...(open && {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	})
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp : (prop) => prop !== 'open'
})(({ theme, open }) => ({
	transition : theme.transitions.create(
		[
			'margin',
			'width'
		],
		{
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}
	),
	...(open && {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : `${drawerWidth}px`,
		transition : theme.transitions.create(
			[
				'margin',
				'width'
			],
			{
				easing   : theme.transitions.easing.easeOut,
				duration : theme.transitions.duration.enteringScreen
			}
		)
	})
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display        : 'flex',
	alignItems     : 'center',
	padding        : theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent : 'flex-end'
}));
const Pages = [
	{
		name : 'Home',
		to   : '/'
	},
	{
		name : 'Contact',
		to   : '/contact'
	},
	{
		name : 'About',
		to   : '/about'
	},
	{
		name : 'Hire',
		to   : '/hire'
	},
	{
		name : 'Pricing',
		to   : '/pricing'
	},
	{
		name : 'Service',
		to   : '/service'
	}
];

export default function Appbar() {
	let history = useHistory();

	const theme = useTheme();
	const [
		open,
		setOpen
	] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}>
						<MenuIcon />
						<svg
							style={{ marginLeft: '20px' }}
							xmlns="http://www.w3.org/2000/svg"
							width="10%"
							height="10%"
							fill="none"
							viewBox="0 0 95 71">
							<rect
								width="16.811"
								height="68.926"
								x="0.664"
								y="7.769"
								fill="#c2185b"
								stroke="#c2185b"
								rx="8.406"
								transform="rotate(-25 .664 7.77)"
							/>
							<rect
								width="16.811"
								height="68.926"
								x="28.665"
								y="7.769"
								fill="#c2185b"
								stroke="#c2185b"
								rx="8.406"
								transform="rotate(-25 28.665 7.77)"
							/>
							<rect
								width="16.811"
								height="16.81"
								x="78.769"
								y="0.664"
								fill="#c2185b"
								stroke="#c2185b"
								rx="8.405"
								transform="rotate(25 78.77 .664)"
							/>
						</svg>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width                : drawerWidth,
					flexShrink           : 0,
					'& .MuiDrawer-paper' : {
						width     : drawerWidth,
						boxSizing : 'border-box'
					}
				}}
				variant="persistent"
				anchor="left"
				open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{
							theme.direction === 'ltr' ? <ChevronLeftIcon /> :
							<ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Router>
					<List>
						{Pages.map((i) => (
							<ListItem
								button
								onClick={() => {
									history.push(i.to);
								}}>
								{i.name}
							</ListItem>
						))}
					</List>
				</Router>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<MainContainer />
			</Main>
		</Box>
	);
}
