import { Grid } from "@chakra-ui/react";
import CarCard from "./CarCard";
import Car from "../entities/Car";
import ferrarif8 from "../assets/f8png.avif";

const CarGrid = () => {
  //const { data, error, isFetching } = useCars();

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
    thumbnail: ferrarif8,
  };

  //if (error) throw new Error();

  //if (isFetching) return <Spinner />;
  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: " 1fr 1fr 1fr" }}
    >
      {/* {data?.data.map((car) => (
        <CarCard car={car} key={car.id} />
      ))} */}
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
    </Grid>
  );
};

export default CarGrid;
