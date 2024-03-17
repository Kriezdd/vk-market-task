import React from 'react';
import { decreaseQuantity, increaseQuantity, remove, setTotals } from "../cartSlice";
import { useAppDispatch } from "../../../app/hooks";
import { Button, Card, Flex, Image, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Product } from "../../../types/types";
import "./ProductItem.css";

const ProductItem = ({ ...product }: Product) => {
  const dispatch = useAppDispatch();
  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity({id}));
    dispatch(setTotals());
  }

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity({id}));
    dispatch(setTotals());
  }

  const handleRemove = (id: number) => {
    dispatch(remove({id}));
    dispatch(setTotals());
  }

  const totalProductPrice = product.price * product.quantity;

  return (
    <Card>
      <Flex justify={"space-between"} gap="large">
        <Flex gap="large">
          <Image width={200} src={product.thumbnail} alt={product.title} className="ProductItem__image"></Image>
          <Flex vertical={true} gap="large">
            <Typography.Title level={3}>{product.title}</Typography.Title>
            <Typography.Text >Цена за шт: {product.price} руб.</Typography.Text>
          </Flex>
        </Flex>
        <Flex vertical={true} align="end" gap="small">
          <Flex justify="space-between" gap="small" className="ProductItem__quantity">
            <Button onClick={() => handleIncreaseQuantity(product.id)} disabled={product.quantity === 10}>+</Button>
            <Typography.Title level={3}>{product.quantity}</Typography.Title>
            <Button onClick={() => handleDecreaseQuantity(product.id)} disabled={product.quantity === 1}>-</Button>
          </Flex>
          <Typography.Title level={5}>{totalProductPrice} руб.</Typography.Title>
          <Button danger icon={<DeleteOutlined/>} onClick={() => handleRemove(product.id)}>Удалить</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductItem;