import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, Image, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import { StarIcon } from "@chakra-ui/icons"




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

export function Heading_8490ff7903bc070432b0d8a4c5665837 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Heading sx={{"fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "2em"}}>
  {state__state.day_clean}
</Heading>
  )
}

export function Simplegrid_0b0409b45fb352875e0caaaa8ed78726 () {
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
