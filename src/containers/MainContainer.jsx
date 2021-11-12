import { Typography, Container, Grid, Avatar, Box, Card, Button } from '@mui/material';
import Typical from 'react-typical';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const useStyles = makeStyles({
	rock        : {
		height                    : '90vh',
		width                     : '90vw',
		margin                    : '0  0 0 -5vw',
		backgroundColor           : '#F7F9FC',
		'@media(max-width:780px)' : {
			margin : '0  -3vw 0 17.5vw',
			width  : '80vw'
		}
	},
	auto        : {
		marginTop                 : '14vh',
		'@media(max-width:780px)' : {
			marginTop : '12vh'
		}
	},
	h2          : {
		fontSize                  : '4em',
		'@media(max-width:786px)' : {
			fontSize : '1em'
		}
	},
	webe        : {
		color    : 'rgb(100, 110, 115)',
		fontSize : '1.5em'
	},
	purchase    : {
		lineHeight      : 2,
		backgroundColor : '#4A148C',
		color           : '#ffffff',
		margin:' 2% 5%'
	},
	buttonCont  : {
		marginLeft : '50%'
	},
	buttonCont2  : {
		marginLeft : '30%'
	},
	second      : {
		height                    : '50vh',
		marginTop                 : '5vh',
		justifyContent            : 'center',
		alignItems                : 'center',
		margin                    : 'auto',
		textAlign                 : 'center',
		'@media(max-width:786px)' : {
			marginTop : '10vh'
		}
	},
	avatar      : {
		margin : 'auto'
	},
	featurecont : {
		height                    : '50vh',
		marginTop                 : '10vh',
		textAlign                 : 'center',
		'@media(max-width:786px)' : {
			marginTop : '60vh'
		}
	},
	pow         : {
		fontSize : '3.5em'
	},
	pic         : {
		width                     : '60%',
		margin                    : 'auto',
		'@media(max-width:786px)' : {
			marginTop : '50vh'
		}
	},
	demo        : {
		fontSize  : '1em',
		textAlign : 'center'
	},
	web         : {
		fontSize  : '3em',
		textAlign : 'center'
	},
	hai         : {
		textAlign : 'center',
		fontSize  : '1em'
	}
	// feature    : {
	// 	marginTop                 : '10vh',
	// 	'@media(max-width:786px)' : {
	// 		marginTop : '30vh'
	// 	}
	// }
});
const Maincontainer = () => {
	const classes = useStyles();

	const feature = [
		{
			title   : 'Themeable',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			),
			content : 'Customize any part of our components to match your design needs.'
		},
		{
			title   : 'Light and Dark UI',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			),
			content : 'Optimized for multiple color modes. Use light or dark, your choice.'
		},
		{
			title   : 'Composable',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
			),
			content : 'Designed with composition in mind. Compose new components with ease. '
		},
		{
			title   : 'Developer Experience  ',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
			content : 'Guaranteed to boost your productivity when building your app or website.  '
		},
		{
			title   : 'Continuous Updates',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
			),
			content : 'We continually deploy improvements and new updates to Webbee.  '
		},
		{
			title   : 'Free support ',
			image   : (
				<svg
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			),
			content : '6 months of free technical support to help you build your website faster.'
		}
	];
	const Pages = [
		{
			title       : 'About',
			description : 'About Page',
			button      : 'View demo',
			Link        : '/about'
		},
		{
			title       : 'Services',
			description : 'Services Page',
			button      : 'View demo',
			Link        : '/service'
		},
		{
			title       : 'Contact',
			description : 'Contact Page',
			button      : 'View demo',
			Link        : '/contact'
		},
		{
			title       : 'Pricing',
			description : 'Pricing Page',
			button      : 'View demo',
			Link        : '/pricing'
		},
		{
			title       : 'Customers',
			description : 'Customer page',
			button      : 'View demo',
			Link        : '/customer'
		},
		{
			title       : 'Hire Us',
			description : 'Hire US page',
			button      : 'View demo',
			Link        : '/hire'
		}
	];
	return (
		<Container fixed sx={{ marginTop: '5vh' }}>
			<Grid container spacing={2} className={classes.rock}>
				<Grid item xs={12} md={6} className={classes.auto}>
					<h2 className={classes.h2}>
						Turn your ideas into a {''}
						<span
							style={{
								color : '#4A148C'
							}}>
							<Typical
								loop={Infinity}
								wrapper="b"
								steps={[
									'Success',
									2000,
									'Future',
									2000,
									'StartUp',
									2000
								]}
							/>
						</span>
					</h2>
					<p className={classes.webe}>
						Webbee will make your product look modern and professional while saving you precious time.
					</p>
					<div className={classes.buttonCont}>
						<button className={classes.purchase}>Purchase Now</button>
						<button className={classes.purchase}>View Documentation</button>
					</div>{' '}
				</Grid>
				<Grid item xs={12} md={6}>
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 329 273">
						<path
							fill="#E6E6E6"
							d="M53.482 271.494s-32.794 2.293-46.274-3.238c-13.479-5.532-3.806-21.417 9.328-24.878 13.134-3.461 21.082 15.55 26.948-2.03 5.867-17.58 21.194-26.339 30.988-14.383 9.795 11.957 19.813 15.763 30.176 5.075 10.364-10.687 19.915-1.958 24.117 13.703 4.202 15.661 52.932-14.393 71.598-8.526 18.666 5.867 32.825 23.152 44.223 4.496 11.399-18.655 24.878-23.497 32.48-12.443 7.603 11.053 10.019 24.187 23.498 14.21 13.479-9.978 31.789-1.015 26.603 10.708-5.187 11.723-39.92 15.712-39.92 15.712s-201.66-10.028-233.765 1.594z"
							opacity="0.42"
						/>
						<path
							fill="#E6E6E6"
							d="M151.806 212.065s7.268 24.289-6.902 31.465c-14.169 7.176-22.715-3.999-37.494 5.846-14.778 9.846-6.993-24.36-29.536-22.807-22.543 1.553-14.088 19.397-14.088 19.397s-19.428-18.94-29.496-2.436c-10.07 16.504-5.207 32.013 40.183 27.344 45.391-4.669 78.693 1.685 118.014.843 39.322-.843 111.65 6.932 115.507-14.83 3.857-21.761-16.331-31.414-37.321-19.214-20.99 12.201-17.478-15.915-41.777-3.045-24.3 12.871-53.044 27.69-60.393-29.232l-16.697 6.669z"
						/>
						<path
							fill="#E6E6E6"
							d="M105.776 5.249c-52.029 11.46-86.701 61.671-77.09 114.076 4.579 25.009 19.286 49.826 56.242 61.417 88.691 27.811 188.658 13.936 206.279-40.803 17.62-54.739 6.221-89.99-36.794-117.456C226.622 4.741 160.129-6.728 105.776 5.25z"
							opacity="0.3"
						/>
						<path
							fill="#E6E6E6"
							d="M319.808 92.213a7.885 7.885 0 00-2.31-5.573 7.88 7.88 0 00-5.576-2.303c-.426 0-.85.038-1.269.111a10.59 10.59 0 00-9.358-5.603h-.386a12.604 12.604 0 00-6.684-14.42 12.608 12.608 0 00-17.875 8.739 12.619 12.619 0 00.118 5.681h-.386a10.627 10.627 0 000 21.254h36.865v-.081a7.878 7.878 0 006.861-7.805zM63.227 142.943a8.02 8.02 0 00-8.018-8.008 7.615 7.615 0 00-1.28.111 10.804 10.804 0 00-9.52-5.694h-.396c.261-1.015.394-2.058.396-3.106a12.831 12.831 0 00-21.768-8.838 12.83 12.83 0 00-3.881 8.838c.006 1.048.14 2.09.396 3.106h-.396a10.809 10.809 0 000 21.609h37.494v-.071a8.015 8.015 0 006.973-7.947z"
						/>
						<path
							fill="#FFD200"
							d="M92.357 67.793c8.885 0 16.088-7.203 16.088-16.088 0-8.885-7.203-16.088-16.088-16.088-8.885 0-16.088 7.203-16.088 16.088 0 8.885 7.203 16.088 16.088 16.088z"
						/>
						<path
							fill="#FFD200"
							d="M92.358 77.76c14.39 0 26.055-11.665 26.055-26.055S106.748 25.65 92.358 25.65 66.303 37.316 66.303 51.705c0 14.39 11.665 26.055 26.055 26.055z"
							opacity="0.22"
						/>
						<path
							fill="#FFD200"
							d="M133.272 68.564l-.923 2.264a30.426 30.426 0 00-2.294 11.59v110.27h11.54V82.418c0-3.976-.78-7.914-2.294-11.59l-.923-2.264a2.753 2.753 0 00-4.094-1.254 2.753 2.753 0 00-1.012 1.254z"
						/>
						<path
							fill="#1976d2"
							d="M167.183 18.82l-.112-.112a3.407 3.407 0 00-3.723-.742 3.407 3.407 0 00-1.108.742l-.112.112a51.075 51.075 0 00-14.626 35.464V196.22a3.108 3.108 0 003.228 2.964h27.851a3.108 3.108 0 003.228-2.964V54.284a51.075 51.075 0 00-14.626-35.464z"
						/>
						<path fill="#000" d="M168.837 86.287l12.972 6.1v56.241l-23.426-31.17 10.454-31.17z" opacity="0.08" />
						<path
							fill="#68E1FD"
							d="M166.352 83.16l-.071-.08a2.174 2.174 0 00-3.248 0l-.071.08a39.087 39.087 0 00-9.815 25.903v103.672a2.154 2.154 0 001.332 2.007c.263.109.545.165.829.165h18.687a2.17 2.17 0 002.172-2.172V109.063a39.087 39.087 0 00-9.815-25.903z"
						/>
						<path
							fill="#fff"
							d="M166.352 83.16l-.071-.08a2.174 2.174 0 00-3.248 0l-.071.08a39.087 39.087 0 00-9.815 25.903v103.672a2.154 2.154 0 001.332 2.007c.263.109.545.165.829.165h18.687a2.17 2.17 0 002.172-2.172V109.063a39.087 39.087 0 00-9.815-25.903z"
							opacity="0.32"
						/>
						<path
							fill="#FFD200"
							d="M196.039 68.564l.924 2.264a30.458 30.458 0 012.283 11.591v110.27h-11.51V82.419a30.639 30.639 0 012.284-11.591l.934-2.264a2.75 2.75 0 015.085 0z"
						/>
						<path fill="#245B5B" d="M181.809 110.098h5.927V92.386h-5.927v17.712z" />
						<path fill="#000" d="M187.748 116.168h11.51V86.286h-11.51v29.882z" opacity="0.08" />
						<path
							fill="#245B5B"
							d="M153.147 120.381l-7.593 37.271a42.559 42.559 0 01-11.875 21.934l-13.987 13.743a11.846 11.846 0 00-3.045 5.075l-1.441 4.882a4.853 4.853 0 004.192 6.202l33.769 3.248-.02-92.355zM176.165 120.381l7.582 37.271a42.627 42.627 0 0011.886 21.934l13.966 13.692a11.846 11.846 0 013.045 5.075l1.452 4.923a4.848 4.848 0 01-.634 4.089 4.864 4.864 0 01-3.558 2.113l-33.769 3.248.03-92.345zM147.502 92.387h-5.928v17.711h5.928V92.387z"
						/>
						<path fill="#000" d="M141.565 86.287h-11.51v29.882h11.51V86.287z" opacity="0.08" />
						<path
							fill="#245B5B"
							d="M160.037 189.441l-6.476 8.993a19.746 19.746 0 00-3.735 11.571v13.317h29.658v-13.286a19.807 19.807 0 00-3.735-11.571l-6.475-8.993a5.686 5.686 0 00-9.237-.031zM170.41 100.232h-12.017v4.872h12.017v-4.872z"
						/>
						<path
							fill="#fff"
							d="M164.657 38.916h-.011a7.632 7.632 0 00-7.632 7.633v21.04a7.632 7.632 0 007.632 7.634h.011a7.632 7.632 0 007.632-7.633V46.549a7.632 7.632 0 00-7.632-7.633z"
							opacity="0.34"
						/>
					</svg>
				</Grid>
			</Grid>
			<Grid container spacing={3} className={classes.second}>
				<Grid item xs={12} md={4}>
					<Avatar sx={{ bgcolor: deepOrange[500] }} className={classes.avatar}>
						<svg
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
							/>
						</svg>
					</Avatar>
					<h2>Built for developers</h2>
					<Typography>
						Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.
					</Typography>{' '}
				</Grid>
				<Grid item xs={12} md={4}>
					<Avatar sx={{ bgcolor: deepOrange[500] }} className={classes.avatar}>
						<svg
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							/>
						</svg>{' '}
					</Avatar>
					<h2>Designed to be modern</h2>
					<Typography>
						Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.
					</Typography>{' '}
				</Grid>
				<Grid item xs={12} md={4}>
					<Avatar sx={{ bgcolor: deepOrange[500] }} className={classes.avatar}>
						<svg
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</Avatar>
					<h2>Documentation for everything</h2>
					<Typography>
						We've written extensive documentation for components and tools, so you never have to reverse engineer
						anything.
					</Typography>{' '}
				</Grid>
			</Grid>
			<Grid item xs={12} md={12} className={classes.featurecont}>
				<Typography className={classes.feature}> FEATURES</Typography>

				<h2 className={classes.pow}>The powerful and flexible theme for all kinds of businesses</h2>
				<Typography className={classes.featurepara}>
					{' '}
					Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components. An
					experience you'd expect from a design system.
				</Typography>
				<Button className={classes.purchase}>
					Purchase Now
					<svg
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</Button>
			</Grid>
			<Grid item xs={12} md={12} className={classes.pic}>
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 164 101">
					<path
						fill="#E6E6E6"
						d="M82 100.115c45.053 0 81.576-2.572 81.576-5.745s-36.523-5.745-81.575-5.745C36.948 88.625.426 91.197.426 94.37s36.522 5.745 81.575 5.745z"
						opacity="0.45"
					/>
					<path
						fill="#CCC"
						d="M135.64 9.854l-8.97 36-13.225-3.295a2.866 2.866 0 01-.075-3.44 5.305 5.305 0 002.585-3.345A5.71 5.71 0 00104.885 33a5.34 5.34 0 00.71 4.17 2.856 2.856 0 01-1.68 3l-13.22-3.3L94.03 23.5a2.885 2.885 0 00-2.915-1.5 5.316 5.316 0 01-4.17.715 5.71 5.71 0 012.76-11.07 5.315 5.315 0 013.345 2.585 2.874 2.874 0 003.28.045L99.665.904l35.975 8.95z"
					/>
					<path
						fill="#FFD200"
						d="M139.464 12.47s-5.19 7.06.075 9.206c5.265 2.145 5.715-5.675 5.715-5.675l-2.375-5.245-3.415 1.715z"
					/>
					<path
						fill="#7b1fa2"
						d="M141.285 17.54l6.65.214s19.96 5.14 8.775 28.245c-1.775 3.66-1.625 7.965-1.725 12l-.025 1.05h-17.54l-.92-3.775a31.136 31.136 0 00-5.615-11.525c-3.385-4.45-5.785-13.285 10.4-26.21z"
					/>
					<path
						fill="#F4A28C"
						d="M138.131 7.724c.057 1.476.313 2.938.76 4.345a1.332 1.332 0 001.735.755 2.959 2.959 0 002-2.5l.5-2.4a2.391 2.391 0 00-1.355-2.4c-1.61-.87-3.77.585-3.64 2.2z"
					/>
					<path fill="#F4A28C" d="M143.046 8.375l2.42 8.36-4.7 1.005.125-6.49 2.155-2.875z" />
					<path
						fill="#CE8172"
						d="M140.805 12.67a3.176 3.176 0 001.425-1.11s.13 1.585-1.41 3.36l-.015-2.25z"
						opacity="0.31"
					/>
					<path
						fill="#FFD200"
						d="M137.501 3.83a2.547 2.547 0 00-.318 3.387c.248.334.573.603.948.783.618.31 1.278.529 1.96.65 2.855.55 1.445 13.125 7.465 11.355 6.02-1.77 4.085-4.38 1.355-6.72s-3.875-6.7-4.91-8.895c-.77-1.595-4.655-2.17-6.5-.56z"
					/>
					<path fill="#F4A28C" d="M152.68 64.846l.835 27.525-1.775.54-5.99-25.95 6.93-2.115z" />
					<path
						fill="#7b1fa2"
						d="M153.466 91.965s1.1 1.26 2.415 1.135 1.605 1.73-.53 1.64a12.128 12.128 0 01-1.975-.24 3.44 3.44 0 00-1.795.15.576.576 0 01-.615-.215c-.64-.68.765-2.385.765-2.385l1.735-.085z"
					/>
					<path fill="#F4A28C" d="M138.855 64.885l-6.345 26.8 1.625.885 11.08-24.22-6.36-3.465z" />
					<path
						fill="#7b1fa2"
						d="M132.641 91.3s-1.33 1-2.595.62c-1.265-.38-1.92 1.376.19 1.716.661.11 1.33.164 2 .16a3.503 3.503 0 011.725.5.577.577 0 00.645-.085c.765-.54-.27-2.5-.27-2.5l-1.695-.41z"
					/>
					<path
						fill="#000"
						d="M147.385 26.664s-2.33 9.16 1.46 15.395c3.79 6.235-3.095 15.12-3.095 15.12l9.28-.325s.565-8.53 2.72-15.845c2.155-7.315-10.365-14.345-10.365-14.345z"
						opacity="0.08"
					/>
					<path fill="#245B5B" d="M137.039 57.486l17.99-.63 3.24 29.914h-12.805l-.21-22.34-8.215-6.945z" />
					<path fill="#245B5B" d="M137.039 57.484l-8.625 28.34 12.22.945 7.02-25.605-10.615-3.68z" />
					<path
						fill="#F4A28C"
						d="M149.776 18.825a5.165 5.165 0 015.94 5.845c-.5 3.785-2.31 9.36-7.695 15.45-9.8 11.07-33.305 4.93-33.305 4.93s-4.78.62-5.415-1.94c-.635-2.56 5.7-1.24 5.7-1.24s11.5 2.435 20-5.255c6.885-6.245 7.81-16.615 14.775-17.79z"
					/>
					<path
						fill="#E6E6E6"
						d="M106.234 56a2.872 2.872 0 01-.905-3.314 5.307 5.307 0 001.7-3.875 5.712 5.712 0 00-5.705-5.471 5.71 5.71 0 00-5.705 5.47 5.32 5.32 0 001.7 3.876 2.856 2.856 0 01-.9 3.315H82.79v13.63a2.85 2.85 0 003.315.905 5.34 5.34 0 013.875-1.7 5.71 5.71 0 010 11.41 5.32 5.32 0 01-3.875-1.7 2.875 2.875 0 00-3.315.905v13.63h37.075V56h-13.63z"
					/>
					<path
						fill="#CCC"
						d="M95.42 74.55a5.575 5.575 0 01-5.42 5.7 5.319 5.319 0 01-3.874-1.7 2.875 2.875 0 00-3.315.905v13.63h-37.1V56h13.715a2.885 2.885 0 01.82 3.25 5.3 5.3 0 00-1.7 3.87 5.71 5.71 0 0011.41 0 5.3 5.3 0 00-1.7-3.87 2.865 2.865 0 01.82-3.25H82.79v13.63a2.85 2.85 0 003.315.905 5.34 5.34 0 013.875-1.7 5.58 5.58 0 015.44 5.715z"
					/>
					<path
						fill="#7b1fa2"
						d="M37.6 90.75s1.5 1.5 3.15.79 2.835.69 1.63 1.87c-1.205 1.18-5.78 1.235-5.78 1.235l-1.34-3.1 2.34-.795zM12.115 90.06s-.745 2.04.5 3.37.46 3.03-1.035 2.294c-1.495-.735-3.26-5.175-3.26-5.175l2.22-2.475 1.575 1.985z"
					/>
					<path
						fill="#245B5B"
						d="M8.056 51.72s-1.6 6.66 1.18 9.936c2.78 3.275 7.04 18.79 0 26.55L12 90.966s12.19-6.55 8.715-30.17l8.7-9.075H8.056z"
					/>
					<path fill="#245B5B" d="M29.434 51.72l8.94 39.246-4.47.69s-8.94-26.895-14.84-32.415l10.37-7.52z" />
					<path fill="#68E1FD" d="M31.5 17.215s9.32 3.975 7.894 18.53l-9.105-.78 1.21-17.75z" />
					<path fill="#fff" d="M31.5 17.215s9.32 3.975 7.894 18.53l-9.105-.78 1.21-17.75z" opacity="0.36" />
					<path fill="#F4A28C" d="M21.814 4.75l-2.58 9.105 5.12 1.065-.175-7.055-2.365-3.115z" />
					<path
						fill="#CE8172"
						d="M24.284 9.41a3.465 3.465 0 01-1.565-1.2s-.13 1.726 1.56 3.65l.005-2.45z"
						opacity="0.31"
					/>
					<path
						fill="#7b1fa2"
						d="M19.235 13.855l3.035.645s13.9 1.5 14.465 9.34c.565 7.84-7.29 27.89-7.29 27.89H8.385S-8.5 11.785 19.235 13.855z"
					/>
					<path
						fill="#E6E6E6"
						d="M47.63 30.036a5.575 5.575 0 006.296 4.74 5.315 5.315 0 003.545-2.305 2.875 2.875 0 013.275.23L63 46.296 49.446 48.5a2.88 2.88 0 00-.285 3.34 5.316 5.316 0 012.31 3.545 5.71 5.71 0 01-11.26 1.85 5.316 5.316 0 011.05-4.1 2.88 2.88 0 00-1.335-3.07L26.39 52.29l-6-36.58 36.59-6 2.235 13.605a2.885 2.885 0 01-3.03 1.255 5.316 5.316 0 00-4.1-1.05 5.577 5.577 0 00-4.455 6.515z"
					/>
					<path
						fill="#F4A28C"
						d="M27.12 5s-.256 2.874-1.07 4.674a1.448 1.448 0 01-1.926.72 3.2 3.2 0 01-2.045-2.81l-.41-2.635a2.59 2.59 0 011.61-2.53c1.81-.855 4.085.85 3.84 2.58z"
					/>
					<path
						fill="#000"
						d="M13 17.5s7.205 4.185 5.53 13.65c-1.675 9.465-4.45 12.72 1.5 11.4 5.95-1.32 8.385-4.305 8.385-4.305s4.275 3.5 0 6.135-10.075 2.64-11 7.325h-9.03s-.73-2.05-1.7-4.635S13 17.5 13 17.5z"
						opacity="0.09"
					/>
					<path
						fill="#FFD200"
						d="M26.395 5a11.42 11.42 0 01-2.59-.666 2.405 2.405 0 01-.46 2.6 1.96 1.96 0 01-2.47.36l.695-3.65A2.946 2.946 0 0123.5 1.33c.433-.154.876-.281 1.325-.38 1.145-.24 2.765.22 3.4 1.24a2 2 0 01-.63 2.72c-.382.15-.8.181-1.2.09z"
					/>
					<path
						fill="#F4A28C"
						d="M23.665 6.91S23.84 5.815 23 5.75c-.84-.065-1.1 1.5 0 1.87l.665-.71zM1.9 34.246s-1.185 12.16 4.785 12.84c4.5.5 11.735-2.035 16.15-3.29 1.91-.545 2.835-.8 4.305-2.14 1.76-1.61 4.2-2.755 2.3-4.28-3.37-2.715-5.76 1.93-5.76 1.93a37.505 37.505 0 01-8.645 1.44 3.53 3.53 0 01-3.5-4.44l1.115-4.19S4.74 24.7 1.9 34.246zM26.866 6.82l.6 1.235a.465.465 0 01-.415.665h-1.125l.94-1.9z"
					/>
					<path
						fill="#68E1FD"
						d="M8.105 16.56C5 18.947.335 24.21.425 34.15l12.755.816S16.865 24.05 13 17.5a3.325 3.325 0 00-4.895-.94z"
					/>
					<path
						fill="#7b1fa2"
						d="M8.105 16.56C5 18.947.335 24.21.425 34.15l12.755.816S16.865 24.05 13 17.5a3.325 3.325 0 00-4.895-.94z"
						opacity="0.36"
					/>
					<path
						fill="#F4A28C"
						d="M48.605 30.5a2.87 2.87 0 00-.715 1.75c-.044.344.021.694.185 1a1.5 1.5 0 00.445.44c.695.5 1.765.555 2.32-.085.291-.396.438-.88.415-1.37 0-.57.065-1.705-.395-2.15-.615-.585-1.775-.115-2.255.415z"
					/>
				</svg>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{
					margin    : 'auto',
					textAlign : 'center'
				}}>
				{feature.map((a) => (
					<Grid item xs={12} md={4}>
						<Card>
							<Avatar
								style={{
									margin : 'auto'
								}}>
								{a.image}
							</Avatar>
							<h2>{a.title}</h2>
							<Typography>{a.content}</Typography>
						</Card>
					</Grid>
				))}
			</Grid>
			<Grid>
				<Typography className={classes.demo}> DEMO PAGES</Typography>
				<h2 className={classes.web}>Webbee in action</h2>
				<Typography className={classes.hai}>
					All examples you find below are included in the download package.
				</Typography>
				<div className={classes.buttonCont2}>
					<Button className={classes.purchase}>
						Purchase Now{' '}
						<svg
							width="16"
							height="16"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Button>
					<Button className={classes.purchase}>View Documentations</Button>
				</div>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12} md={12}>
					<h1>Supporting Pages</h1>
				</Grid>
				{Pages.map((page) => (
					<Grid item xs={12} md={4}>
						<Card
							style={{
								border      : '1px',
								borderColor : 'rgba(0, 0, 0, 0.12)',
								borderStyle : 'solid'
							}}>
							<h2>{page.title}</h2>
							<Typography>{page.description}</Typography>
							<Router>
								<Link to={page.Link}>{page.button}</Link>
							</Router>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Maincontainer;
