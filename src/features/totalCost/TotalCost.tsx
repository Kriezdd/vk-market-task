import React from 'react';
import { useAppSelector } from "../../app/hooks";
import { Card, Flex, Typography } from "antd";
import "./TotalCost.css";

const TotalCost = () => {
  const {totalCost, totalQuantity, isLoading} = useAppSelector((state) => state.cart);
  return (
    <Card className="TotalCost">
      {
        isLoading
          ? null
          :
          <Flex vertical={ true } gap="10" align="center">
            <Typography.Title level={3}>Итого {totalCost} руб.</Typography.Title>
            <Typography.Text>Количество товаров: {totalQuantity}</Typography.Text>
          </Flex>
      }
    </Card>
  );
};

export default TotalCost;
