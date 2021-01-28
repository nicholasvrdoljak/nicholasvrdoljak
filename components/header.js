import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    links: {
        width: '100%',
        textAlign: 'right'
    }
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, links } = useStyles();
    const [ height, setHeight ] = useState(0)
    const ref = useRef(0)

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link href={href} passHref key={label}>
                    <Button
                        {...{
                            color: "inherit",
                            to: href,
                            className: menuButton,
                        }}
                    >
                        {label}
                    </Button>
                </Link>
            );
        });
    };

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    });

    return (
        <header>
            <AppBar className={header} ref={ref}>
                <Toolbar className={toolbar}>
                    <Link href='/' passHref>
                        <Button {...{
                            color: "inherit",
                            to: '/',
                        }}>
                            <Typography variant="h6" component="h1" className={logo}>
                                Nicholas Vrdoljak
                            </Typography>
                        </Button>
                    </Link>
                    <div className={links}>
                        {getMenuButtons()}
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{height:`${height}px`}}></div>
        </header>
    );
}

const headersData = [
    {
        label: "Read",
        href: "/read",
    },
    {
        label: "Work",
        href: "/work",
    },
    {
        label: "Pictures",
        href: "/pictures",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];