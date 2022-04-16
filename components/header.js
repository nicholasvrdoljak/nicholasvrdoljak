import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Link from 'next/link';
const headersData = [
	{
		label: "Things I Like",
		href: "/feed",
	},
	// {
	// 	label: "Work",
	// 	href: "/work",
	// },
	// {
	// 	label: "Pictures",
	// 	href: "/pictures",
	// },
	// {
	// 	label: "Contact",
	// 	href: "/contact",
	// },
];
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	logo: { 
		cursor: 'pointer',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `100%`,
			marginLeft: drawerWidth,
		},
		backgroundColor: theme.palette.primary.main
	},
	menuLinks: {
		marginRight: theme.spacing(2),
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'inline',
		},
	},
	menuLinksContainer:{
		position: 'absolute',
		right: 0
	},
	menuButton: {
		position: 'absolute',
		right: 0,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
	}
}));

function Header(props) {
	const { Component, pageProps } = props;

	const theme = useTheme();
	const classes = useStyles(theme);
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link href={href} passHref key={label} className={classes.menuLinks}>
					<Button
						{...{
							color: "inherit",
							to: href,
							className: classes.menuLinks,
						}}
					>
						{label}
					</Button>
				</Link>
			);
		});
	};

	return (
        <div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Link href='/' passHref>
						<Typography variant="h6" noWrap className={classes.logo}>
							Hi, I&apos;m Nick
						</Typography>
					</Link>
					<IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                        size="large">
					<MenuIcon />
				</IconButton>
				<div className={classes.menuLinksContainer}>
					{getMenuButtons()}
				</div>
				</Toolbar>

			</AppBar>

			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Component {...pageProps}/>
			</main>
		</div>
    );
}

export default Header;
Header.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
