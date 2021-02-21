import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Gallery from '../components/Gallery';
import News from '../components/News';
import Footer from '../components/Footer';

const useStyles = makeStyles({
	tagline: {
		width: '100%',
		color: ' white',
		fontSize: '13rem',
		fontFamily: 'Maven Pro',
		position: 'absolute',
		top: '60%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '3rem',
			top: '60%',
		},
	},
	red: {
		color: 'black',
		borderBottom: '12px solid red',
	},
	btnScroll: {
		position: 'absolute',
		bottom: '10px',
		left: '50%',
		transform: 'translateX(-50%)',
		boxShadow: '1px 2px 2px rgba(0,0,0,0.3)',
		color: 'black',
		background: '#FFDC00',
		textTransform: 'capitalize',
	},
});
const Home = () => {
	const classes = useStyles();
	return (
		<>
			<div className='home-container'>
				<Navbar />
				{/* <Typography variant='h6' className={classes.mainQuote}>
				I am sorry but your opinion means very little to me{' '}
			</Typography> */}
				<Typography variant='h1' className={classes.tagline}>
					Rick and <span className={classes.red}> Morty</span>
				</Typography>
				<Button
					variant='contained'
					endIcon={<ArrowDownwardIcon />}
					className={classes.btnScroll}>
					Scroll Down
				</Button>
			</div>
			<Gallery />
			<News />
			<Footer />
		</>
	);
};

export default Home;
