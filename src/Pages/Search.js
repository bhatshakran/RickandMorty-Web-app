import React, { useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import knowmore from '../images/knowmore.png';
import Navbar from '../components/Navbar';
import useCharacterSearch from '../components/useCharacterSearch';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import Profile from '../components/Profile';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	container: {
		position: 'relative',
		textAlign: 'center',
	},
	search: {
		background: 'black',
	},
	tag: {
		position: 'absolute',
		top: '50%',
		left: '30px',
		transform: 'translateY(-50%)',
		fontFamily: 'Maven Pro',
		color: '#111111',
		fontSize: '4rem',
		width: '200px',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			left: '50%',
			transform: 'translateX(-50%)',
			fontSize: '2rem',
		},
	},
	more: {
		fontFamily: 'elephant',
		color: '#fff',
		fontSize: '5rem',

		// background: 'linear-gradient(to right, orange, green, blue)',
	},
	searchItem: {
		position: 'relative',
		height: '400px',
	},

	charSearch: {
		fontFamily: 'Open Sans',
		background: 'linear-gradient(to right, #005C97, #363795) ',
		fontSize: '8rem',
		color: '#fff',
		textAlign: 'center',

		['@media (max-width:700px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '3rem',
		},
	},
	img: {
		position: 'absolute',
		right: '0',
		height: '100%',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			right: '50%',
			transform: 'translateX(50%)',
			height: '150px',
		},
	},
	form: {
		textAlign: 'center',
		margin: '0rem auto',
		background: 'linear-gradient(to right, #005C97, #363795) ',
		padding: '2rem',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			padding: '0',
		},
	},
	input: {
		width: '800px',
		height: '60px',
		borderRadius: '5px',
		padding: ' 1rem',
		background: ' #fff',
		['@media (max-width:800px)']: {
			// eslint-disable-line no-useless-computed-key
			maxWidth: '300px',
			margin: '0',
		},
	},
	searchBtn: {
		margin: '2rem',
		background: 'orangered',
		color: '#fff',
		'&:hover': {
			background: 'black',
		},
	},
	or: {
		textAlign: 'center',
		fontFamily: 'Open Sans',
		background: '#fff',
		fontSize: '4rem',
		color: ' black',
	},
	getAll: {
		color: '#daad86',
		fontFamily: 'Open Sans',
		background: ' #fff',
		fontStyle: 'italic',
		textAlign: 'center',
		fontSize: '8rem',
		'&:hover': {
			color: '#8d8741',
		},
	},
	cardsgrid: {
		background: 'linear-gradient(to right, #005C97, #363795)',
	},
});
const Search = () => {
	const classes = useStyles();
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);

	const { characters, loading, error, hasMore } = useCharacterSearch(
		query,
		pageNumber
	);

	const observer = useRef();
	const lastCharElementRef = useCallback(
		node => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					console.log('cisible');
					setPageNumber(prevPageNumber => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	function handleSearch(e) {
		setQuery(e.target.value);
		setPageNumber(1);
	}

	return (
		<div className='search'>
			<Navbar />
			<div className={`${classes.container} searchCont`} justify='center'>
				<div className={`${classes.searchItem} `}>
					<img src={knowmore} alt='' className={classes.img} />
					<h1 className={classes.tag}>Wanna know more about us..?</h1>
				</div>
			</div>
			<div className={classes.charSearch}>Search for characters</div>

			<form className={classes.form}>
				<FormControl>
					<TextField
						type='text'
						onChange={handleSearch}
						value={query}
						placeholder='Search for characters by name'
						className={classes.input}
						InputProps={{
							endAdornment: (
								<InputAdornment>
									<IconButton>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</FormControl>
			</form>
			<Grid container justify='center' className={classes.cardsgrid}>
				{characters.map((char, index) => {
					const parsed = JSON.parse(char);
					const { id, name, status, image, gender, location, species } = parsed;
					if (characters.length === index + 1) {
						return (
							<Grid item ref={lastCharElementRef} key={id}>
								<Profile
									name={name}
									status={status}
									image={image}
									gender={gender}
									location={location.name}
									species={species}
								/>
							</Grid>
						);
					} else {
						return (
							<Grid item key={id}>
								<Profile
									name={name}
									status={status}
									image={image}
									gender={gender}
									location={location.name}
									species={species}
								/>
							</Grid>
						);
					}
				})}
				{loading === true ? <div>loading..</div> : null}
				<div>{error && 'Error...'}</div>
			</Grid>
		</div>
	);
};

export default Search;
