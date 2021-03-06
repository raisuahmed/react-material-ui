import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Toolbar, AppBar, Grid, IconButton, makeStyles, Badge, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
	alignCenter: {
		display: "flex",
        alignItems: "center",
        marginTop:"20px"
	},
	linkStyle: {
		textDecoration: "none",
        color: "Yellow",
        margin:'15px'
        
    },
   
});

const Header = () => {
	const classes = useStyles();

	return (
		<div >
		<AppBar position="absolute">
			<Toolbar style ={{backgroundColor:"yellow"}}>
				<Grid container alignItems="center">
					<Grid item className={classes.alignCenter}>
						<IconButton>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5">
							<Link to="/" className={classes.linkStyle}style ={{color:"black",textDecoration:'none'}}>
								Home
							</Link>
                            <Link to="/" className={classes.linkStyle} style ={{color:"black",textDecoration:'none'}}>
								About
							</Link>
						</Typography>
					</Grid>
					<Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<Badge color="primary" badgeContent={10}>
								<NotificationsActiveIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<ChatIcon />
                            <Badge color="primary" badgeContent={2}></Badge>
						</IconButton>
						<IconButton>
                        
							<AccountCircleIcon />
                           
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
		</div>
	);
};

export default Header;
