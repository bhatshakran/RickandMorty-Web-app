import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
	card: {
		width: '300px',
		margin: '2rem 1rem',
		padding: '1rem 0',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
	},
	cardImg: {
		width: '70px',
		borderRadius: '50%',
		marginLeft: '1rem',
	},
	cardcont: {
		position: 'absolute',
		top: '50%',
		right: '10px',
		transform: 'translateY(-50%)',
		width: '50%',
		marginRight: '1rem',
	},
	cardname: {
		fontFamily: 'Maven Pro',
	},
	modalHolder: {
		position: 'absolute',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		height: '11000px',
		width: '100%',
		background: 'rgba(0,0,0,0.3)',
	},
	myModal: {
		background: '#fff',
		minWidth: '500px',
		position: 'fixed',
		top: '50%',
		left: '50%',
		zIndex: '999',
		transform: 'translate(-50%, -50%)',
		borderRadius: '8px',
		boxShadow: '4px 4px 14px #111111, -4px -4px 14px #111111',
		display: 'flex',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			minWidth: '300px',
			flexDirection: 'column',
		},
	},
	carddetimg: {
		width: '50%',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			width: '100%',
		},
	},
	carddet: {
		width: '50%',
		padding: '1.5rem 1rem',
		fontFamily: 'archivo',
		background: '#85144b',
		color: '#fff',
		borderRadius: '0px 8px 8px 0',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key
			width: '100%',
			borderRadius: '0px 0px 8px 8px',
		},
	},
	carddetImage: {
		borderRadius: '8px 0 0 8px',
		width: '100%',
		height: '100%',
		['@media (max-width:600px)']: {
			// eslint-disable-line no-useless-computed-key

			borderRadius: '0px 8px 0px 0px',
		},
	},
	closeBtn: {
		position: 'absolute',
		top: '4px',
		right: '5px',
		cursor: 'pointer',
	},
});

const Profile = props => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		console.log('clicked');
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	console.log(props);
	return (
		<>
			<Card className={classes.card} onClick={handleOpen}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='70'
						image={props.image}
						className={classes.cardImg}
					/>
					<CardContent className={classes.cardcont}>
						<Typography
							gutterBottom
							variant='body1'
							component='h2'
							className={classes.cardname}>
							{props.name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			{open === true ? (
				<div className={classes.modalHolder} onClick={handleClose}>
					<div className={classes.myModal}>
						<div className={classes.carddetimg}>
							<img src={props.image} alt='' className={classes.carddetImage} />
						</div>
						<div className={classes.carddet}>
							<Typography variant='h4'>{props.name}</Typography>
							<Typography variant='h6'>Status:{props.status}</Typography>
							<Typography variant='h6'>Gender:{props.gender}</Typography>
							<Typography variant='h6'>Location:{props.location}</Typography>
							<Typography variant='h6'>Species:{props.species}</Typography>
							<CloseIcon className={classes.closeBtn} onClick={handleClose} />
						</div>
					</div>{' '}
				</div>
			) : null}
		</>
	);
};

export default Profile;
