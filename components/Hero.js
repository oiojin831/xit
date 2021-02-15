import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

// image를 자식으로 가지기위해 box postion이 relative가 되야한다.
// simplegrid는 image위에 있기위헤 relative가 되야한다.
const Hero = () => (
  <Box pt="80px" height="100vh" width="100vw" position="relative">
    <Image
      src="/bgImg.jpg"
      alt="xit building"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <SimpleGrid
      h="calc(100vh - 80px)"
      columns={2}
      spacing={0}
      position="relative"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
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
);

export default Hero;
