import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Checkbox, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, HStack, Image, Input, Link, Spacer, Switch, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, isTrue, refs, set_val } from "/utils/state"
import { CloseIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Box_eb45e7443785a1dfa4c49beb16b818f7 () {
  const ref_switch = useRef(null); refs['ref_switch'] = ref_switch;
  
    const handleSubmit_69947c9544d03e4dba4aa89f2ee589f4 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"username": getRefValue(refs['ref_username']), "switch": getRefValue(refs['ref_switch']), "check": getRefValue(refs['ref_check']), "email": getRefValue(refs['ref_email'])}}

        addEvents([Event("state.state.db_addUser", {user_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);
  const ref_username = useRef(null); refs['ref_username'] = ref_username;
  const ref_email = useRef(null); refs['ref_email'] = ref_email;
  const ref_check = useRef(null); refs['ref_check'] = ref_check;


  return (
    <Box as={`form`} onSubmit={handleSubmit_69947c9544d03e4dba4aa89f2ee589f4}>
  <VStack>
  <Input id={`username`} isRequired={true} placeholder={`User`} ref={ref_username} sx={{"color": "black"}} type={`text`}/>
  <Input id={`email`} isRequired={true} placeholder={`Email`} ref={ref_email} sx={{"color": "black"}} type={`text`}/>
  <HStack>
  <Checkbox id={`check`} ref={ref_check} value={`true`}>
  {`Checked`}
</Checkbox>
  <Switch id={`switch`} ref={ref_switch} value={true}>
  {`Switched`}
</Switch>
</HStack>
  <Button type={`submit`}>
  {`Submit`}
</Button>
</VStack>
</Box>
  )
}

export function Link_f350a2ff4b9789d2a9deda287ee1eb00 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ac8bdc8b0d4bac75f3381ef517169430 = useCallback((_e) => addEvents([Event("state.state.right", {})], (_e), {}), [addEvents, Event])

  return (
    <Link as={``} onClick={on_click_ac8bdc8b0d4bac75f3381ef517169430}>
  <Image src={`logo.ico`} sx={{"bg": "white"}}/>
</Link>
  )
}

export function Drawer_e1143384c9fca81d8601b03d228edb65 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Drawer isOpen={state__state.show_right}>
  <DrawerOverlay>
  <DrawerContent sx={{"bg": "rgba(0, 0, 0, 0.3)"}}>
  <DrawerHeader>
  {`Confirm`}
</DrawerHeader>
  <DrawerBody>
  <Fragment_25286d5978c5e1c3b9bbe579550e969a/>
</DrawerBody>
  <DrawerFooter>
  <Button_e4987f3f3d0cdfccd0a2ccd9be13f575/>
</DrawerFooter>
</DrawerContent>
</DrawerOverlay>
</Drawer>
  )
}

export function Button_e4987f3f3d0cdfccd0a2ccd9be13f575 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ac8bdc8b0d4bac75f3381ef517169430 = useCallback((_e) => addEvents([Event("state.state.right", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ac8bdc8b0d4bac75f3381ef517169430}>
  {`Close`}
</Button>
  )
}

export function Fragment_25286d5978c5e1c3b9bbe579550e969a () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue((state__state.len_usuarios === 0)) ? (
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
  {state__state.users.map((user, index_e1f2d3b58e8aadb9a773416c3154cd44) => (
  <Tr key={index_e1f2d3b58e8aadb9a773416c3154cd44}>
  <Td>
  {user.id}
</Td>
  <Td>
  {user.user_name}
</Td>
  <Td>
  {user.user_email}
</Td>
  <Th>
  <CloseIcon onClick={(_e) => addEvents([Event("state.state.db_delUser", {id:user.id})], (_e), {})} sx={{"colorScheme": "teal"}}/>
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
  <HStack justify={`center`} sx={{"margin": "0.8em"}}>
  <Link as={NextLink} href={`/nba`}>
  <Image src={`/nba.ico`}/>
</Link>
  <Box>
  <Link_f350a2ff4b9789d2a9deda287ee1eb00/>
  <Drawer_e1143384c9fca81d8601b03d228edb65/>
</Box>
</HStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <VStack>
  <Heading>
  {`Registrate`}
</Heading>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Box_eb45e7443785a1dfa4c49beb16b818f7/>
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
