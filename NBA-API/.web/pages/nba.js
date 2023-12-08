import { Fragment } from "react"
import { Arrowbackicon_6bcaee27016f550eb53aa0b7cfea62b6, Arrowforwardicon_08b652d00f4e93e858dc3ae224737c8a, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Heading_8490ff7903bc070432b0d8a4c5665837, Input_a4ce3bf717fd9fe42a90521059592792, Simplegrid_a981def344368d8b64140429f712e0cb } from "/utils/stateful_components"
import { Box, Center, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
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
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
