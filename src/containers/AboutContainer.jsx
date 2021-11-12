import { Button, ImageList, ImageListItem, Typography, Grid, Avatar, Card } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root     : {
		textAlign : 'center',
		width     : '80%',
		margin    : '0 10%'
	},
	about    : {
		width      : '50%',
		margin     : '0 25%',
		fontWeight : 'normal'
	},
	we       : {
		width    : '60%',
		margin   : '0 20%',
		fontSize : '3em'
	},
	purchase : {
		color           : '#fff',
		backgroundColor : '#4A148C',
		margin          : '2% 0'
	},
	imglist  : { width: '80%', height: '70%', margin: '5% 10%' },
	svg      : {
		width  : '60%',
		margin : '5% 20%'
	},
	img      : { width: '80%', height: '100%', margin: '0 10%' },
	img2     : {
		width  : '80%',
		margin : '0 50%'
	}
});
const Aboutcontainer = () => {
	const classes = useStyles();

	function srcset(image, size, rows = 1, cols = 1) {
		return {
			src    : `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
			srcSet : `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
		};
	}

	const itemData = [
		{
			img   : 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
			title : 'Bed',
			cols  : 1,
			rows  : 4
		},
		{
			img   : 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
			title : 'Books',
			cols  : 2,
			rows  : 2
		},
		{
			img   : 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
			title : 'Sink',
			cols  : 1,
			rows  : 2
		},
		{
			img   : 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
			title : 'Kitchen',
			cols  : 1,
			rows  : 2
		},
		{
			img   : 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
			title : 'Blinds',
			cols  : 2,
			rows  : 2
		}
	];
	const values = [
		{
			title : '12',
			des   : '12 years in business.'
		},
		{
			title : '5,2K',
			des   : '5.200 sold copies'
		},
		{
			title : '99%',
			des   : '99% customer statisfication.'
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
	const profile = [
		{
			name : 'Chary Smith',
			role : 'SEO at Comoti',
			des  : 'I am an ambitious workaholic, but apart from that, pretty simple person.',
			img  : ' https://assets.maccarianagency.com/avatars/img3.jpg'
		},
		{
			name : 'Clara Bertoletti      ',
			role : 'Junior Designer      ',
			des  : 'I am an ambitious workaholic, but apart from that, pretty simple person.      ',
			img  : ' https://assets.maccarianagency.com/avatars/img4.jpg'
		},
		{
			name : 'Jhon Anderson',
			role : 'Senior Frontend Developer      ',
			des  : 'I am an ambitious workaholic, but apart from that, pretty simple person.',
			img  : ' https://assets.maccarianagency.com/avatars/img5.jpg'
		},
		{
			name : 'Chary Smith',
			role : 'SEO at Comoti',
			des  : 'I am an ambitious workaholic, but apart from that, pretty simple person.',
			img  : ' https://assets.maccarianagency.com/avatars/img3.jpg'
		}
	];
	return (
		<div className={classes.root}>
			<h3 className={classes.about}>About Us</h3>
			<h1 className={classes.we}>We take you by hand on each step of the process</h1>
			<h3 className={classes.as}>
				As experts in both design & development, we help you go through the complete process. From your new website
				idea, to design, development, launch and scale!
			</h3>
			<Button className={classes.purchase}>
				{' '}
				Contact Us{' '}
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
			<ImageList className={classes.imglist} variant="quilted" cols={4}>
				{itemData.map((item) => (
					<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
						<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
					</ImageListItem>
				))}
			</ImageList>
			<Grid
				container
				spacing={3}
				className={classes.gridcont}
				style={{
					width  : '80vw',
					margin : '0 10vw'
				}}>
				{values.map((val) => (
					<Grid item xs={12} md={4}>
						<h1>{val.title}</h1>
						<Typography>{val.des}</Typography>
					</Grid>
				))}
			</Grid>
			<hr />

			<h3 className={classes.our}> OUR STORY</h3>
			<h1 className={classes.design}>We design and implement creative solutions to everyday business problems</h1>
			<Typography className={classes.para}>
				{' '}
				We are a team of creative consultants who help bridge the digital gap between companies and their clients with
				websites that not only serve as marketing platforms but also provide solutions to online business problems and
				digital marketing strategies that connect you with the ideal client and help create a loyal customer.
			</Typography>
			<Button className={classes.purchase}>
				{' '}
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="none"
				viewBox="0 0 164 101"
				className={classes.svg}>
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
			<Typography className={classes.seen}>AS SEEN ON</Typography>
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
			<h3> OUR TEAM</h3>
			<h1>Trust the professionals</h1>
			<Grid container spacing={3}>
				{profile.map((a) => (
					<Grid item xs={12} md={5}>
						<Card>
							<Avatar
								style={{
									width : '10%'
								}}>
								<img className={classes.img2} src={a.img} alt={a.img} />
							</Avatar>
							<Typography>{a.name}</Typography>
							<Typography>{a.role}</Typography>
							<Typography>{a.des}</Typography>
							<div style={{ width: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
								<svg
									class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
									focusable="false"
									viewBox="0 0 24 24"
									aria-hidden="true"
									data-testid="GitHubIcon">
									<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
								</svg>
								<svg
									class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
									focusable="false"
									viewBox="0 0 24 24"
									aria-hidden="true"
									data-testid="TwitterIcon">
									<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
								</svg>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Aboutcontainer;
