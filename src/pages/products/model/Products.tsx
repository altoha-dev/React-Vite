import { FC } from "react";
import { products } from "./Product";
import { Card } from "../../../shared/ui/Card";
import { Typography } from "../../../shared/ui/Typography";
import { Link } from "@tanstack/react-router";
import { Button } from "../../../shared/ui/Button";
import { ProductQuerySearch } from "../../../routes/products";

export const Products: FC<ProductQuerySearch> = function Products(props) {
  const list = products.filter((item)=>
    item.price >= (props.from ?? item.price) &&
    item.price <= (props.to ?? item.price) )
  .map((item) => (
    <li key={item.id.toString()}>
      <Card>
        <Typography size={20} align="center">
          {item.name}
        </Typography>
        <Link
          to="/products/$productID"
          params={{ productID: item.id.toString() }}
        >
            <Typography align="center">
            <Button mode="dark">{"GO to"}</Button>
            </Typography>
          
        </Link>
      </Card>
    </li>
  ));
  return <ul>{list}</ul>;
};
