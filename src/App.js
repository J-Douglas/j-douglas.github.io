import ProfilePic from "./img/WebProfilePic.jpg";
import Resume from "./doc/JackDouglasResume.pdf"
import './App.css';
import { ChakraProvider, Card, CardHeader, CardBody, Center, CardFooter, Image, Stack, Heading, Text, Button, background, Box, Link, Icon, HStack, VStack, extendTheme } from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiGooglescholar } from 'react-icons/si';
import { FaFileDownload } from 'react-icons/fa';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg:'yellow.100'
      }
    })
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w='100%' h='100%' bgGradient='linear(red.200 0%, orange.100 50%, yellow.100 100%)'>
        <Stack spacing='3'>
          {['elevated'].map((variant) => (
            <Center>
              <Card key={variant} bg='white' variant={variant} width="100%" maxW="750px" margin='20px'>
                <Center>
                  <Image
                    width="50%"
                    maxW="200px"
                    src={ProfilePic}
                    alt='Profile Pic'
                    borderRadius='lg'
                  />
                </Center>
                <CardHeader paddingBottom={'0px'}>
                  <VStack spacing='5'>
                    <Heading size='2xl'> Jack Douglas </Heading>
                    <Center>
                      <HStack spacing='4'>
                        <Link href="https://www.linkedin.com/in/j-douglas/" ><Icon color={"blue.400"} boxSize={6} as={SiLinkedin}/></Link>
                        <Link href={Resume} target="_blank"><Icon color={"orange.400"} boxSize={6} as={FaFileDownload}/></Link> 
                        <Link href="https://github.com/J-Douglas"><Icon boxSize={6} as={SiGithub}/></Link> 
                        <Link href="https://scholar.google.ca/citations?hl=en&user=X-s3kzUAAAAJ#d=gs_hdr_drw&t=1672643914810"><Icon color={"blue.500"} boxSize={6} as={SiGooglescholar}/></Link> 
                      </HStack>
                    </Center>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <Text> 
                    Hey there! 
                    I'm a 4A software engineering student at the University of Waterloo. 
                    I am currently working at <b>Apple</b> as an <b>AI/ML intern</b>. Previously, I have worked on distributed systems in autonomous vehicles at <b>NVIDIA</b>, Ethereum transaction indexers at <b>BitGo</b>, and synchronizing microservices at <b>BlackBerry</b>.
                  </Text>
                  <br></br>
                  <Text>
                    I researched with fellow Waterloo undergrad Jimmy Di on <b>adversarial machine unlearning attacks</b> on image classifiers under Professor Gautam Kamath and Postdoc Ayush Sekhari's supervision. 
                    As well, I am a <b>lecturer</b> and <b>president</b> of the <b>UWaterloo Data Science Club</b>.  
                  </Text>
                  <br></br>
                  <Text>
                    I am currently looking for internship and research opportunities in <b>May 2023 - December 2023</b>. 
                    If my experience interests you, feel free to reach out at <b>jack.douglas [at] uwaterloo [dot] edu</b>!
                  </Text>
                </CardBody>
              </Card>
            </Center>
          ))}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
