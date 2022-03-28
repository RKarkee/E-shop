import React, { useState, useEffect } from "react";
// import ProductComponent from './ProductComponent'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    maxHeight: 400,
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  grid: {
    marginTop: 70,
    flexGrow: 2,
  },
  h1:{
    marginTop:150,
  }
}));

function Cart({ details }) {
  const classes = useStyles();
  const [cartData, setCartData] = useState(details);
  const [deleteState, setDeleteState] = useState(false);
  const [deleteData, setDeleteData] = useState();
  const deleteCart = (data) => {
    setDeleteState(true);
    setDeleteData(data);
  };

  useEffect(() => {
    if (deleteState && deleteData) {
      setCartData(
        cartData.filter((data, index) => {
          return data.name !== deleteData.name;
        })
      );
      // console.log('DeleteData',setCartData)
    }
    return () => {
      setDeleteData(false);
    };
  }, [deleteState, cartData, deleteData]);
  {console.log(deleteData);}
  {console.log(cartData);}
  return (
    <>
      <Grid container spacing={2}>
        {cartData ? (
          cartData.map((data, index) => {
            return (
              <Grid
                key={index}
                container
                item
                xs={3}
                spacing={3}
                style={{ marginTop: 80 }}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`https://electronic-ecommerce.herokuapp.com/${data.image}`}
                    />
                    {/* {console.log(image)} */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                      </Typography>
                      <Typography variant="h6" component="h4">
                        {data.category[1]}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {data.price}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Stock:{data.stock}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions onClick={() => deleteCart(data)}>
                    {/* <CardActions > */}
                    <Button size="small" color="primary">
                      delete cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h2 className={classes.h1}>Loading!</h2>
        )}
      </Grid>
      <h1>
        total:<span></span>
      </h1>
    </>
  );
}

export default Cart;
