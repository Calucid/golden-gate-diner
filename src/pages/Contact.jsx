import { Box, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6} color="red.500">
        Contact Golden Gate Diner
      </Heading>

      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Golden Gate Diner</Text>
          <Text>1318 Union Blvd, Allentown, PA 18109, USA</Text>
          <Text>Phone: <Link href="tel:+16104359111" color="cyan.500">(610) 435-9111</Link></Text>
          <Text>Email: <Link href="mailto:info@goldengatediner.com" color="cyan.500">info@goldengatediner.com</Link></Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md" mb={2} color="red.500">Follow Us</Heading>
          <HStack justify="center" spacing={4}>
            <IconButton as={Link} href="https://facebook.com/goldengatediner" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="cyan" />
            <IconButton as={Link} href="https://instagram.com/goldengatediner" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="red" />
            <IconButton as={Link} href="https://twitter.com/goldengatediner" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="cyan" />
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="md" mb={4} color="red.500" textAlign="center">Get in Touch</Heading>
          <VStack spacing={4}>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="red" size="lg">Send Message</Button>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md" mb={4} color="red.500">Our Location</Heading>
          <img 
            src="http://stock.calucid.com/fetch/calucid/golden-gate-diner/map" 
            alt="Golden Gate Diner Location" 
            width="100%" 
            height="300px" 
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;