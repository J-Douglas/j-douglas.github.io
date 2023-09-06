import ProfilePic from "./img/WebProfilePic.jpg";
import SEWebRing from "./img/sewebring.png"
import Resume from "./doc/JackDouglasResume.pdf"
import './App.css';
import { ChakraProvider, Card, CardHeader, CardBody, Center, Image, Stack, Heading, Text, Box, Link, Icon, HStack, VStack, extendTheme } from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiGooglescholar } from 'react-icons/si';
import { FaFileDownload } from 'react-icons/fa';
import ReactGA from 'react-ga';
import useAnalyticsEventTracker from './Analytics'

const TRACKING_ID = "UA-111544457-1";
ReactGA.initialize(TRACKING_ID);

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
  const gaEventTracker = useAnalyticsEventTracker('Links');
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
                        <Link onClick={()=>gaEventTracker('LinkedIn')} href="https://www.linkedin.com/in/j-douglas/" target="_blank"><Icon color={"blue.400"} boxSize={6} as={SiLinkedin}/></Link>
                        <Link onClick={()=>gaEventTracker('Resume')} href={Resume} target="_blank"><Icon color={"orange.400"} boxSize={6} as={FaFileDownload}/></Link> 
                        <Link onClick={()=>gaEventTracker('GitHub')} href="https://github.com/J-Douglas" target="_blank"><Icon boxSize={6} as={SiGithub}/></Link> 
                        <Link onClick={()=>gaEventTracker('Google Scholar')} href="https://scholar.google.ca/citations?hl=en&user=X-s3kzUAAAAJ#d=gs_hdr_drw&t=1672643914810" target="_blank"><Icon color={"blue.500"} boxSize={6} as={SiGooglescholar}/></Link>
                        <Link onClick={()=>gaEventTracker('SE Web Ring')} href="https://se-webring.xyz/" target="_blank"><Image width={'24px'} height={'30px'} src={SEWebRing} alt='SE Web Ring'/></Link> 
                      </HStack>
                    </Center>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <Text> 
                    Hey there! 
                    I'm a 4B software engineering student at the University of Waterloo. I have had internship experiences 
                    Most recently, I worked at <b>Apple</b> as an <b>AI/ML intern</b> on a triaging service for Siri pipeline failures. Prior, I have worked on distributed systems in autonomous vehicles at <b>NVIDIA</b>, Ethereum transaction indexers at <b>BitGo</b>, and synchronizing microservices at <b>BlackBerry</b>.
                  </Text>
                  <br></br>
                  <Text>
                    I researched with fellow Waterloo student Jimmy Di on <b>novel adversarial machine unlearning attacks</b> under Professor Gautam Kamath and Postdoc Ayush Sekhari's supervision. 
                    As well, I am a <b>lecturer</b> and <b>former president</b> of the <b>UWaterloo Data Science Club</b>.  
                  </Text>
                  <br></br>
                  <Text>
                    I am currently looking for full-time and research opportunities! 
                    If my experience interests you, feel free to reach out at <b>jack.douglas [at] uwaterloo [dot] ca</b>!
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
