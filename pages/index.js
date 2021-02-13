import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import About from "../components/About";
import Business from "../components/Business";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Box width="1200px" margin=" 0 auto">
        <About />
        <Business />
      </Box>
      <Box bg="gray.100" py={12}>
        <Box width="1200px" margin="0 auto">
          <Products />
        </Box>
      </Box>
      <Box width="1200px" margin=" 0 auto">
        <Partners />
      </Box>
      <Box bg="gray.100" py={12} >
        <Box width="1200px" margin="0 auto">
          <Contact />
        </Box>
      </Box>
      <Box bg="black" color="white" py={10}>
        <Box width="1200px" margin=" 0 auto">
          <Footer />
        </Box>
      </Box>
    </>
  );
}
