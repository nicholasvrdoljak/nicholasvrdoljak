import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const posts = [
	{
		type: 'youtube',
		title: 'Snowboarding vs. Skiing',
		link: 'XPZDEWBzneY',
		date: 'March 23, 2022'
	},
	{
		type: 'youtube',
		title: 'Chevy Commercial',
		link: 'c4-oyBnknHk',
		date: "December 25, 2021"
	},
	{
		type: 'quote', 
		title: "Captain Corelli's Mandolin",
		excerpt: 'Love is a temporary madness, it erupts like volcanoes and then subsides. And when it subsides, you have to make a decision. You have to work out whether your roots have so entwined together that it is inconceivable that you should ever part. Because this is what love is. Love is not breathlessness, it is not excitement, it is not the promulgation of promises of eternal passion, it is not the desire to mate every second minute of the day, it is not lying awake at night imagining that he is kissing every cranny of your body. No, don\'t blush, I am telling you some truths. That is just being "in love", which any fool can do. Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.',
		date: "May 28, 2021", 
		image: ""
	},
	{
		type: 'quote', 
		title: 'Thomas Jefferson', 
		excerpt: "Rightful liberty is unobstructed action according to our will within limits drawn around us by the equal rights of others. I do not add ‘within the limits of the law’ because law is often but the tyrant’s will, and always so when it violates the rights of the individual.",
		date: "May 28, 2021", 
		image: ""
	},
	{
		type: 'youtube', 
		title: 'Pokemon Cards',
		link: 'wuBABzFi3r4', 
		date: 'May 25, 2021'
	},
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
		excerpt: "Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience. They may be more likely to go to Heaven yet at the same time likelier to make a Hell of earth. This very kindness stings with intolerable insult. To be 'cured' against one's will and cured of states which we may not regard as disease is to be put on a level of those who have not yet reached the age of reason or those who never will; to be classed with infants, imbeciles, and domestic animals",
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
	}
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
