import React, {useState, useEffect} from "react";
import {Card, CardMedia, CardContent, Typography, makeStyles, Container, Box} from "@material-ui/core";
import {useParams} from "react-router-dom";
import CommentList from "../CommentList/CommentList";

const PostDetails = () => {
	// Find post using url parameter
	const {postId} = useParams();

	const [details, setDetails] = useState([]);
	const [comments, setComments] = useState([]);

	// Getting all the comments for this post
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, [postId]);

	// Getting image for the commentator
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, [postId]);

	const useStyles = makeStyles({
		media: {
            height: "440px",
            marginTop:'100px'
            
		},
	});
	const classes = useStyles();

	return (
		<Box py="2.5rem">
			<Container maxWidth="lg">
				<Card>
					<CardMedia
						className={classes.media}
						image={`https://picsum.photos/id/${22 + details.id}/1281/730`}
						title="alt text"
					/>
					<CardContent>
						<Typography variant="h4" component="h3" gutterBottom style ={{color:"maroon", textTransform:'upperCase', fontSize:'20px'}}>
							{details.title}
						</Typography>
						<Typography variant="body2" component="p" color="textSecondary">
							{details.body}
						</Typography>
					</CardContent>
				</Card>
				<CommentList comments={comments}></CommentList>
			</Container>
		</Box>
	);
};

export default PostDetails;
