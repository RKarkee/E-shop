import React, { useState, useEffect, useLayoutEffect } from "react";
// import ProductComponent from './ProductComponent'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles } from "@material-ui/core";
// import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    maxHeight: 400,
    padding: theme.spacing(2),
    margin: theme.spacing(5),
  },
  media: {
    height: 140,
  },
  grid: {
    marginTop: 70,
    flexGrow: 2,
  },
}));
// const Products = () => {};

function ProductComponent({ returnData }) {
  const classes = useStyles();
  const [allData, setAllData] = useState();
  const [returnDatas, setReturnDatas] = useState();
  const [clicked, setClicked] = useState(false);

  const addToCart = (data) => {
    setReturnDatas(data);
  };

  useEffect(() => {
    returnData(returnDatas);
    return () => {};
  }, [clicked, returnDatas, returnData]);

  async function getProducts() {
    await fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          setAllData(response.data.product);
        }
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getProducts();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Grid container spacing={2}>
      {allData ? (
        allData?.map((data, index) => {
          return (
            <Grid
              key={index}
              container
              item
              xs={12}
              md={4}
              spacing={3}
              style={{ marginTop: 80 }}
            >
              <Card key={index} className={classes.card}>
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
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </Grid>
  );
}

export default ProductComponent;
