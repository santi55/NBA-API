import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, HStack, Image, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Progress, SimpleGrid, Spacer, Text, useColorMode, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import NextLink from "next/link"
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
  <Heading sx={{"color": "white", "fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "2em", "borderRadius": "md", "bg": "black"}}>
  {`WORK IN PROGRESS...`}
</Heading>
  <Progress colorScheme={`yellow`} isIndeterminate={true} sx={{"width": "100%"}}/>
</VStack>
  <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={`0.25em`}>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((rtlyyzje, i) => (
  <Box key={i} sx={{"maxWidth": "100%"}}>
  <Center>
  <Image src={`/teams/${rtlyyzje}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "lightgreen"}}/>
</Center>
</Box>
))}
</SimpleGrid>
</VStack>
</Center>
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
  {state.lista_partidos_perDay.map((ngmafbax, i) => (
  <WrapItem key={i}>
  <Card sx={{"alignItems": "center", "width": "100%", "bgImage": "/background/match_box.jpg", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no_repeat", "backgroundColor": "rgba(0, 0, 0, 0.7)", "border": "0.25em solid white"}}>
  <CardHeader>
  <Flex sx={{"width": "100%"}}>
  <Image src={`/teams/${ngmafbax.home_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
  <Spacer/>
  <Heading size={`1em`}>
  {`${ngmafbax.home_team.abbreviation} vs ${ngmafbax.visitor_team.abbreviation}`}
</Heading>
  <Spacer/>
  <Image src={`/teams/${ngmafbax.visitor_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
</Flex>
</CardHeader>
  <CardBody>
  <Fragment>
  {isTrue((ngmafbax.period === 0)) ? (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {ngmafbax.status}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue((ngmafbax.home_team_score > ngmafbax.visitor_team_score)) ? (
  <Fragment>
  <HStack>
  <StarIcon/>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${ngmafbax.home_team_score} - ${ngmafbax.visitor_team_score}`}
</Text>
</HStack>
</Fragment>
) : (
  <Fragment>
  <HStack>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${ngmafbax.home_team_score} - ${ngmafbax.visitor_team_score}`}
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
