import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex alignItems="center" flexDir="column">
      <Header />
      <Box bg="purple.100" w="100%" h="100vh">
        <SimpleGrid mt="80px" h="calc(100vh - 80px)" columns={2} spacing={0}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box w="300px">
              <Text fontWeight="bold" fontSize="5xl">
                Workspace that inspire
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </Text>
            </Box>
          </Flex>
          <Box />
        </SimpleGrid>
        <Box />
      </Box>
      <Flex w="1200px" justifyContent="center" bg="red.100" h="500px" />
      <Box bg="blue.100" h="500px" w="1200px" />
      <Box bg="yellow.100" h="500px" w="1200px" />
    </Flex>
  );
}
