import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export const CoreApp: React.FC = (props) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<AppBar position="static">
						<Toolbar>
							<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Пост
							</Typography>
							<Button color="inherit">JG</Button>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs={12}>
					<Box mt={2} />
				</Grid>
				<Grid item xs={12}>
					{props.children}
				</Grid>
			</Grid>
		</React.Fragment>
	);
}