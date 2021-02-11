import { Center, Heading, Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Flex alignItems="center" flexDir="column">
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
      <Flex flexDir="column" alignItems="center">
        <Flex justifyContent="space-around" width="1200px" my={20}>
          <Image
            width={500}
            height={500}
            quality={100}
            src="/semi.jpg"
            alt="semi"
          />
          <Flex
            justify="center"
            align="center"
            flexDir="column"
            h="500px"
            width="500px"
          >
            <Box>
              <Heading>About</Heading>
              <Text fontSize="lg" mt={8} lineHeight="1.9">
                엑스아이티는 2006년 설립되어 대략 15년간 성장하여 IT 소재 전문
                기업으로 자리매김 하였습니다. 현재는 IT 산업이 발전함에 따라
                반도체 유통 혁신을 통해 더불어 성장하려 노력하고 있습니다.
                앞으로 고객과 더불어 성장하는 회사롤 발전하기 위해 제품 유통을
                넘어 제조까지 다양한 영역으로 진출하여 사업을 확장시켜 나갈
                것입니다. 더 큰 부가가치와 만족을 고객에게 제공하기 위해
                노력하고 있으며, 지금까지 축적한 기술과 경험을 바탕으로 더욱
                다양한 영역에서 제품과 서비스를 창출하고자 합니다. 기술적으로
                차별화된 다양한 제품과 솔루션을 고객에게 적시 공급함으로써
                앞으로도 고객의 안정적인 성장과 발전에 최대한 기여할 것입니다.
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          width="1000px"
          my={20}
        >
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
      </Flex>
    </>
  );
}
