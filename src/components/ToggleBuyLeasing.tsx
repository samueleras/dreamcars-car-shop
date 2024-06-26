import {
  Button,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import useCarQueryStore from "../carquery/store";

const ToggleBuyLeasing = () => {
  const {
    carQuery: { buyOrLease },
    toggleBuyOrLease,
  } = useCarQueryStore();

  return (
    <HStack w="10rem" gap={5}>
      <Button
        onClick={() => buyOrLease === "lease" && toggleBuyOrLease()}
        variant="ghost"
        color={buyOrLease === "buy" ? "red.600" : ""}
      >
        Buy
      </Button>
      <Slider
        defaultValue={0}
        min={0}
        max={1}
        step={1}
        onChange={toggleBuyOrLease}
        value={buyOrLease === "buy" ? 0 : 1}
      >
        <SliderTrack bg="red.600">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={4} boxShadow="0 0 3px black" />
      </Slider>
      <Button
        onClick={() => buyOrLease === "buy" && toggleBuyOrLease()}
        variant="ghost"
        color={buyOrLease === "lease" ? "red.600" : ""}
      >
        Lease
      </Button>
    </HStack>
  );
};

export default ToggleBuyLeasing;
