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

//TODO: get file names from directory
const logos = [
  "/logos/amd.png",
  "/logos/analog.png",
  "/logos/conexant.png",
  "/logos/fairchild.png",
  "/logos/fujitsu.png",
  "/logos/hitachi.png",
  "/logos/intel.png",
  "/logos/microna.png",
  "/logos/nationalsemiconductor.png",
  "/logos/nec.png",
  "/logos/philips.png",
  "/logos/renesas.png",
  "/logos/samsung.png",
  "/logos/sharp.png",
  "/logos/sk.png",
  "/logos/sst.png",
  "/logos/st.png",
  "/logos/tms.png",
  "/logos/toshiba.png",
];

const Partners = () => (
  <Flex id="partners" align="center" pt="80px" my={20}>
    <Box width="1200px">
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Flex flexDir="column" justify="center" my={12}>
            <Heading>Partners</Heading>
            <Text mt={3}>저희와 함께 성장해나갈 파트너사들입니다.</Text>
          </Flex>
        </GridItem>
        <GridItem colStart={3} colEnd={7}>
          <SimpleGrid w="100%" columns={6} spacing={10}>
            {logos.map((logo) => {
              return (
                <Image
                  width={400}
                  height={100}
                  quality={100}
                  src={logo}
                  alt="semi"
                  layout="responsive"
                />
              );
            })}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  </Flex>
);

export default Partners;
