import { Fragment } from "react"
import { Arrowbackicon_6bcaee27016f550eb53aa0b7cfea62b6, Arrowforwardicon_08b652d00f4e93e858dc3ae224737c8a, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Heading_8490ff7903bc070432b0d8a4c5665837, Input_a4ce3bf717fd9fe42a90521059592792, Simplegrid_a981def344368d8b64140429f712e0cb } from "/utils/stateful_components"
import { Box, Center, Divider, Heading, HStack, Image, Link, Progress, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Simplegrid_7c31ac4ad59250c1b3eb3fde20ee6ef7 () {


  return (
    <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={`0.25em`}>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((id, index_46be25bb7e7188ab2ca77bd7b2c8b386) => (
  <Box key={index_46be25bb7e7188ab2ca77bd7b2c8b386} sx={{"maxWidth": "100%"}}>
  <Center>
  <Image src={`/teams/${id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "lightgreen"}}/>
</Center>
</Box>
))}
</SimpleGrid>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"paddingX": "1em", "paddingY": "0.5em", "top": "0", "width": "100%", "position": "sticky", "zIndex": "4", "height": "5%", "borderBottom": "0.25em solid white", "bgImage": "/background/background.jpg"}}>
  <Link as={NextLink} href={`/`}>
  <Text>
  <Text as={`span`} sx={{"fontStyle": "italic"}}>
  {`data`}
</Text>
  <Text as={`span`} sx={{"fontWeight": "bold"}}>
  {`JS`}
</Text>
</Text>
</Link>
  <Spacer/>
  <HStack>
  <Link as={NextLink} href={`https://www.linkedin.com/in/santiagommulaslopez/`} isExternal={true}>
  <Image src={`linkedin.svg`} sx={{"height": "2em"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/santi55`} isExternal={true}>
  <Image src={`github.svg`} sx={{"height": "2em"}}/>
</Link>
  <Link as={NextLink} href={`mailto:santimulas24@gmail.com`} isExternal={true}>
  <Image src={`mail.svg`} sx={{"height": "2em"}}/>
</Link>
</HStack>
</HStack>
  <Center>
  <VStack justify={`center`} sx={{"maxWidth": "80%", "marginBottom": "2em"}}>
  <VStack justify={`center`} sx={{"margin": "2em", "padding": "2em"}}>
  <Image src={`/nba.ico`}/>
  <Heading sx={{"color": "white", "fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "sm", "borderRadius": "md", "bg": "black"}}>
  {`WORK IN PROGRESS...`}
</Heading>
  <Progress colorScheme={`yellow`} isIndeterminate={true} sx={{"width": "100%"}}/>
</VStack>
  <Simplegrid_7c31ac4ad59250c1b3eb3fde20ee6ef7/>
</VStack>
</Center>
  <Box>
  <Center>
  <VStack justify={`center`} spacing={`2em`} sx={{"marginTop": "0px", "width": "70%"}}>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <VStack sx={{"marginTop": "2em", "color": "white"}}>
  <HStack sx={{"borderRadius": "md", "bg": "black"}}>
  <Center>
  <Arrowbackicon_6bcaee27016f550eb53aa0b7cfea62b6/>
  <Spacer/>
  <Heading_8490ff7903bc070432b0d8a4c5665837/>
  <Arrowforwardicon_08b652d00f4e93e858dc3ae224737c8a/>
</Center>
</HStack>
  <Input_a4ce3bf717fd9fe42a90521059592792/>
</VStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Simplegrid_a981def344368d8b64140429f712e0cb/>
</VStack>
</Center>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <VStack sx={{"width": "100%", "marginTop": "2em", "padding": "2em"}}>
  <Text as={`b`} sx={{"fontStyle": "italic"}}>
  {`'WHERE AMAZING HAPPENS'`}
</Text>
  <Text sx={{"size": "0.25em", "marginTop": "0px !important"}}>
  {`© 2023 by Sudosu and Such4rd`}
</Text>
</VStack>
</Box>
</Box>
  <NextHead>
  <title>
  {`dataJS | Where amazing happens`}
</title>
  <meta content={`dataJS | Where amazing happens`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
