import { Avatar, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';
const useStyles = makeStyles({
	serv          : {
		textAlign : 'center'
	},
	high          : {
		textAlign : 'center',
		fontSize  : '3em'
	},
	experts       : {
		textAlign : 'center',
		width     : '80%',
		margin    : '0 10%'
	},

	contactbutton : {
		textAlign       : 'center',
		fontSize        : '1.5em',
		backgroundColor : '#7b1fa2',
		color           : '#fff',
		margin          : '2% 40%'
	},
	serviceimg    : {
		width  : '40%',
		margin : '0 30%'
	},
	what          : {
		textAlign : 'center'
	},
	you           : {
		textAlign : 'center'
	},
	since         : {
		textAlign : 'center'
	}
});

const Servicecontainer = () => {
	const classes = useStyles();

	const dev = [
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			name : 'Web Design',
			des  : 'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.'
		},
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
			name : 'UI / UX Design',
			des  : 'We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.'
		},
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
			name : 'Brand Design      ',
			des  :
				'We transform businesses into world-class brands by going through a well thought brand identity design process.      '
		},
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
					/>
				</svg>
			),
			name : 'Product Design      ',
			des  :
				'We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.      '
		},
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			),
			name : 'Funnel Optimization      ',
			des  :
				'We help you optimize your website or mobile app flow to increase conversion rates and retention to drive growth.      '
		},
		{
			img  : (
				<svg
					width="48"
					height="48"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
			),
			name : 'Automation',
			des  :
				'We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.      '
		}
	];
	const images = [
		'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
		'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
		'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
		'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
		'https://assets.maccarianagency.com/svg/logos/google-original.svg',
		'https://assets.maccarianagency.com/svg/logos/paypal-original.svg'
	];
	const service = [
		{
			img  : (
				<svg
					width="40"
					height="40"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
			name : 'Idea',
			des  :
				'We meet with your team to know more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.    '
		},
		{
			img  : (
				<svg
					width="40"
					height="40"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					/>
				</svg>
			),
			name : 'Design',
			des  :
				'We start by designing a mockup or prototype of your website, and present it to you. Once with the initial mockup, we start the revision process to perfect it.      '
		},
		{
			img  : (
				<svg
					width="40"
					height="40"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			),
			name : 'Development      ',
			des  :
				'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, SEO-friendly, and super scalable website.      '
		}
	];
	return (
		<div>
			<div
				style={{
					marginTop : '5vh'
				}}>
				<h3 className={classes.serv}>OUR SERVICES</h3>
				<h1 className={classes.high}>High-impact design & development services</h1>
				<h3 className={classes.experts}>
					As experts in both design & development, we help you go through the complete process. From your new website
					idea, to design, development, launch and scale!
				</h3>
				<Button className={classes.contactbutton}>
					Contact Us
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
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="none"
				viewBox="0 0 159 114"
				className={classes.serviceimg}>
				<path
					fill="#E6E6E6"
					d="M79.49 113.435c43.73 0 79.181-4.023 79.181-8.985s-35.451-8.985-79.18-8.985c-43.73 0-79.18 4.023-79.18 8.985s35.45 8.985 79.18 8.985z"
					opacity="0.3"
				/>
				<path
					fill="#FFD200"
					d="M24.5 50.64s-11.765 5.636-13.3 18.62c-1.535 12.986-5.87 38.061 26.045 36.631 31.915-1.43 46.965-3.21 39.44-27.595C69.16 53.91 24.5 50.64 24.5 50.64z"
				/>
				<path
					fill="#000"
					d="M23.295 57.385a9.29 9.29 0 004.245 9.54c4.33 2.855 11 13 16.165 18.13a8.449 8.449 0 012.5 6.115c0 .925.375 1.95 1.595 2.95 3.59 2.935 18.655 4.4 27.08-4.63 8.425-9.03-2.685-13.5-2.685-13.5l-37.03-20.045-11.87 1.44z"
					opacity="0.09"
				/>
				<path
					fill="#F4A28C"
					d="M105.15 101.59s.785 2 2.755 2.43c1.97.43 3.04 2.87-1.265 2.5-4.305-.37-6.67.28-6.05-2.085.62-2.365.34-2.72.34-2.72l4.22-.125zM76.24 99.926s-.33 2.105 1.135 3.5 1.155 4-2.35 1.5-5.88-3.155-4.145-4.875c1.735-1.72 1.675-2.17 1.675-2.17l3.685 2.045z"
				/>
				<path
					fill="#245B5B"
					d="M80 70s26.325.27 26.07 31.665l-6.21 1.055s-1.195-33.155-35.405-17.36L66.24 72.3 80 70z"
				/>
				<path
					fill="#000"
					d="M80 70s26.325.27 26.07 31.665l-6.21 1.055s-1.195-33.155-35.405-17.36L66.24 72.3 80 70z"
					opacity="0.09"
				/>
				<path fill="#FFD200" d="M82.064 41.1l2.285.61-1.625-1.75-.66 1.14z" />
				<path
					fill="#F4A28C"
					d="M46.154 56.64s4.55 11.5 15.655 9.475c11.105-2.025 15.325-25.32 15.325-25.32s4.39-2.855 2.265-6.04c-2.125-3.185-5.58 3.705-5.58 3.705s-4.785 19.63-15.14 13.265L46.154 56.64z"
				/>
				<path
					fill="#000"
					d="M46.154 56.64s4.55 11.5 15.655 9.475c11.105-2.025 15.325-25.32 15.325-25.32s4.39-2.855 2.265-6.04c-2.125-3.185-5.58 3.705-5.58 3.705s-4.785 19.63-15.14 13.265L46.154 56.64z"
					opacity="0.09"
				/>
				<path
					fill="#7b1fa2"
					d="M46.296 33.28l2.4.5s18.55 10.07 15.1 20.154c-3.45 10.085 4.085 19.66 4.085 19.66l-16.13 11.36S30.68 74.5 33.836 45.7c0 0 1.465-13.415 12.46-12.42z"
				/>
				<path
					fill="#E6E6E6"
					d="M77.169 63.422l11.024-22.927a1.687 1.687 0 10-3.041-1.462L74.126 61.96a1.688 1.688 0 103.042 1.462z"
				/>
				<path
					fill="#7b1fa2"
					d="M132.001 99.5s-5.12-1.4-6.235-6.166c0 0 7.935-1.605 8.16 6.585l-1.925-.42z"
					opacity="0.58"
				/>
				<path
					fill="#7b1fa2"
					d="M132.615 99s-3.58-5.655-.43-10.945c0 0 6.035 3.83 3.355 10.96L132.615 99z"
					opacity="0.73"
				/>
				<path fill="#7b1fa2" d="M133.535 99s1.89-5.975 7.605-7.106c0 0 1.075 3.88-3.7 7.12L133.535 99z" />
				<path
					fill="#245B5B"
					d="M130.982 98.86a1 1 0 00-.993 1.145l.747 5.104a1 1 0 00.985.855l4.803.018a1 1 0 00.994-.865l.694-5.096a1 1 0 00-.987-1.135l-6.243-.026z"
				/>
				<path
					fill="#E6E6E6"
					d="M118.895.645h-32.29a2 2 0 00-2 2v21.41a2 2 0 002 2h32.29a2 2 0 002-2V2.645a2 2 0 00-2-2z"
					opacity="0.66"
				/>
				<path
					fill="#E6E6E6"
					d="M151.455 36.24H122.68a2 2 0 00-2 2v18.95a2 2 0 002 2h28.775a2 2 0 002-2V38.24a2 2 0 00-2-2z"
					opacity="0.43"
				/>
				<path fill="#E6E6E6" d="M94.18 12.454a4.235 4.235 0 100-8.47 4.235 4.235 0 000 8.47z" />
				<path
					fill="#C1C1C1"
					d="M114.525 4.625H104.6a1 1 0 00-1 1V20.19a1 1 0 001 1h9.925a1 1 0 001-1V5.625a1 1 0 00-1-1z"
					opacity="0.45"
				/>
				<path
					fill="#C1C1C1"
					d="M97.866 15.635h-6.19a1 1 0 00-1 1v3.555a1 1 0 001 1h6.19a1 1 0 001-1v-3.555a1 1 0 00-1-1z"
				/>
				<path fill="#F4A28C" d="M45.414 20.63l-3.34 11.776 6.62 1.375-.225-9.12-3.055-4.03z" />
				<path fill="#CE8172" d="M48.605 26.655a4.444 4.444 0 01-2-1.555s-.17 2.235 2 4.72v-3.165z" opacity="0.31" />
				<path
					fill="#F4A28C"
					d="M52.27 21.001s-.33 3.72-1.38 6.045a1.87 1.87 0 01-2.5.93c-1.165-.545-2.58-1.62-2.645-3.635l-.53-3.405a3.36 3.36 0 012.08-3.27c2.35-1.165 5.29 1.055 4.975 3.335z"
				/>
				<path
					fill="#F4A28C"
					d="M47.806 23.43s.225-1.42-.86-1.5c-1.085-.08-1.42 1.97 0 2.415l.86-.915zM51.94 23.305l.776 1.6a.601.601 0 01-.535.86h-1.45l1.21-2.46z"
				/>
				<path
					fill="#245B5B"
					d="M82.158 39.632l-10.284-5.938a.658.658 0 00-.657 1.139L81.5 40.77a.657.657 0 10.657-1.139z"
				/>
				<path
					fill="#000"
					d="M55.45 78.7l-3.7 6.255s-13.416-6.5-17.26-24.09c-3.846-17.59 8.84-10.735 8.84-10.735L55.45 78.7z"
					opacity="0.18"
				/>
				<path
					fill="#245B5B"
					d="M51.75 84.954s12.43-25.34 30.81-25.245c18.38.095-5.5 40.89-5.5 40.89L71 98.134s9-17.5 6.71-23.135c-2.29-5.635-5.79 33.235-25.96 9.955z"
				/>
				<path
					fill="#F4A28C"
					d="M41.116 34.7s5.53-2.805 8.34 2.895c2.81 5.7.595 30.215 12 31.5C72.86 70.38 78.646 58.5 78.646 58.5s.94-5 2.5-5.83c1.56-.83 2.935 4.425 0 7.5 0 0-5.03 18.895-21 19.32-15.97.425-34.775-31.85-19.03-44.79z"
				/>
				<path
					fill="#245B5B"
					d="M52.294 16.15s3.636 4.276-1.07 5.17c-4.704.895-5.674 1.74-5.224 6.5.45 4.76 2.315 9.145-3.925 12.13-6.24 2.985-.876 8-2.026 13.85s-6.635 9.89-13.66 5.9c-7.024-3.99-11.36-14.2-3.83-20.315 7.53-6.114 17-7.6 17-17.46 0-9.86 7.87-10.37 12.736-5.774z"
				/>
				<path fill="#C1C1C1" d="M131.095 53.06a5.07 5.07 0 100-10.14 5.07 5.07 0 000 10.14z" opacity="0.43" />
				<path
					fill="#C1C1C1"
					d="M138.299 40.22h-6.815a1 1 0 00-1 1v6.816a1 1 0 001 1h6.815a1 1 0 001-1V41.22a1 1 0 00-1-1zM147.755 40.22h-4.575a1 1 0 00-1 1v12.61a1 1 0 001 1h4.575a1 1 0 001-1V41.22a1 1 0 00-1-1z"
					opacity="0.43"
				/>
				<path fill="#7b1fa2" d="M82.357 59.838L77.7 58.062l-1.003 2.63 4.658 1.777 1.003-2.63z" />
				<path fill="#fff" d="M82.357 59.838L77.7 58.062l-1.003 2.63 4.658 1.777 1.003-2.63z" opacity="0.44" />
			</svg>
			<Typography className={classes.what}> WHAT WE DO</Typography>

			<h1 className={classes.you}>You do business we do the softwere</h1>
			<Typography className={classes.since}>
				Since 2007, we have helped 25 companies launch over 1k incredible products
			</Typography>
			<Button className={classes.contactbutton}>
				Contact Us
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

			<Grid container spacing={2}>
				{dev.map((d) => (
					<Grid item xs={12} md={4}>
						<Card
							style={{
								textAlign : 'center'
							}}>
							<Avatar style={{ margin: '0  auto' }}>{d.img}</Avatar>
							<h3>{d.name}</h3>
							<Typography>{d.des}</Typography>
						</Card>
					</Grid>
				))}
			</Grid>

			<Typography className={classes.what}>AS SEEN ON</Typography>
			{images.map((i) => (
				<img
					alt={i}
					style={{
						width   : '12vw',
						padding : '2vw',
						margin  : '0 1.5vw'
					}}
					src={i}
				/>
			))}
			<hr />
			<h3 className={classes.what}>WHAT WE DO</h3>
			<h1 className={classes.what}>You do business we do the softwere</h1>
			<Typography className={classes.what}>
				Since 2007, we have helped 25 companies launch over 1k incredible products
			</Typography>
			<Button className={classes.contactbutton}>
				Contact Us
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
			<Grid container spacing={3}>
				{service.map((i) => (
					<Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
						<Avatar style={{ margin: '0 45%' }}>{i.img}</Avatar>
						<h2>{i.name}</h2>
						<Typography>{i.des}</Typography>
					</Grid>
				))}
			</Grid>
			<div>
				<Typography className={classes.high}>Have a project to discuss?</Typography>
				<Button className={classes.contactbutton}>
					Contact Us
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
			</div>
		</div>
	);
};

export default Servicecontainer;
