import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const posts = [
	{
		title: 'C.S. Lewis', 
		excerpt: "Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience",
		image: "",
		date: "May 22, 2021"
	},
	{
		title: "I can tolerate anything except the outgroup",
		excerpt: "",
		href: "https://web.archive.org/web/20210105161328/https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",
		image: "/images/outgroup.jpg",
		date: "January 27, 2021"
	}, 
	
];

function Feed (props)  {
	function getCard(post) {
		return (<CardActionArea>
			{ post.image && 
				<CardMedia
					component="img"
					alt="Thumbnail"
					height="140"
					image={ post.image }
					title="Thumbnail"
				/>
			}
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{ post.title }
				</Typography>
				<Typography component="p">
					{ post.excerpt }
				</Typography>
				<Typography component="p" variant="caption">
					<br/>Posted on { post.date }
				</Typography>
			</CardContent>
		</CardActionArea>)
	}

	return (
		<div style={{ marginTop: 20, padding: 30 }}>
			<Grid container spacing={ 10 } justify="center">
				{ posts.map( post => (
					<Grid item key={ post.title }>
						<Card>
							{
								post.href && 
									<a href={ post.href } target="_blank">
										{getCard(post)}
									</a>
							}
							{
								!post.href && 
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