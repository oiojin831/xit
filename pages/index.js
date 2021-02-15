import { Flex, Box, Link, Text, Image } from "@chakra-ui/react";

import Hero from "../components/Hero";
import About from "../components/About";
import Business from "../components/Business";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box as="body">
      <Header />
      <Flex flexDir="column">
        <Hero />
        <About />
        <Business />
        <Products />
        <Partners />
        <Contact />
      </Flex>
      <Footer />
    </Box>
  );
}
