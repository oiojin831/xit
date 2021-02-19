import { Center, Heading, Flex, Text, Box, SimpleGrid } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";

import {
  FaPhoneAlt,
  FaPrint,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => (
  <Flex id="contact" flexDir="column" py="100px">
    <Box>
      <Heading>Contact</Heading>
      <Center>
        <SimpleGrid w="1200px" columns={2} spacing={14} mt={12}>
          <Flex align="center">
            <Icon w={12} h={12} as={FaEnvelope} />
            <Box ml={6}>
              <Heading size="md" mb={2}>
                Email
              </Heading>
              <Text>namjinsoo1@nate.com</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon w={12} h={12} as={FaPhoneAlt} />
            <Box ml={6}>
              <Heading size="md" mb={2}>
                Telephone
              </Heading>
              <Text>010-9003-7792</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon w={12} h={12} as={FaPrint} />
            <Box ml={6}>
              <Heading size="md" mb={2}>
                Fax
              </Heading>
              <Text>02-6956-3685</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon w={12} h={12} as={FaMapMarkerAlt} />
            <Box ml={6}>
              <Heading size="md" mb={2}>
                Location
              </Heading>
              <Text>서울시 서초구 남부순환로 339길 64(현우빌딩 3층)</Text>
              <Text>우)06722</Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Center>
    </Box>
  </Flex>
);

export default Contact;
