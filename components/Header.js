import { Flex, Box, Link, Text, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent="center">
      <Flex
        position="fixed"
        justifyContent="space-between"
        w="1200px"
        h="80px"
        alignItems="center"
      >
        <Box ml={5}>
          <Image src="/logo.png" w={32} />
        </Box>
        <Flex justifyContent="space-between" width="500px" mr={5}>
          <Link>About</Link>
          <Link>Business</Link>
          <Link>Products</Link>
          <Link>Partners</Link>
          <Link>Contact</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
