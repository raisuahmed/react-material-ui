import React from "react";
import Comment from "../Comment/Comment";
import {List} from "@material-ui/core";

const CommentList = (props) => {
	const {comments} = props;
	return (
		<List style ={{color:"blue"}}>
			{comments.map((comment) => (
				<Comment comment={comment} key={comment.id}></Comment>
			))}
		</List>
	);
};

export default CommentList;
