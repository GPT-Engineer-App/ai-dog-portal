import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaPaw, FaRobot, FaBone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to AI Dog App
          </Heading>
          <Text fontSize="xl">
            The ultimate AI-powered app to take care of your furry friend.
          </Text>
        </Box>
        <Image src="/images/hero-dog.png" alt="Hero Dog" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Flex direction={["column", "row"]} spacing={4} justify="center" align="center" width="100%">
          <Box textAlign="center" p={4} m={2} borderWidth="1px" borderRadius="lg" width={["100%", "30%"]}>
            <FaPaw size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Track Health
            </Heading>
            <Text>
              Monitor your dog's health with our advanced AI algorithms.
            </Text>
          </Box>
          <Box textAlign="center" p={4} m={2} borderWidth="1px" borderRadius="lg" width={["100%", "30%"]}>
            <FaRobot size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Smart Alerts
            </Heading>
            <Text>
              Get notified about your dog's needs in real-time.
            </Text>
          </Box>
          <Box textAlign="center" p={4} m={2} borderWidth="1px" borderRadius="lg" width={["100%", "30%"]}>
            <FaBone size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Personalized Tips
            </Heading>
            <Text>
              Receive tips tailored to your dog's unique profile.
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;