import { Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
	return (
		<div
			style={{
				background: '#0074d9',
				height: '100%',
				padding: '2rem',
				color: '#fff',
			}}>
			<Navbar />
			<Typography variant='h1'>About this app:</Typography>
			<Typography variant='h4' style={{ color: '#fff', margin: '4rem 0' }}>
				Rick and Morty Web App developed by Bhat Shaqran. <br />
				Here you can get the details of all the characters of rick and morty
				show.
				<br /> This app uses material ui for design and infinite scrolling for
				performance. Built with React.
			</Typography>
		</div>
	);
};

export default About;
