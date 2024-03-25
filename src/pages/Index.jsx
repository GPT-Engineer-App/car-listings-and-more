import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Grid, GridItem, Select, Stack, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch, FaCarSide, FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa";

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    image: "https://images.unsplash.com/photo-1640942468077-cf60c4e3787f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBDYW1yeSUyMDIwMjJ8ZW58MHx8fHwxNzExMzU2NzA4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2021,
    price: 28000,
    image: "https://images.unsplash.com/photo-1611338687599-7b4cb865b254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIb25kYSUyMEFjY29yZCUyMDIwMjF8ZW58MHx8fHwxNzExMzU2NzA4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 45000,
    image: "https://images.unsplash.com/photo-1709769320382-5c8bbb8c4933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGb3JkJTIwTXVzdGFuZyUyMDIwMjN8ZW58MHx8fHwxNzExMzU2NzA4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <Box>
      <Flex bg="blue.500" p={4} color="white" align="center">
        <Heading size="xl">Car Dealership</Heading>
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaCarSide />}>Buy</Button>
          <Button leftIcon={<FaMoneyBillWave />}>Sell</Button>
          <Button leftIcon={<FaExchangeAlt />}>Rent</Button>
        </Stack>
      </Flex>

      <Box p={8}>
        <Heading mb={4}>Featured Cars</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {carData.map((car) => (
            <GridItem key={car.id} onClick={() => handleCarClick(car)} cursor="pointer">
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={car.image} alt={`${car.make} ${car.model}`} />
                <Box p={4}>
                  <Heading size="md">{`${car.make} ${car.model}`}</Heading>
                  <Text>{car.year}</Text>
                  <Text fontWeight="bold">${car.price}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {selectedCar && (
        <Box p={8}>
          <Heading mb={4}>Car Details</Heading>
          <Flex>
            <Image src={selectedCar.image} alt={`${selectedCar.make} ${selectedCar.model}`} mr={8} />
            <Box>
              <Heading size="lg">{`${selectedCar.make} ${selectedCar.model}`}</Heading>
              <Text fontSize="xl">{selectedCar.year}</Text>
              <Text fontSize="2xl" fontWeight="bold">
                ${selectedCar.price}
              </Text>
              <Button mt={4} colorScheme="blue">
                Buy Now
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Index;
