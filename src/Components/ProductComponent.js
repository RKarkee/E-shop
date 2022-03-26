import React from "react";
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

const useStyles = makeStyles((theme)=>({
  card: {
    maxWidth: 400,
    maxHeight: 400,
    padding:theme.spacing(2),
  },
  media: {
    height: 140,
  },
  grid:{

  }
}));
// const Products = () => {};

function ProductComponent() {
  const classes = useStyles();
  const products = useSelector(
    (state) => state?.allproducts?.products?.data?.product);
  console.log(products);
  const renderList = products?.map((product) => {
    const { id, name, image, price, stock, category } = product;
    // console.log(product)
    return (
      <Grid container spacing={3} style={{marginTop:65}}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`https://electronic-ecommerce.herokuapp.com/${image}`}
              />
              {/* {console.log(image)} */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="h6" component="h4">
                  {category[1]}
                </Typography>
                <Typography variant="body2" component="p">
                  {price}
                </Typography>
                <Typography variant="body2" component="p">
                  Stock:{stock}
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
        </Grid>
    );
  });

  return <>{renderList}</>;
}

export default ProductComponent;
