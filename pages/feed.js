import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const posts = [
	{
		type: 'youtube',
		title: "Suburbs that don't Suck",
		link: 'MWsGBRdK2N0',
		date: 'May 24, 2021'
	},
	{
		type: 'youtube',
		title: 'The Insane Logistics of Shutting Down the Cruise Industry',
		link: 'N4dOCfWlgBw',
		date: 'May 24, 2021'
	},
	{
		type: 'quote',
		title: 'C.S. Lewis', 
		excerpt: "Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience",
		image: "",
		date: "May 22, 2021"
	},
	{
		type: 'article',
		title: "I can tolerate anything except the outgroup",
		excerpt: "Slate Star Codex",
		href: "https://web.archive.org/web/20210105161328/https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",
		image: "/images/outgroup.jpg",
		date: "January 27, 2021"
	}, 
];

const useStyles = makeStyles((theme) => ({
	videoResponsive: {
		overflow: "hidden",
		paddingBottom: "56.25%",
		position: "relative",
		height: "0",
	},
	videoResponsiveIframe: {
		left: 0,
		top: 0,
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	cardArea: {
		width: '100%'
	}
}));

function Feed (props)  {
	const theme = useTheme();
	const classes = useStyles(theme);

	function displayYoutube (post) {
		const link = `https://www.youtube.com/embed/${post.link}`;
		return (
			<div className={classes.videoResponsive}>
				<iframe 
					className={classes.videoResponsiveIframe}
					width="560" 
					height="315" 
					src={link}
					title="YouTube video player" 
					frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowFullScreen
				>
				</iframe>
			</div>
		);
	}

	function getCard(post) {
		return (
			<CardActionArea>
				<CardContent>
					{post.type === 'youtube' && 
						displayYoutube(post)
					}
					{ post.image && 
						<CardMedia
							component="img"
							alt="Thumbnail"
							height="140"
							image={ post.image }
							title="Thumbnail"
						/>
					}
					{post.title &&
						<Typography gutterBottom variant="h5" component="h2">
							{ post.title }
						</Typography>
					}
					{post.excerpt && 
						<Typography component="p">
							{ post.excerpt }
						</Typography>
					}
					{post.date && 
						<Typography component="p" variant="caption">
							<br/>Posted on { post.date }
						</Typography>
					}
				</CardContent>
			</CardActionArea>
		)
	}

	return (
		<div style={{ marginTop: 20, padding: 30 }}>
			<Grid container spacing={ 10 } justify="center">
				{ posts.map( post => (
					<Grid item key={ post.title } className={classes.cardArea} xs={12} sm={6} md={4}>
						<Card>
							{post.href && 
								<a href={ post.href } target="_blank">
									{getCard(post)}
								</a>
							}
							{!post.href && 
								<div>
									{getCard(post)}
								</div>
							}
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
  
export default Feed