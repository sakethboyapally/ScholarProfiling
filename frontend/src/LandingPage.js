import React, { useState } from 'react';
import { Box, Heading, Input, Button, Flex, List, ListItem, Text, Spacer} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No CV selected");
    const [url, setUrl] = useState("");
    const [urls, setUrls] = useState([]);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0] ? e.target.files[0].name : "No CV selected");
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleAddUrl = () => {
        setUrls(prevUrls => [...prevUrls, url]);
        setUrl(""); 
    }

    const handleSubmit = () => {
        const userInfo = {
            // Populate this with actual data
        };
  
        navigate('/profile', { state: { userInfo } });
    }


    return (
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100vh"
          padding="10"
          style={{ background: 'linear-gradient(45deg, #ffa500, #ff4500)' }}
        >
          <Text fontSize="3xl" marginBottom="8" color="white">Get started building your personalized Scholar Profile!</Text>
          <Flex direction="row" justify="center" align="center" width="100%">
            <Spacer />
            <Box width="md" borderWidth="1px" borderRadius="lg" padding="5" backgroundColor="#ECECEC">
              {/* <Heading as="h2" size="md" marginBottom="5" textAlign="center">Extract Info</Heading> */}
              <Input type="file" hidden id="file-upload" onChange={handleFileChange} />
              <Flex alignItems="center" marginBottom="5">
                <Button as="label" htmlFor="file-upload" colorScheme="orange" _hover={{bg: "orange.700"}}>Add CV</Button>
                <Text ml="4">{fileName}</Text>
              </Flex>
              <Flex marginBottom="5">
                <Input type="text" placeholder="Enter URL..." value={url} onChange={handleUrlChange} />
                <Button colorScheme="orange" onClick={handleAddUrl} _hover={{bg: "orange.700"}}>Add URL</Button>
              </Flex>
              <List spacing={3}>
                {urls.map((url, index) => (
                  <ListItem key={index}>• {url}</ListItem>
                ))}
              </List>
              <Flex justifyContent="center" marginTop="5">
                <Button colorScheme="teal" onClick={handleSubmit} _hover={{bg: "teal.700"}}>Generate Profile</Button>
              </Flex>
            </Box>
            <Spacer />
          </Flex>
        </Flex>
    );
      
      
}

export default LandingPage;
