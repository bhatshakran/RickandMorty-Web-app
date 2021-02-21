import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import news1 from '../images/news1.jpg';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
	gridnews: {
		padding: '8rem',
		background: 'pink',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			padding: '0',
		},
	},
	leftCont: {
		background: '#1fcecb',
		cursor: 'pointer',
		padding: '2rem',
		color: '#fff',
		transition: 'all 0.3s linear',
		'&:hover': {
			background: 'purple',
		},
	},
	heading: {
		color: '#111111',
		fontFamily: 'Maven Pro',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '1.5rem',
		},
	},
	rightCont: {
		background: '#c80815',
		fontFamily: 'Maven Pro',
		padding: '2rem',
		fontSize: '13rem',
		color: 'white',
		cursor: 'pointer',
		transition: 'all 0.3s linear',
		'&:hover': {
			background: 'purple',
		},
	},
	newsImg: {
		width: '100%',
		height: ' 400px',
	},
	text: {
		fontFamily: 'Archivo',
		fontSize: '1.1rem',
		lineHeight: ' 23px',
		opacity: '0.8',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '1rem',
		},
	},

	btCont: {
		padding: '1rem',
		height: '700px',
		background: ' #1034a6',
		color: '#fff',
		cursor: 'pointer',
		'&:hover': {
			background: 'purple',
		},
	},
	btnewsImg: {
		width: '100%',
	},
});
const News = () => {
	useEffect(() => {
		AOS.init({
			duration: 700,
		});
	}, []);
	const classes = useStyles();
	return (
		<Grid container className={classes.gridnews}>
			<Grid
				item
				className={classes.leftCont}
				md={6}
				xs={12}
				data-aos='fade-right'
				data-aos-easing='ease-in-out'>
				<img src={news1} alt='' className={classes.newsImg} />
				<Typography variant='h4' className={classes.heading}>
					Why Rick & Morty Needs To Replace The Heroes With Beth & Summer
				</Typography>
				<p className={classes.text}>
					While Rick and Morty will always be about the titular pair, it's high
					time for Beth and Summer to take center stage for season 5. When the
					show first started back in 2013, it came over as an animated and
					more-adult version of Doctor Who meets Back to the Future with a side
					of dysfunctional family to anchor the two title characters to a
					specific time and place. Though the main attraction of the show still
					centers around Rick and Morty’s dimensional adventures, the rest of
					the family – Morty’s older sister Summer, their mom (and Rick’s
					daughter) Beth, and her husband Jerry – have gotten increasingly
					involved in those trips, leading to significant character growth for
					both Summer and Beth. Based on where the show has gone so far, it
					seems the time is ripe to make Beth and Summer the focus of the show
					going forward.
				</p>
				{/* <footer>Courtesy:Screen Rant</footer> */}
			</Grid>

			<Grid
				item
				className={classes.rightCont}
				md={6}
				xs={12}
				data-aos='fade-left'
				data-aos-easing='ease-in-out'>
				<img src={news2} alt='' className={classes.newsImg} />
				<Typography variant='h4' className={classes.heading}>
					Why ‘Promortyus’ Is Actually Rick & Morty’s Most Underrated Episode
				</Typography>
				<p className={classes.text}>
					Despite being one of the show’s less critically-loved outings upon its
					initial release, season 4’s “Promortyus” might actually be Rick &
					Morty’s best episode ever. Beginning life as a raunchy spoof of Back
					to the Future way back in 2013, Community creator Dan Harmon and
					voice-over artist Justin Roiland’s Adult Swim hit Rick & Morty has
					since developed over its 4 seasons into an anarchic, inventive, and
					often surprisingly smart sci-fi satire.
				</p>
			</Grid>
			<Grid
				item
				className={classes.btCont}
				md={8}
				xs={12}
				data-aos='zoom-in'
				data-aos-easing='ease-in-out'>
				<img src={news3} alt='' className={classes.btnewsImg} />
				<Typography
					variant='h4'
					className={classes.heading}
					style={{ color: '#aaaaaa' }}>
					Rick & Morty: 10 Worst Ideas Rick Has Had So Far, Ranked
				</Typography>
				<p className={classes.text}>
					One of the sad things about Rick & Morty is that the grandson rarely
					gets his ideas implemented, or even acknowledged, but for the most
					part, his grandpa has a reason behind that decision. However, does
					this mean that everything Rick does is always right? Sure, he'd love
					to think so, given that his ego is as enormous as his intellectual
					capacity.
				</p>
			</Grid>
			<Grid
				item
				className={classes.btCont}
				md={4}
				xs={12}
				data-aos='zoom-in'
				data-aos-easing='ease-in-out'>
				<img src={news4} alt='' className={classes.btnewsImg} />
				<Typography
					variant='h4'
					className={classes.heading}
					style={{ color: '#aaaaaa' }}>
					Rick and Morty’ co-creator Dan Harmon is making a new animation set in
					ancient Greece
				</Typography>
				<p className={classes.text}>
					Rick and Morty co-creator Dan Harmon is making a new original animated
					series for Fox Entertainment. The currently untitled show will take
					place in mythical ancient Greece, focusing on a family of humans, gods
					and monsters trying to run one of the world’s first cities.
				</p>
			</Grid>
		</Grid>
	);
};

export default News;
