import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClassSharp } from '@material-ui/icons';

const useStyles = makeStyles({
	ftr: {
		background: '#000133',
		height: '300px',
		color: '#fff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: ' 0 2rem',
		position: ' relative',
	},
	red: {
		color: 'orangered',
	},
	ftrBrand: {
		fontSize: '4rem',
		fontFamily: 'Maven Pro',
	},
	ftrGroup: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
	ftrItem: {
		fontFamily: 'Archivo',
		listStyle: 'none',
		padding: '1rem',
		margin: '0 1rem',
		fontSize: '1.3rem',
	},
	copy: {
		position: 'absolute',
		bottom: '10px',
		left: '50%',
		fontFamily: 'archivo',
	},
});
const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.ftr}>
			<div className={classes.ftrBrand}>
				Rick And <span className={classes.red}>Morty</span>{' '}
			</div>
			<ul className={classes.ftrGroup}>
				<a href=''>
					<li className={classes.ftrItem}>Home</li>
				</a>
				<a href=''>
					<li className={classes.ftrItem}>About</li>
				</a>
				<a href=''>
					<li className={classes.ftrItem}>Search</li>
				</a>
				<a href=''>
					<li className={classes.ftrItem}>Terms and Conditions</li>
				</a>
			</ul>
			<p className={classes.copy}>Copyright 2021</p>
		</footer>
	);
};

export default Footer;
