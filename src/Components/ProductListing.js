import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { Grid, makeStyles } from "@material-ui/core";
import {setProducts} from '../redux/actions/ProductActions'
const useStyles = makeStyles({});
function ProductListing() {
  const classes = useStyles();
  const products = useSelector((state) => state);
  const dispatch =useDispatch();

  // console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data))
  };
  useEffect(()=>{
    fetchProducts();
  },[])
  // console.log("Products:",products)
  return (
    
      
      <ProductComponent  />
      
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //     {Array.from(Array(1)).map((_, index) => (
    //       <Grid item xs={2} sm={4} md={4} key={index}>
    //         <ProductComponent />
    //       </Grid>
    //     ))}
    //   </Grid>
    
    
  );
}

export default ProductListing;
