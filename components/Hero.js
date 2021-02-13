import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import Header from "./Header";

const Hero = () => (
  <Flex id="home" alignItems="center" flexDir="column">
    <Header />
    <Box position="relative" w="100vw" h="100vh" zIndex="-100">
      <Image
        layout="fill"
        objectFit="cover"
        quality={100}
        src="/bgImg.jpg"
        alt="xit building"
      />
      <SimpleGrid
        position="relative"
        mt="80px"
        h="calc(100vh - 80px)"
        columns={2}
        spacing={0}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box w="300px">
            <Text fontWeight="bold" fontSize="5xl">
              Workspace that inspire
            </Text>
            <Text>odio in et, lectus sit lorem id integer.</Text>
          </Box>
        </Flex>
        <Box />
      </SimpleGrid>
    </Box>
  </Flex>
);

export default Hero;
