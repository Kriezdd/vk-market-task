import React, { useEffect } from 'react';
import { useGetCartQuery } from "../cartApiSlice";
import { setCart, setTotals} from "../cartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductItem from "../ProductItem/ProductItem";
import { List, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Cart.css";


const Cart = () => {
  const {data, error, isLoading} = useGetCartQuery();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(setCart({products: [], isLoading: true, error: undefined}));
    } else if (error) {
      dispatch(setCart({products: [], isLoading: false, error}));
    } else if (data) {
      dispatch(setCart({products: data.products, isLoading: false, error: undefined}));
      dispatch(setTotals());
    }
  }, [isLoading, error, data, dispatch]);

  const cartSelector = useAppSelector((state) => state.cart);


  return (
    <div className="Cart">

      {cartSelector.error ? (
        <Typography.Text>Oh no, there was an error</Typography.Text>
      ) : cartSelector.isLoading ? (
        <Spin fullscreen={ true } indicator={<LoadingOutlined style={{ fontSize: 56 }} spin />}/>
      ) : cartSelector.products ? (
        <List>
          {cartSelector.products.map(item => (
            <ProductItem key={ item.id } { ...item } />
          ))}
        </List>
      ) : null}
    </div>
  );
};

export default Cart;
