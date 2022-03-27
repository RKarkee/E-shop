// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductComponent from "./ProductComponent";
// import axios from "axios";
// import { Grid, makeStyles } from "@material-ui/core";
// import { setProducts } from "../redux/actions/ProductActions";
// const useStyles = makeStyles({});
// function ProductListing() {
//   const classes = useStyles();
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch();

//   // console.log(products);

//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
//       .catch((err) => {
//         console.log("Err", err);
//       });
//     dispatch(setProducts(response.data));
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   // console.log("Products:",products)
//   return <ProductComponent />;
// }

// export default ProductListing;
