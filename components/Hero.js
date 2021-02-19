import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

// image를 자식으로 가지기위해 box postion이 relative가 되야한다.
// simplegrid는 image위에 있기위헤 relative가 되야한다.
const Hero = () => (
  <Box id="home" pt="80px" height="100vh" width="100vw" position="relative">
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
          <Text fontWeight="bold" fontSize="6xl">
            X-scale IT
          </Text>
          <Text>최고의 제품과 서비스로 혁신을 주도.</Text>
          <Text>IT 업계 무한한 성장에 앞장서 나가겠습니다.</Text>
        </Box>
      </Flex>
      <Box />
    </SimpleGrid>
  </Box>
);

export default Hero;
