//CLONE

import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no koi in your shopping cart, 
      <Link className={classes.link} to="/">
        start catching some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails} gutterBottom>
        <Typography style={{fontWeight: "700"}} variant="h6" gutterBottom>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div style={{display: "flex"}}>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className={classes.toolbar}/>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography style={{fontWeight: "777"}} className={classes.title} variant="h5" gutterBottom>
        Your Shopping Cart!
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
