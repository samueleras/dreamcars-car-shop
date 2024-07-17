import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useShoppingCartStore from "../stores/shoppingCartStore";
import NumberBadge from "./NumberBadge";

const ShoppingCartButton = () => {
  const { getOverallItemCount } = useShoppingCartStore();

  return (
    <ChakraLink as={Link} to="/shoppingcart">
      <Button background="none" position="relative">
        <FaCartShopping size="1.3rem" />
        {getOverallItemCount() > 0 && (
          <NumberBadge count={getOverallItemCount()} />
        )}
      </Button>
    </ChakraLink>
  );
};

export default ShoppingCartButton;