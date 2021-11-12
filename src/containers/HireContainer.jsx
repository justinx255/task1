import {
	Grid,
	Typography,
	TextField,
	MenuItem,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Box
} from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	send     : {
		backgroundColor            : '#7b1fa2',
		color                      : '#fff',

		margin                     : '2vh 30vw',
		'@media(max-width: 780px)' : {
			margin : '4vh 5vw'
		}
	},
	root     : {
		maxWidth                   : '80vw',
		margin                     : '0 7vw',
		backgroundColor            : '#ffffff',
		'@media(max-width: 780px)' : {
			fontSize : '1em'
		}
	},
	h4       : {
		textAlign                 : 'center',
		color                     : 'rgb(100, 110, 115)',
		fontWeight                : '500',
		fontSize                  : ' 1.5em',
		'@media(max-width:780px)' : {
			fontSize  : '1em',
			textAlign : 'center'
		}
	},
	h1       : {
		textAlign                 : 'center',
		fontWeight                : 'bolder',
		fontSize                  : ' 3em',
		'@media(max-width:780px)' : {
			fontSize : '1em'
		}
	},
	top      : {
		backgroundColor           : ' #f9fbfd',
		height                    : '50vh',
		'@media(max-width:780px)' : {
			height : '30vh'
		}
	},
	form     : {
		maxWidth                  : '70vw',
		margin                    : ' 0 10vw',
		'@media(max-width:780px)' : {
			maxWidth : '60vw',
			margin   : '0 10vw'
		}
	},
	carousal : {
		maxWidth                  : '70vw',
		margin                    : '0 5vw',
		'@media(max-width:780px)' : {
			maxWidth : '90vw',
			margin   : '0 2vw'
		}
	},
	send     : {
		margin                    : '2vh 30vw',
		backgroundColor           : ' #7b1fa2',
		color                     : '#ffffff',
		'@media(max-width:780px)' : {
			margin : '2vh 5vw'
		}
	},
	text     : {
		textAlign : 'center'
	},
	customer : {
		color     : '#FBC034',
		textAlign : 'center'
	}
});

const Hirecontainer = () => {
	const classes = useStyles();

	const forms = [
		{
			name     : 'Please tell us your name *      ',
			label    : 'First Name',
			div      : '2',
			dropDown : 'false'
		},
		{
			name     : 'Please tell us your name *      ',
			label    : 'Last Name',
			div      : '2',
			dropDown : 'false'
		},
		{
			name     : 'Please enter your email address *      ',
			label    : 'Email',
			div      : '2',
			dropDown : 'false'
		},
		{
			name     : 'Please enter your phone number (optional)      ',
			label    : 'Email',
			div      : '2',
			dropDown : 'false'
		},
		{
			name     : 'Please tell us the budget      ',
			label    : 'Project Budget',
			div      : '1',
			dropDown : 'true',
			drops    : [
				'<$20.000',
				'$20.000-$50.000',
				'$50.000-$100.000',
				'>$100.000'
			]
		},
		{
			name     : 'Please tell us about your project (optional)      ',
			label    : 'Message',
			div      : '1',
			dropDown : 'false'
		}
	];
	const responsive = {
		desktop : {
			breakpoint : { max: 3000, min: 1024 },
			items      : 3
		},
		tablet  : {
			breakpoint : { max: 1024, min: 464 },
			items      : 1
		}
	};
	const images = [
		{
			img : 'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
			des :
				'Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.'
		},
		{
			img : 'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
			des :
				'Free delivery on millions of items with Prime. Low prices across earth`s biggest selection of books, music, DVDs, electronics, computers, software'
		},
		{
			img : 'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
			des :
				'Find your fit with Fitbit`s family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep.'
		},
		{
			img : 'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
			des :
				'Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
		},
		{
			img : 'https://assets.maccarianagency.com/svg/logos/google-original.svg',
			des :
				'Search the world`s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you`re looking for.'
		},
		{
			img : 'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
			des :
				'PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.'
		}
	];
	const [
		currency,
		setCurrency
	] = React.useState('');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<div className={classes.root}>
			<div className={classes.top}>
				<h4 className={classes.h4}>HIRE US</h4>
				<h1 className={classes.h1}>Got a project for us?</h1>
				<h4 className={classes.h4}>
					We help brands and platforms turn big ideas into beautiful digital products and experiences.
				</h4>
			</div>
			<Grid container spacing={4} className={classes.form}>
				{forms.map(
					(i) =>

							i.div === '2' ? <Grid item xs={12} md={6}>
								<Typography>{i.name}</Typography>
								<TextField id="outlined-basic" label={i.label} variant="outlined" fullWidth />
							</Grid> :
							i.dropDown === 'true' ? <Grid item xs={12} md={12}>
								<Typography>{i.name}</Typography>
								<TextField
									id="outlined-basic"
									select
									label="Select"
									fullWidth
									value={currency}
									onChange={handleChange}
									helperText={i.name}>
									{i.drops.map((option) => (
										<MenuItem key={option} value={option}>
											{option}
										</MenuItem>
									))}
								</TextField>
							</Grid> :
							<Grid item xs={12} md={12}>
								<Typography>{i.name}</Typography>
								<TextField id="outlined-basic" label={i.label} variant="outlined" fullWidth />
							</Grid>
				)}
				<Button className={classes.send}>Send Request</Button>
				<Typography className={classes.text}>We'll get back to you in 1-2 business days.</Typography>
			</Grid>
			<hr />
			<Typography className={classes.customer}>OUR CUSTOMERS</Typography>
			<h1 className={classes.h1}>See how we are helping teams and businesses</h1>

			<Carousel
				className={classes.carousal}
				responsive={responsive}
				infinite={true}
				draggable={false}
				swipeable={false}
				centerMode={true}
				autoPlay={true}
				autoPlaySpeed={10000}
				keyBoardControl={true}
				showDots={false}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				containerClass="carousel-container">
				{images.map((i) => (
					<Card
						style={{
							margin : '10px 2vw'
						}}>
						<CardMedia component="img" width="30%" image={i.img} alt="green iguana" />
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{i.des}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				))}
			</Carousel>
		</div>
	);
};

export default Hirecontainer;
