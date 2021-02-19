import { Center, Heading, Flex, Text, Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const images = [
  { url: "/product1.png", title: "SRC" },
  { url: "/product2.png", title: "Alpha" },
  { url: "/product3.png", title: "Memory" },
];

const Products = () => (
  <Flex pt="80px" id="products" flexDir="column">
    <Box>
      <Heading>Products</Heading>
      <Text>저희가 취급하고 있는 제품들을 소개합니다.</Text>
      <Center>
        <SimpleGrid w="1200px" columns={3} spacing={24} my={6}>
          {images.map((img) => {
            return (
              <Box position="relative" w="336" h="252">
                <Image
                  width={500}
                  height={375}
                  quality={100}
                  layout="responsive"
                  src={img.url}
                  alt="semi"
                  styles={{ zIndex: 5 }}
                />
                <Flex
                  position="absolute"
                  top={0}
                  left={0}
                  zIndex={10}
                  w={336}
                  h={252}
                  justify="center"
                  align="center"
                >
                  <Heading size="xl" color="white">
                    {img.title}
                  </Heading>
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>
    </Box>
  </Flex>
);
export default Products;
