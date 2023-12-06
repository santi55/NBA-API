import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Checkbox, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, HStack, Image, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Switch, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { CloseIcon } from "@chakra-ui/icons"
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

  const ref_switch = useRef(null); refs['ref_switch'] = ref_switch;
  const ref_email = useRef(null); refs['ref_email'] = ref_email;
  const ref_username = useRef(null); refs['ref_username'] = ref_username;
  const ref_check = useRef(null); refs['ref_check'] = ref_check;

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
  <HStack justify={`center`} sx={{"margin": "0.8em"}}>
  <Link as={NextLink} href={`/nba`}>
  <Image src={`/nba.ico`}/>
</Link>
  <Box>
  <Link as={``} onClick={(_e) => addEvents([Event("state.right", {})], (_e))}>
  <Image src={`logo.ico`} sx={{"bg": "white"}}/>
</Link>
  <Drawer isOpen={state.show_right}>
  <DrawerOverlay>
  <DrawerContent sx={{"bg": "rgba(0, 0, 0, 0.3)"}}>
  <DrawerHeader>
  {`Confirm`}
</DrawerHeader>
  <DrawerBody>
  <Fragment>
  {isTrue((state.len_usuarios === 0)) ? (
  <Fragment>
  <VStack>
  <Text>
  {`no hay usuarios`}
</Text>
</VStack>
</Fragment>
) : (
  <Fragment>
  <VStack>
  <TableContainer sx={{"marginTop": "1rem"}}>
  <Table colorScheme={`teal`} variant={`striped`}>
  <Thead>
  <Tr>
  <Th>
  {`ID`}
</Th>
  <Th>
  {`Username`}
</Th>
  <Th>
  {`Email`}
</Th>
</Tr>
</Thead>
  <Tbody>
  {state.users.map((whyxuodv, i) => (
  <Tr key={i}>
  <Td>
  {whyxuodv.id}
</Td>
  <Td>
  {whyxuodv.user_name}
</Td>
  <Td>
  {whyxuodv.user_email}
</Td>
  <Th>
  <CloseIcon onClick={(_e) => addEvents([Event("state.db_delUser", {id:whyxuodv.id})], (_e))} sx={{"colorScheme": "teal"}}/>
</Th>
</Tr>
))}
</Tbody>
</Table>
</TableContainer>
</VStack>
</Fragment>
)}
</Fragment>
</DrawerBody>
  <DrawerFooter>
  <Button onClick={(_e) => addEvents([Event("state.right", {})], (_e))}>
  {`Close`}
</Button>
</DrawerFooter>
</DrawerContent>
</DrawerOverlay>
</Drawer>
</Box>
</HStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <VStack>
  <Heading>
  {`Registrate`}
</Heading>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Box as={`form`} onSubmit={(_e0) => addEvents([Event("state.db_addUser", {user_data:{"check": getRefValue(ref_check), "email": getRefValue(ref_email), "username": getRefValue(ref_username), "switch": getRefValue(ref_switch)}})], (_e0))} sx={{"resetOnSubmit": true}}>
  <VStack>
  <Input id={`username`} isRequired={true} placeholder={`User`} ref={ref_username} sx={{"color": "black"}} type={`text`}/>
  <Input id={`email`} isRequired={true} placeholder={`Email`} ref={ref_email} sx={{"color": "black"}} type={`text`}/>
  <HStack>
  <Checkbox id={`check`} ref={ref_check}>
  {`Checked`}
</Checkbox>
  <Switch id={`switch`} ref={ref_switch}>
  {`Switched`}
</Switch>
</HStack>
  <Button type={`submit`}>
  {`Submit`}
</Button>
</VStack>
</Box>
</VStack>
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
