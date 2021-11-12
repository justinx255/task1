import {
	Card,
	Grid,
	Typography,
	TextField,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	grid      : {
		height : '70vh'
	},
	main      : {
		width  : '80%',
		margin : '0 10%'
	},
	card      : {
		marginTop : '10%'
	},
	container : {
		width  : '80%',
		height : '70%',
		margin : '5%'
	},
	text      : {
		width  : '80%',
	}
});

const Contactcontainer = () => {
	const classes = useStyles();

	const cont = [
		{
			title : 'Call us:',
			value : '+39 34 111 222'
		},
		{
			title : 'Email us:',
			value : 'hi@maccarianagency.com'
		},
		{
			title : 'Address:',
			value : 'Via E. Gola 4, Milan MI, Italy'
		}
	];
	const FAQ = [
		{
			question : 'Can I purchase a Gift Certificate?',
			answer   :
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.      '
		},
		{
			question : 'What is your return Policy?',
			answer   :
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.      '
		},
		{
			question : 'Do you Sell Gift Cards?',
			answer   :
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.      '
		},
		{
			question : 'Can I change plans later on ?',
			answer   :
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.      '
		}
	];
	return (
		<div>
			<div className={classes.main}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} className={classes.grid}>
						<h4> CONTACT US</h4>
						<h1>Get in touch</h1>
						<Typography>We'd love to talk about how we can help you.</Typography>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4302.523107759583!2d76.9946335506176!3d11.106512292059262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f777a796453f%3A0x1412839fef02566f!2sPpg%20College%20Of%20Physiotherapy!5e1!3m2!1sen!2sus!4v1636600848923!5m2!1sen!2sus"
							width="60%"
							height="60%"
							frameBorder="0"
							style={{ border: 0 }}
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
						/>
						<Grid container spacing={1} className={classes.text}>
							{cont.map((i) => (
								<Grid item xs={12} md={6}>
									<h2>{i.title}</h2>
									<Typography>{i.value}</Typography>
								</Grid>
							))}
						</Grid>
					</Grid>

					<Grid item xs={12} md={6} className={classes.grid}>
						<Card className={classes.card}>
							<Grid container spacing={4} className={classes.container}>
								<Grid item xs={12} md={6}>
									<TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
								</Grid>
								<Grid item xs={12} md={12}>
									<TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
								</Grid>
								<Grid item xs={12} md={12}>
									<TextField id="outlined-basic" label="Message" variant="outlined" fullWidth />
								</Grid>
								<Button>Submit</Button>
								<div>
									By clicking on "submit" you agree to our <span>Privacy Policy, Data Policy</span> and{' '}
									<span>Cookie Policy.</span>
								</div>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</div>
			<div
				style={{
					margin : '40vh 10vw 0 10vw'
				}}>
				<h1>Frequently Asked Questions</h1>
				{FAQ.map((i) => (
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
							<h3>{i.question}</h3>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{i.answer}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</div>
	);
};

export default Contactcontainer;
