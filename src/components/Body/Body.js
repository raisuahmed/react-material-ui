import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import {Container, Box, makeStyles} from "@material-ui/core";


const Body = () => {
	// Fetch post and store it on state
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts/";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPosts(data.slice(0, 50)));
	}, []);

	const useStyles = makeStyles({
		wrapper: {
            display: "grid",
			gridGap: "25px",
			gridTemplateColumns: "repeat(auto-fit, minmax(350px, 2fr))",
			gridTemplateRows: "max-content",
            gridAutoFlow: "dense",
            marginTop:'70px'
           
            
		},
		item: {},
	});
	const classes = useStyles();

	return (
		<Box py="3.5rem">
			<Container maxWidth="lg">
				<div className={classes.wrapper}>
					{posts.map((post) => (
						<div key={post.id} className={classes.item}>
							<Post post={post}></Post>
						</div>
					))}
				</div>
			</Container>
		</Box>
	);
};

export default Body;
