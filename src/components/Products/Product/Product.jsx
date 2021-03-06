// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { AddShoppingCart } from "@material-ui/icons";
// import useStyle from "./styles";

// const Product = ({ product }) => {
//   const classes = useStyle();

//   return (
//     <Card className={classes.root}>
//       <CardMedia
//         className={classes.media}
//         image={product.media.source}
//         title={product.name}
//       />
//       <CardContent>
//         <div className={classes.cardContent}>
//           <Typography variant="h6" gutterBottom>
//             {product.name}
//           </Typography>
//           <Typography variant="h6">
//             {product.price.formatted_with_symbol}
//           </Typography>
//         </div>
//         <Typography
//           dangerouslySetInnerHTML={{ __html: product.description }}
//           variant="body2"
//           color="textSecondary"
//         />
//       </CardContent>
//       <CardActions disableSpacing className={classes.cardActions}>
//         <IconButton aria-label="Add to Cart">
//           <AddShoppingCart />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

// export default Product;


import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div style={{display: "flex", flexDirection: "column"}} className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography style={{fontWeight: "777"}} gutterBottom variant="body1" component="h2">
            Rp {product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body1" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

