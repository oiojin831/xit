import {
  Center,
  Heading,
  Flex,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

const Business = () => (
  <Flex id="business" flexDir="column" justify="center" align="center" my={20}>
    <Box>
      <Heading>Business Area</Heading>
      <Center>
        <SimpleGrid w="1200px" columns={2} spacing={24} mt={6}>
          <Box>
            <Heading as="h2" size="md" my={6}>
              제품개발 서포트 -{" "}
              <Box as="span" fontWeight="normal">
                New lopping video app
              </Box>
            </Heading>
            <Image
              width={500}
              height={375}
              quality={100}
              layout="responsive"
              src="/img1.jpg"
              alt="semi"
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" my={6}>
              부품 대치 적용 -{" "}
              <Box as="span" fontWeight="normal">
                Pitch deck design
              </Box>
            </Heading>
            <Image
              width={500}
              height={375}
              quality={100}
              src="/img2.jpg"
              alt="semi"
              layout="responsive"
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" my={6}>
              턴키방식 영업 -{" "}
              <Box as="span" fontWeight="normal">
                Track your sales
              </Box>
            </Heading>
            <Image
              width={500}
              height={375}
              quality={100}
              layout="responsive"
              src="/img3.jpg"
              alt="semi"
            />
          </Box>
          <Box>
            <Heading as="h2" size="md" my={6}>
              해외 부품 소싱 -{" "}
              <Box as="span" fontWeight="normal">
                Augmented reality
              </Box>
            </Heading>
            <Image
              layout="responsive"
              width={500}
              height={375}
              quality={100}
              src="/img4.jpg"
              alt="semi"
            />
          </Box>
        </SimpleGrid>
      </Center>
    </Box>
  </Flex>
);

export default Business
