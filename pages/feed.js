import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "next/link";

const posts = [
	{
		title: "I can tolerate anything except the outgroup",
		excerpt: "",
		href: "https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",
		image: "/images/outgroup.jpg",
		date: "January 27, 2021"
	}
];

function Feed(props)  {
	return (
		<div style={{ marginTop: 20, padding: 30 }}>
			<Grid container spacing={10} justify="center">
				{ posts.map( post => (
					<Grid item key={ post.title }>
						<Card>
							<a href={post.href} target="_blank">
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="140"
										image={post.image}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{post.title}
										</Typography>
										<Typography component="p">
											{post.excerpt}
										</Typography>
										<Typography component="p" variant="caption">
											<br/>Posted on {post.date}
										</Typography>
									</CardContent>
								</CardActionArea>
								{/* <CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions> */}
							</a>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
  
export default Feed