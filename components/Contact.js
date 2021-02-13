import {
  Avatar,
  Center,
  Heading,
  Flex,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const Contact = () => (
  <Flex id="contact" flexDir="column" justify="center" align="center" >
    <Box>
      <Heading>Contact</Heading>
      <Center>
        <SimpleGrid w="1200px" columns={2} spacing={24} m={6}>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={8} />
            <Box>
              <Heading size="md">Email</Heading>
              <Text>oioijin831@gmaidl.com</Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={8} />
            <Box>
              <Heading size="md">Email</Heading>
              <Text>oioijin831@gmaidl.com</Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={8} />
            <Box>
              <Heading size="md">Email</Heading>
              <Text>oioijin831@gmaidl.com</Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={8} />
            <Box>
              <Heading size="md">Email</Heading>
              <Text>oioijin831@gmaidl.com</Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Center>
    </Box>
  </Flex>
);

export default Contact;
