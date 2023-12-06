import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, HStack, Image, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <Center>
  <VStack alignItems={`center`} spacing={`2em`} sx={{"marginTop": "0px", "width": "70%"}}>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <VStack sx={{"marginTop": "2em", "color": "white"}}>
  <HStack sx={{"borderRadius": "md", "bg": "black"}}>
  <Center>
  <ArrowBackIcon onClick={(_e) => addEvents([Event("state.decrementDay", {})], (_e))}/>
  <Spacer/>
  <Heading sx={{"fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "2em"}}>
  {state.day_clean}
</Heading>
  <ArrowForwardIcon onClick={(_e) => addEvents([Event("state.incrementDay", {})], (_e))}/>
</Center>
</HStack>
  <Input defaultValue={`{state.date}`} errorBorderColor={`red`} focusBorderColor={`orange`} onChange={(_e0) => addEvents([Event("state.set_date", {value:_e0.target.value})], (_e0))} size={`xs`} sx={{"borderColor": "black", "width": "50%"}} type={`date`}/>
</VStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Wrap justify={`center`} spacing={`3`}>
  {state.lista_partidos_perDay.map((ilqcvdga, i) => (
  <WrapItem key={i}>
  <Card sx={{"alignItems": "center", "width": "100%", "bgImage": "/background/match_box.jpg", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no_repeat", "backgroundColor": "rgba(0, 0, 0, 0.7)", "border": "0.25em solid white"}}>
  <CardHeader>
  <Flex sx={{"width": "100%"}}>
  <Image src={`/teams/${ilqcvdga.home_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
  <Spacer/>
  <Heading size={`1em`}>
  {`${ilqcvdga.home_team.abbreviation} vs ${ilqcvdga.visitor_team.abbreviation}`}
</Heading>
  <Spacer/>
  <Image src={`/teams/${ilqcvdga.visitor_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
</Flex>
</CardHeader>
  <CardBody>
  <Fragment>
  {isTrue((ilqcvdga.period === 0)) ? (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {ilqcvdga.status}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue((ilqcvdga.home_team_score > ilqcvdga.visitor_team_score)) ? (
  <Fragment>
  <HStack>
  <StarIcon/>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${ilqcvdga.home_team_score} - ${ilqcvdga.visitor_team_score}`}
</Text>
</HStack>
</Fragment>
) : (
  <Fragment>
  <HStack>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${ilqcvdga.home_team_score} - ${ilqcvdga.visitor_team_score}`}
</Text>
  <StarIcon/>
</HStack>
</Fragment>
)}
</Fragment>
)}
</Fragment>
</CardBody>
  <CardFooter>
  <HStack>
  <Image align={`center`} htmlHeight={`6em`} htmlWidth={`6em`} src={`/teams/court.ico`}/>
</HStack>
</CardFooter>
</Card>
</WrapItem>
))}
</Wrap>
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
