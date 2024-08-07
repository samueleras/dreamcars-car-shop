import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import ferrarif8png from "../assets/f8png.avif";
import ferrarisf8 from "../assets/ferrarif8.jpg";
import ferrarisf90 from "../assets/ferrarisf90.avif";
import CartCheckout from "../components/CartCheckout";
import CartCouponCode from "../components/CartCouponCode";
import CartShipping from "../components/CartShipping";
import ShoppingCartItemBox from "../components/ShoppingCartItemBox";
import Car from "../entities/Car";
import useShoppingCartStore from "../stores/shoppingCartStore";

const ShoppingCartPage = () => {
  const { items, overallItemCount } = useShoppingCartStore();

  let car: Car = {
    id: 1,
    brand: "Ferrari",
    model: "F8",
    type: "coupe",
    price: 266661,
    leasing: 1200,
    passengerCount: 2,
    doorCount: 2,
    gearbox: "automatic",
    horsepower: 720,
    electric: false,
    shortDescription: "A Celebration of Excellence",
    fuelConsumption: "7,3 l/100 km",
    emissions: "167 g/km",
    emissionClass: "G",
    description:
      "Vor etwa 20 Jahren begann Ferrari mit der Produktion von Sondermodellen, die die Performance der Serienbaureihen in eine noch höhere Dimension befördern. Viele Sondermodelle, wie der 488 Pista und der 812 Competizione, wurden Teil der Legende der Marke aus Maranello. Gleichzeitig startete das Cavallino Rampante das XX-Programm, das einer ausgewählten Gruppe erfahrener Piloten aus dem Kundenkreis die Möglichkeit bietet, sich auf der Rennstrecke als echte Testfahrer am Steuer von Modellen wie dem FXX-K EVO zu bewähren, die nicht für den Straßenverkehr zugelassen sind. Jetzt wurden die Programme zum ersten Mal zusammengeführt: im SF90 XX Spider, dem ersten Ferrari Sondermodell, das auf dem Konzept des XX-Programms basiert und daraus praktisch einen XX mit Straßenzulassung macht. Während der SF90 XX Spider das versenkbare Hardtop des SF90 Spider beibehält, auf dem er basiert, entfesselt er 30 zusätzliche PS und besitzt eine spezifische Softwarelogik und radikal neue Aero-Lösungen, wie einen festen Heckflügel.",
    thumbnail: ferrarisf8,
    png: ferrarif8png,
    images: [ferrarisf8, ferrarif8png, ferrarisf90],
  };

  return (
    <Box padding="2rem" margin="auto" width={{ base: "100%", xl: "80%" }}>
      <Heading size="xl">Shopping Cart</Heading>
      <Text>
        <b>{overallItemCount} items</b> in your cart.
      </Text>
      <Grid
        gap={3}
        gridTemplateColumns={{ base: "1fr", lg: "auto min-content" }}
        alignItems="start"
      >
        <Card marginTop="2rem">
          <CardHeader display={{ base: "none", md: "block" }}>
            <Grid gap={3} gridTemplateColumns="50% 20% 30%">
              <Heading size="md">Product</Heading>
              <Heading size="md" justifySelf="center">
                Quantity
              </Heading>
              <Heading size="md" justifySelf="center">
                Total Price
              </Heading>
            </Grid>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {items.length > 0 ? (
                items.map((item) => (
                  <ShoppingCartItemBox
                    car={car}
                    item={item}
                    key={item.carId + item.buyOrLease}
                  />
                ))
              ) : (
                <Text>There are no products in your cart.</Text>
              )}
            </Stack>
          </CardBody>
        </Card>
        <Card marginTop={{ base: "1rem", lg: "-4rem" }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <CartShipping />
              <CartCouponCode />
              <CartCheckout />
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default ShoppingCartPage;
