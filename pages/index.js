import { Flex, Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";
import About from "../components/About";
import Business from "../components/Business";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Box as="body">
        <Header />
        <Flex flexDir="column" align="center">
          <Hero />
          <About />
          <Business />
          <Products />
          <Partners />
          <Contact />
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
