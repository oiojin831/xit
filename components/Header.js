import { Flex, Box, Link, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      zIndex="100"
      position="fixed"
      left="50%"
      transform="translate(-50%, 0)"
    >
      <Flex w="1200px" h="80px" justify="space-between" align="center">
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
    </Box>
  );
};

export default Header;
