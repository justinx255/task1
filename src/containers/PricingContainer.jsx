import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
	pick      : {
		fontSize  : '3em',
		width     : '60%',
		margin    : '0 20%',
		textAlign : 'center'
	},
	select    : {
		color           : '#fff',
		backgroundColor : '#4A148C'
	},
	unselect  : {
		color           : '#4A148C',
		backgroundColor : '#fff'
	},
	packgrid  : {
		margin    : '2% 5%',
		textAlign : 'center',
		fontSize  : '1em'
	},
	invidGrid : {
		padding    : '2% 0',
		lineHeight : '2.5'
	},
	typo      : {
		display        : 'flex',
		justifyContent : 'space-between',
		width          : '60%',
		margin         : ' 0 15%'
	}
});
const Pricingcontainer = () => {
	const classes = useStyles();

	const [
		price,
		setPrice
	] = useState('month');
	const handleMonth = () => {
		setPrice('month');
		console.log('cahnged to month');
	};
	const handleYear = () => {
		setPrice('year');
		console.log('cahnged to year');
	};
	console.log(price);
	const Annualy = [
		{
			title       : 'Basic',
			price       : '$210',
			button      : 'Get basic',

			description : 'Per user, Per Year',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'true'
				},
				{
					title  : 'SSO via Google',
					strike : 'true'
				},
				{
					title  : 'API Access',
					strike : 'true'
				},
				{
					title  : 'Facebook Ads',
					strike : 'true'
				}
			]
		},
		{
			title       : 'Professional',
			price       : '$410',
			button      : 'Get pro',
			description : 'Per user, Per Year',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'false'
				},
				{
					title  : 'SSO via Google',
					strike : 'false'
				},
				{
					title  : 'API Access',
					strike : 'true'
				},
				{
					title  : 'Facebook Ads',
					strike : 'true'
				}
			]
		},
		{
			title       : 'Commercial',
			price       : '$710',
			button      : 'Contact Us',

			description : 'Per user, Per Year',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'false'
				},
				{
					title  : 'SSO via Google',
					strike : 'false'
				},
				{
					title  : 'API Access',
					strike : 'false'
				},
				{
					title  : 'Facebook Ads',
					strike : 'false'
				}
			]
		}
	];
	const Monthly = [
		{
			title       : 'Basic',
			price       : '$22',
			button      : 'Get basic',

			description : 'Per user, Per Month',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'true'
				},
				{
					title  : 'SSO via Google',
					strike : 'true'
				},
				{
					title  : 'API Access',
					strike : 'true'
				},
				{
					title  : 'Facebook Ads',
					strike : 'true'
				}
			]
		},
		{
			title       : 'Professional',
			price       : '$44',
			button      : 'Get pro',
			description : 'Per user, Per Month',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'false'
				},
				{
					title  : 'SSO via Google',
					strike : 'false'
				},
				{
					title  : 'API Access',
					strike : 'true'
				},
				{
					title  : 'Facebook Ads',
					strike : 'true'
				}
			]
		},
		{
			title       : 'Commercial',
			price       : '$77',
			button      : 'Contact Us',

			description : 'Per user, Per Month',
			features    : [
				{
					title  : '1 User',
					strike : 'false'
				},
				{
					title  : '1 App',
					strike : 'false'
				},
				{
					title  : 'Integrations',
					strike : 'false'
				},
				{
					title  : 'Google Ads',
					strike : 'false'
				},
				{
					title  : 'SSO via Google',
					strike : 'false'
				},
				{
					title  : 'API Access',
					strike : 'false'
				},
				{
					title  : 'Facebook Ads',
					strike : 'false'
				}
			]
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
	const FAQ = [
		{
			question : 'Can I purchase a gift certificate?',
			answer   :
				'    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
		},
		{
			question : 'What is your return policy?',
			answer   :
				'    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		},
		{
			question : '    Do you sell gift cards?',
			answer   :
				'    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		},
		{
			question : '    Can I change plans later on?',
			answer   :
				'    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		},
		{
			question : '    Is this a subscription service?',
			answer   :
				'    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		},
		{
			question : '    Can I purchase a gift certificate?',

			answer   :
				'  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
		}
	];
	return (
		<div
			style={{
				backgroundColor : '#F7F9FC'
			}}>
			<h2 className={classes.pick}>Pick the best plan based on your business needs </h2>
			<div style={{ margin: '2% 40%' }}>
				{
					price === 'month' ? <Button onClick={handleMonth} className={classes.select}>
						Months
					</Button> :
					<Button onClick={handleMonth} className={classes.unselect}>
						Months
					</Button>}
				{
					price === 'year' ? <Button onClick={handleYear} className={classes.select}>
						Annually
					</Button> :
					<Button onClick={handleYear} className={classes.unselect}>
						Annually
					</Button>}
			</div>
			<Grid container spacing={3} className={classes.packgrid}>
				{
					price === 'month' ? Monthly.map((months) => (
						<Grid item xs={12} lg={4} className={classes.invidGrid}>
							<Card style={{ width: '80%' }}>
								<Typography className={classes.typo}>
									{months.title} &nbsp;&nbsp; <span>{months.price}</span>
								</Typography>
								<Typography>{months.description}</Typography>
								{months.features.map(
									(fea) =>

											fea.strike === 'false' ? <Typography>{fea.title}</Typography> :
											<Typography
												style={{
													textDecorationLine  : 'line-through',
													textDecorationStyle : 'solid'
												}}>
												{fea.title}
											</Typography>
								)}
								<Button className={classes.select}>{months.button}</Button>
							</Card>
						</Grid>
					)) :
					Annualy.map((months) => (
						<Grid item xs={12} lg={4} className={classes.invidGrid}>
							<Card style={{ width: '80%' }}>
								<Typography className={classes.typo}>
									{' '}
									{months.title} &nbsp;&nbsp; <span>{months.price}</span>
								</Typography>
								<Typography>{months.description}</Typography>
								{months.features.map(
									(fea) =>

											fea.strike === 'false' ? <Typography>{fea.title}</Typography> :
											<Typography
												style={{
													textDecorationLine  : 'line-through',
													textDecorationStyle : 'solid'
												}}>
												{fea.title}
											</Typography>
								)}
								<Button className={classes.select}>{months.button}</Button>
							</Card>
						</Grid>
					))}
			</Grid>
			<Typography
				style={{
					textAlign  : 'center',
					fontWeight : 'bolder'
				}}>
				TRUSTED BY OPEN SOURCE, ENTERPRISE, AND MORE THAN 33,000 OF YOU
			</Typography>
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
			<h1 style={{ textAlign: 'center' }}> Frequently Asked Questions</h1>
			<Grid
				container
				spacing={3}
				style={{
					width  : '80%',
					margin : '0 10%'
				}}>
				{FAQ.map((i) => (
					<Grid item xs={12} md={4}>
						<h2>{i.question}</h2>
						<Typography>{i.answer}</Typography>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Pricingcontainer;
