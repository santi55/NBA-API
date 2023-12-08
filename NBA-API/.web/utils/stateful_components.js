import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue, set_val } from "/utils/state"
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, Image, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
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
  {getEventURL().href}
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
  )
}

export function Arrowbackicon_6bcaee27016f550eb53aa0b7cfea62b6 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3a97baace8778e09b6a850bea95af5ed = useCallback((_e) => addEvents([Event("state.state.decrementDay", {})], (_e), {}), [addEvents, Event])

  return (
    <ArrowBackIcon onClick={on_click_3a97baace8778e09b6a850bea95af5ed}/>
  )
}

export function Heading_8490ff7903bc070432b0d8a4c5665837 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Heading sx={{"fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "2em"}}>
  {state__state.day_clean}
</Heading>
  )
}

export function Arrowforwardicon_08b652d00f4e93e858dc3ae224737c8a () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_fab8e15a7583c326d091eff878c317e3 = useCallback((_e) => addEvents([Event("state.state.incrementDay", {})], (_e), {}), [addEvents, Event])

  return (
    <ArrowForwardIcon onClick={on_click_fab8e15a7583c326d091eff878c317e3}/>
  )
}

export function Input_a4ce3bf717fd9fe42a90521059592792 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_2bb0381d77e55c92152737feddb296f5 = useCallback((_e0) => addEvents([Event("state.state.set_date", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Input defaultValue={`{state__state.date}`} errorBorderColor={`red`} focusBorderColor={`orange`} onChange={on_change_2bb0381d77e55c92152737feddb296f5} size={`xs`} sx={{"borderColor": "black", "width": "50%"}} type={`date`}/>
  )
}

export function Simplegrid_c7df857dc1a1f67b9392357ad09b22d1 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={`0.25em`} sx={{"justify": "center"}}>
  {state__state.lista_partidos_perDay.map((game, index_defc3adaedd1c9b00f45082b2782c709) => (
  <Card key={index_defc3adaedd1c9b00f45082b2782c709} sx={{"alignItems": "center", "width": "100%", "bgImage": "/background/match_box.jpg", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no_repeat", "backgroundColor": "rgba(0, 0, 0, 0.7)", "border": "0.25em solid white"}}>
  <CardHeader>
  <Flex sx={{"width": "100%"}}>
  <Image src={`/teams/${game.home_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
  <Spacer/>
  <Heading size={`sm`}>
  {`${game.home_team.abbreviation} vs ${game.visitor_team.abbreviation}`}
</Heading>
  <Spacer/>
  <Image src={`/teams/${game.visitor_team.id}.ico`} sx={{"height": "6em", "width": "6em", "borderRadius": "1em 1em 1em 1em ", "border": "0.25em solid white", "boxShadow": "lg", "bg": "black", "maxHeight": "40%", "maxWidth": "40%"}}/>
</Flex>
</CardHeader>
  <CardBody>
  <Fragment>
  {isTrue((game.period === 0)) ? (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {game.status}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue((game.home_team_score > game.visitor_team_score)) ? (
  <Fragment>
  <HStack>
  <StarIcon/>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${game.home_team_score} - ${game.visitor_team_score}`}
</Text>
</HStack>
</Fragment>
) : (
  <Fragment>
  <HStack>
  <Text sx={{"color": "green", "fontWeight": "bold"}}>
  {`${game.home_team_score} - ${game.visitor_team_score}`}
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
))}
</SimpleGrid>
  )
}
