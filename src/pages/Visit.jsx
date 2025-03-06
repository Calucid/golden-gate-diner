import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h1" size="2xl" color="red.500">
          Visit Golden Gate Diner
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/exterior"
          alt="Golden Gate Diner Exterior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Experience the charm of a classic 50's California-style diner right here in Allentown, PA. 
          Enjoy delicious meals in a nostalgic atmosphere with our signature red and cyan color scheme.
        </Text>
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h2" size="xl" color="cyan.500">
          Location & Contact
        </Heading>
        <Text fontSize="lg">
          <strong>Golden Gate Diner</strong>
          <br />
          1318 Union Blvd, Allentown, PA 18109, USA
          <br />
          <Link href="tel:+16104359111" color="red.500">(610) 435-9111</Link>
        </Text>
        <Box width="100%" maxW="800px">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=Golden+Gate+Diner,Allentown,PA`}
          ></iframe>
        </Box>
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h2" size="xl" color="red.500">
          Hours of Operation
        </Heading>
        <Box bg="gray.100" p={4} borderRadius="md" width="100%" maxW="600px">
          <Text fontSize="lg"><strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM</Text>
          <Text fontSize="lg"><strong>Saturday:</strong> 8:00 AM - 10:00 PM</Text>
          <Text fontSize="lg"><strong>Sunday:</strong> 8:00 AM - 8:00 PM</Text>
        </Box>
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h2" size="xl" color="cyan.500">
          See Inside
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/interior"
          alt="Golden Gate Diner Interior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h2" size="xl" color="red.500">
          Explore More
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="cyan.500" fontSize="lg">
            Home
          </Link>
          <Link as={RouterLink} to="/menu" color="cyan.500" fontSize="lg">
            Menu
          </Link>
          <Link as={RouterLink} to="/about" color="cyan.500" fontSize="lg">
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="cyan.500" fontSize="lg">
            Contact
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;