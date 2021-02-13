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
          <Link href="/#home">
            <Image src="/logo.png" w={32} />
          </Link>
        </Box>
        <Flex justifyContent="space-between" width="500px" mr={5}>
          <Link href="/#about">About</Link>
          <Link href="/#business">Business</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#partners">Partners</Link>
          <Link href="/#contact">Contact</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
