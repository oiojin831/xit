import {
  Grid,
  GridItem,
  Heading,
  Flex,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

const Partners = () => (
  <Flex id="partners" align="center" my={20}>
    <Box width="100%">
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Flex flexDir="column" justify="center" my={12}>
            <Heading >
              Partners
            </Heading>
            <Text mt={3}>이응진 천재님 찬양하세 이응진 천재님 찬양하세</Text>
          </Flex>
        </GridItem>
        <GridItem colStart={3} colEnd={7}>
          <SimpleGrid w="100%" columns={7} spacing={10} >
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
            <Image
              width={120}
              height={50}
              quality={100}
              src="/samsung.png"
              alt="semi"
              layout="responsive"
            />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  </Flex>
);

export default Partners;
