import { Box, Heading, Text, Image, VStack, Link, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      {/* Hero Section */}
      <VStack spacing={4} textAlign="center" py={10}>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/retro-diner-exterior" 
          alt="Golden Gate Diner Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md"
        />
        <Heading size="2xl" color="red.500">
          Welcome to Golden Gate Diner
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Step back in time to a classic 50's California diner experience! Located in Allentown, PA, 
          Golden Gate Diner serves up delicious, nostalgic meals in a vibrant retro atmosphere.
        </Text>
      </VStack>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" my={10}>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/retro-diner-interior" 
          alt="Golden Gate Diner Interior" 
          width="100%" 
          maxW="500px" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md"
          mb={{ base: 4, md: 0 }}
        />
        <Box ml={{ md: 6 }}>
          <Heading size="xl" color="cyan.500">Our Story</Heading>
          <Text fontSize="md" mt={2}>
            Since opening our doors, Golden Gate Diner has been a local favorite, known for 
            its friendly service, classic American comfort food, and signature retro charm. 
            Whether you're here for a hearty breakfast, a juicy burger, or a hand-spun milkshake, 
            we bring the flavors of the past to life.
          </Text>
        </Box>
      </Flex>

      {/* Call to Action */}
      <VStack spacing={4} textAlign="center" py={10}>
        <Heading size="lg" color="red.500">Come Visit Us!</Heading>
        <Text fontSize="md">
          Find us at <b>1318 Union Blvd, Allentown, PA 18109</b> or call us at <b>(610) 435-9111</b>.
        </Text>
        <Flex gap={4}>
          <Button as={RouterLink} to="/menu" colorScheme="red">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="cyan">
            Plan Your Visit
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default About;