import { AppBar, makeStyles, Toolbar, Typography,InputBase,alpha } from "@material-ui/core";
import React from "react";
import { Cancel, Search  } from '@material-ui/icons';
// import { alpha } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState } from "react";
 

const useStyles = makeStyles((theme) => ({
  appbar: {
    // position: "sticky",
    // Top: 0,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    position:"sticky",
    top:0,
  },
  logo:{
    display:"block"
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props)=>(props.open?"flex":"none"),
      // display:"none",
    },
    objectFit:"cover",
  },
  input: {
    color: "white",
    width:"100%",
    marginLeft: theme.spacing(1),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:"none",
    },
    // objectFit:"contain",
},
icons:{
  alignItems:"center",
  display:(props)=>(props.open? "none":"flex"),
},
  searchButton:{
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  },
}
));

function Header() {
  const [open,setOpen]=useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h5" className={classes.logo}>E-Shop</Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Search" className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
          <AddShoppingCartIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
