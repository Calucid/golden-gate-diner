import { Box, Button, Flex, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" minH="100vh" w="100%" p={0} m={0}>
      {/* Hero Section */}
      <Box
        w="100%"
        h={{ base: "80vh", md: "90vh" }}
        bgImage="url('http://stock.calucid.com/fetch/calucid/golden-gate-diner/retro-50s-diner')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4} bg="rgba(255, 255, 255, 0.8)" p={6} borderRadius="md">
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="red.500">
            Welcome to Golden Gate Diner
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} textAlign="center">
            A taste of the 50s with a California twist!
          </Text>
          <Button as={RouterLink} to="/menu" colorScheme="red" size="lg">
            View Our Menu
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        px={6}
        py={12}
        bg="cyan.50"
      >
        <Image
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/retro-diner-interior"
          alt="Diner Interior"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
          mb={{ base: 4, md: 0 }}
        />
        <VStack align="start" spacing={4} maxW="500px" ml={{ md: 6 }}>
          <Text fontSize="2xl" fontWeight="bold" color="red.500">
            About Us
          </Text>
          <Text fontSize="md">
            Step into the past with our classic 50s-style diner! Located in Allentown, PA, we serve up
            delicious meals with a nostalgic flair.
          </Text>
          <Button as={RouterLink} to="/about" colorScheme="cyan">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* Featured Dishes */}
      <Box textAlign="center" py={12} px={6}>
        <Text fontSize="2xl" fontWeight="bold" color="red.500">
          Featured Dishes
        </Text>
        <Flex
          wrap="wrap"
          justify="center"
          mt={6}
          gap={6}
        >
          <Box w="300px">
            <Image
              src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/classic-burger-and-fries"
              alt="Classic Burger and Fries"
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">Classic Burger & Fries</Text>
          </Box>
          <Box w="300px">
            <Image
              src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/milkshake"
              alt="Milkshake"
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">Signature Milkshake</Text>
          </Box>
          <Box w="300px">
            <Image
              src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/pancakes"
              alt="Pancakes"
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">Fluffy Pancakes</Text>
          </Box>
        </Flex>
      </Box>

      {/* Visit Us Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        px={6}
        py={12}
        bg="red.50"
      >
        <VStack align="start" spacing={4} maxW="500px" mb={{ base: 4, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" color="cyan.500">
            Visit Us
          </Text>
          <Text fontSize="md">
            1318 Union Blvd, Allentown, PA 18109, USA
          </Text>
          <Text fontSize="md">Call us: (610) 435-9111</Text>
          <Button as={RouterLink} to="/visit" colorScheme="red">
            Get Directions
          </Button>
        </VStack>
        <Image
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/diner-exterior"
          alt="Diner Exterior"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
          ml={{ md: 6 }}
        />
      </Flex>
    </Box>
  );
};

export default Home;