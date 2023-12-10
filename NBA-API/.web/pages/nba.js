import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Heading_8490ff7903bc070432b0d8a4c5665837, Simplegrid_24159e5f4ef022263f1ba1c7fb79e855 } from "/utils/stateful_components"
import { Box, Center, Divider, HStack, Input, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { StarIcon } from "@chakra-ui/icons"
import { set_val } from "/utils/state"
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
  <StarIcon/>
  <Spacer/>
  <Heading_8490ff7903bc070432b0d8a4c5665837/>
  <StarIcon/>
</Center>
</HStack>
  <Input defaultValue={`{state__state.date}`} errorBorderColor={`red`} focusBorderColor={`orange`} size={`xs`} sx={{"borderColor": "black", "width": "50%"}} type={`date`}/>
</VStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Simplegrid_24159e5f4ef022263f1ba1c7fb79e855/>
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
