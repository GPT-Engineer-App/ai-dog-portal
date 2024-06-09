import { Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box mb={8}>
        <Link to="/">Home</Link>
      </Box>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Contact Us</Heading>
        <Text fontSize="lg" textAlign="center">
          We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
        </Text>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default Contact;