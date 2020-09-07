import React from "react";
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button,makeStyles,} from "@material-ui/core";
import {Link} from "react-router-dom";

const Post = (props) => {
	const {id, title, body} = props.post;

	const useStyles = makeStyles({
		media: {
            height: "150px",
            
		},
		linkStyle: {
            textDecoration: "none",
                  
		},
	});
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Link to={`/post/${id}`}>
					<CardMedia
						className={classes.media}
						image={`https://picsum.photos/id/${22 + id}/1281/730`}
						title="alt text"
					/>
				</Link>
				<CardContent>
					<Typography variant="h6" component="h5">
						{title}
					</Typography>
					<Typography variant="body2" component="p" >
						{body}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to={`/post/${id}`} className={classes.linkStyle}style ={{textDecoration:'none'}}>
					<Button size="small"  style ={{color:"blue",backgroundColor:'pink', border:"3px solid green"}}>
					Read More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Post;
