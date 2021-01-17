import React from 'react';

import { CreatePostGenerator } from './PostGenerator';
import blackFont from 'url:./assets/SFUIDisplay-Black.otf';
import heavyFont from 'url:./assets/SFUIDisplay-Heavy.otf';
import archiveFont from 'url:./assets/Archive.otf';
import postBG from 'url:./assets/post-bg.png';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const post = CreatePostGenerator({
	postFontPath: blackFont,
	hashFontPath: heavyFont,
	backgroundImagePath: postBG,
	resultImage: document.getElementById("result-image") as HTMLImageElement,

	updateOffset: 1000,
});


const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.up('sm')]: {
			position: "fixed",
			left: '50%',
			top: '50%',
			transform: "translateX(-50%) translateY(-50%)",
		},
		position: 'relative',
		border: '1px solid #ddd',
		maxWidth: '100%',
		width: 345,
		margin: '0 auto',
	},
	media: {
		maxWidth: '100%',
		width: 345,
		height: 230,
	}
}));


export const Posts = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia>
				<img className={classes.media} ref={ref => post.setImgRef(ref as HTMLImageElement)} />
			</CardMedia>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							size="small"
							label="Текст"
							variant="outlined"
							onChange={e => post.setText(e.target.value)}
							fullWidth
							autoFocus
							multiline
							rows={2}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							size="small"
							label="Тег"
							variant="outlined"
							fullWidth
							onChange={e => post.setTag(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button size="large" color="primary" variant="outlined" fullWidth onClick={e => post.generate()}>
							Сгенерировать
						</Button>
					</Grid>
				</Grid>
			</CardContent>
			<span />
		</Card>
	);
}
