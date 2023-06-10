import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import axios from 'axios';
import './Custom.css';

function ProfilePage() {
  const [editMode, setEditMode] = useState({field: null, value: ''});
  const location = useLocation();
//   const [userInfo, setUserInfo] = useState(location.state?.userInfo || {});
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(response => setUserInfo(response.data))
      .catch(error => console.error('Error fetching user info:', error));
  }, []);
  
  

  const handleEditClick = (field) => {
    setEditMode({field, value: userInfo[field]});
  };

  const handleEditChange = (e) => {
    setEditMode({...editMode, value: e.target.value});
  };

  const handleSaveClick = () => {
    const infoType = editMode.field;
    axios.put('http://localhost:5000/api/user', { [infoType]: editMode.value })
      .then(response => {
        if (response.data.success) {
          setUserInfo({...userInfo, [infoType]: editMode.value});
        }
        setEditMode({field: null, value: ''});
      })
      .catch(error => {
        console.error('Error updating data: ', error);
        setEditMode({field: null, value: ''});
      });
  };  

  if (!userInfo) {
    return 'Loading...';
  }

  return (
    <Box style={{ background: 'linear-gradient(45deg, #ffa500, #ff4500)', minHeight: '100vh' }} padding={5}>
      <Box className="user-info" paddingLeft="5" paddingRight="5" color="white">
        <Heading as="h1" size="xl" marginBottom="5" textAlign="center" marginTop="10">{`${userInfo.name}'s Scholar Profile`}</Heading>
        <Flex direction="row" justify="center" marginTop="10">
          <Accordion allowMultiple defaultIndex={[]} width="65%" color="black">
            <AccordionItem>
              <h2>
                <AccordionButton className="accordion-button">
                  <Box flex="1" textAlign="left" fontSize="lg" color="white">
                    Education
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="white" color="black">
                {editMode.field === 'education'
                  ? <>
                      <Input value={editMode.value} onChange={handleEditChange} />
                      <Button onClick={handleSaveClick}>Save</Button>
                    </>
                  : userInfo.education.map((edus, index) => (
                      <Text key={index} fontSize="lg">{edus}</Text>
                    ))}
                <IconButton aria-label="Edit button" icon={<EditIcon />} onClick={() => handleEditClick('education')} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton className="accordion-button">
                  <Box flex="1" textAlign="left" fontSize="lg" color="white">
                    Positions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="white" color="black">
                {editMode.field === 'positions'
                  ? <>
                      <Input value={editMode.value} onChange={handleEditChange} />
                      <Button onClick={handleSaveClick}>Save</Button>
                    </>
                  : userInfo.positions.map((pos, index) => (
                      <Text key={index} fontSize="lg">{pos}</Text>
                    ))}
                <IconButton aria-label="Edit button" icon={<EditIcon />} onClick={() => handleEditClick('positions')} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton className="accordion-button">
                  <Box flex="1" textAlign="left" fontSize="lg" color="white">
                    Publications
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="white" color="black">
                {editMode.field === 'publications'
                  ? <>
                      <Input value={editMode.value} onChange={handleEditChange} />
                      <Button onClick={handleSaveClick}>Save</Button>
                    </>
                  : userInfo.publications.map((pubs, index) => (
                      <Text key={index} fontSize="lg">{pubs}</Text>
                    ))}
                <IconButton aria-label="Edit button" icon={<EditIcon />} onClick={() => handleEditClick('publications')} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>
    </Box>
  );    
}

export default ProfilePage;
