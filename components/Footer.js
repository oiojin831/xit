import { Box, Flex, Link, Divider } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => (
  <Box as="footer" bg="black" color="white" py={20}>
    <Flex flexDir="column" justify="space-between" align="center" h="200px">
      <Link href="/#home">
        <Image
          width={151}
          height={39}
          quality={100}
          src="/footerLogo.png"
          alt="footerlogo"
        />
      </Link>
      <Flex justifyContent="space-between" width="500px">
        <Link href="/#about">About</Link>
        <Link href="/#business">Business</Link>
        <Link href="/#products">Products</Link>
        <Link href="/#partners">Partners</Link>
        <Link href="/#contact">Contact</Link>
      </Flex>
      <Divider w="1200px" />
    </Flex>
  </Box>
);

export default Footer;
