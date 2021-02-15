import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex flexDir="column" justify="center" align="center">
    <Text>Logo</Text>
    <Flex justifyContent="space-between" width="500px" mr={5}>
      <Link>About</Link>
      <Link>Business</Link>
      <Link>Products</Link>
      <Link>Partners</Link>
      <Link>Contact</Link>
    </Flex>
  </Flex>
);

export default Footer;
