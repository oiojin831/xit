import { Center, Heading, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const businesses = [
  {
    title: "제품개발 서포트",
    sub: "Support product develop",
    url: "/bus1.png",
  },
  { title: "부품 대치 적용", sub: " Apply part replacement", url: "/bus2.png" },
  { title: "턴키방식 영업", sub: "Trunkey salse", url: "/bus3.png" },
  {
    title: "해외 부품 소싱",
    sub: "Overseas component sourcing",
    url: "/bus4.png",
  },
];

const Business = () => (
  <Flex id="business" pt="80px" minH="100vh" flexDir="column" my={20}>
    <Box>
      <Heading>Business Area</Heading>
      <Center>
        <SimpleGrid w="1200px" columns={2} spacing={24} mt={6}>
          {businesses.map((bus) => {
            return (
              <Box>
                <Heading as="h2" size="md" my={6}>
                  {bus.title}
                  <Box as="span" fontWeight="normal">
                    {` - ${bus.sub}`}
                  </Box>
                </Heading>
                <Image
                  width={500}
                  height={375}
                  quality={100}
                  layout="responsive"
                  src={bus.url}
                  alt={bus.url}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>
    </Box>
  </Flex>
);

export default Business;
