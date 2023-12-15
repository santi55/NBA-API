import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Heading_8490ff7903bc070432b0d8a4c5665837, Simplegrid_0b0409b45fb352875e0caaaa8ed78726 } from "/utils/stateful_components"
import { Box, Center, Divider, Heading, HStack, Image, Input, Link, Progress, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import "gridjs/dist/theme/mermaid.css"
import { Grid as DataTableGrid } from "gridjs-react"
import { StarIcon } from "@chakra-ui/icons"
import { set_val } from "/utils/state"
import NextHead from "next/head"



export function Simplegrid_763f7d9c19788e9d7e33255541a5b3af () {


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
  <Link as={``}>
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
  <Link as={NextLink} href={`https://github.com/Such4rd`} isExternal={true}>
  <Image src={`github.svg`} sx={{"height": "2em"}}/>
</Link>
  <Link as={NextLink} href={`mailto:santimulas24@gmail.com`} isExternal={true}>
  <Image src={`mail.svg`} sx={{"height": "2em"}}/>
</Link>
</HStack>
</HStack>
  <Center>
  <VStack justify={`center`} sx={{"maxWidth": "80%", "marginBottom": "2em"}}>
  <HStack sx={{"margin": "0.8em"}}>
  <Image src={`/nba.ico`} sx={{"width": "100px", "height": "auto", "borderRadius": "15px 50px", "border": "5px solid #555", "boxShadow": "lg"}}/>
  <VStack justify={`center`} sx={{"margin": "2em", "padding": "2em"}}>
  <Heading sx={{"color": "white", "fontFamily": "Noto-Serif-Old-Uyghur", "fontSize": "lg", "borderRadius": "md", "bg": "black"}}>
  {`WORK IN PROGRESS...`}
</Heading>
  <Progress colorScheme={`yellow`} isIndeterminate={true} sx={{"width": "100%"}}/>
</VStack>
</HStack>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <DataTableGrid columns={["Name", "Height", "Age"]} data={[["Avery Bradley", "6-2", 25.0], ["Jae Crowder", "6-6", 25.0], ["John Holland", "6-5", 27.0], ["R.J. Hunter", "6-5", 22.0], ["Jonas Jerebko", "6-10", 29.0], ["Amir Johnson", "6-9", 29.0], ["Jordan Mickey", "6-8", 21.0], ["Kelly Olynyk", "7-0", 25.0], ["Terry Rozier", "6-2", 22.0], ["Marcus Smart", "6-4", 22.0], ["Jared Sullinger", "6-9", 24.0], ["Isaiah Thomas", "5-9", 27.0], ["Evan Turner", "6-7", 27.0], ["James Young", "6-6", 20.0], ["Tyler Zeller", "7-0", 26.0], ["Bojan Bogdanovic", "6-8", 27.0], ["Markel Brown", "6-3", 24.0], ["Wayne Ellington", "6-4", 28.0], ["Rondae Hollis-Jefferson", "6-7", 21.0], ["Jarrett Jack", "6-3", 32.0], ["Sergey Karasev", "6-7", 22.0], ["Sean Kilpatrick", "6-4", 26.0], ["Shane Larkin", "5-11", 23.0], ["Brook Lopez", "7-0", 28.0], ["Chris McCullough", "6-11", 21.0], ["Willie Reed", "6-10", 26.0], ["Thomas Robinson", "6-10", 25.0], ["Henry Sims", "6-10", 26.0], ["Donald Sloan", "6-3", 28.0], ["Thaddeus Young", "6-8", 27.0], ["Arron Afflalo", "6-5", 30.0], ["Lou Amundson", "6-9", 33.0], ["Thanasis Antetokounmpo", "6-7", 23.0], ["Carmelo Anthony", "6-8", 32.0], ["Jose Calderon", "6-3", 34.0], ["Cleanthony Early", "6-8", 25.0], ["Langston Galloway", "6-2", 24.0], ["Jerian Grant", "6-4", 23.0], ["Robin Lopez", "7-0", 28.0], ["Kyle O'Quinn", "6-10", 26.0], ["Kristaps Porzingis", "7-3", 20.0], ["Kevin Seraphin", "6-10", 26.0], ["Lance Thomas", "6-8", 28.0], ["Sasha Vujacic", "6-7", 32.0], ["Derrick Williams", "6-8", 25.0], ["Tony Wroten", "6-6", 23.0], ["Elton Brand", "6-9", 37.0], ["Isaiah Canaan", "6-0", 25.0], ["Robert Covington", "6-9", 25.0], ["Joel Embiid", "7-0", 22.0], ["Jerami Grant", "6-8", 22.0], ["Richaun Holmes", "6-10", 22.0], ["Carl Landry", "6-9", 32.0], ["Kendall Marshall", "6-4", 24.0], ["T.J. McConnell", "6-2", 24.0], ["Nerlens Noel", "6-11", 22.0], ["Jahlil Okafor", "6-11", 20.0], ["Ish Smith", "6-0", 27.0], ["Nik Stauskas", "6-6", 22.0], ["Hollis Thompson", "6-8", 25.0], ["Christian Wood", "6-11", 20.0], ["Bismack Biyombo", "6-9", 23.0], ["Bruno Caboclo", "6-9", 20.0], ["DeMarre Carroll", "6-8", 29.0], ["DeMar DeRozan", "6-7", 26.0], ["James Johnson", "6-9", 29.0], ["Cory Joseph", "6-3", 24.0], ["Kyle Lowry", "6-0", 30.0], ["Lucas Nogueira", "7-0", 23.0], ["Patrick Patterson", "6-9", 27.0], ["Norman Powell", "6-4", 23.0], ["Terrence Ross", "6-7", 25.0], ["Luis Scola", "6-9", 36.0], ["Jason Thompson", "6-11", 29.0], ["Jonas Valanciunas", "7-0", 24.0], ["Delon Wright", "6-5", 24.0], ["Leandro Barbosa", "6-3", 33.0], ["Harrison Barnes", "6-8", 24.0], ["Andrew Bogut", "7-0", 31.0], ["Ian Clark", "6-3", 25.0], ["Stephen Curry", "6-3", 28.0], ["Festus Ezeli", "6-11", 26.0], ["Draymond Green", "6-7", 26.0], ["Andre Iguodala", "6-6", 32.0], ["Shaun Livingston", "6-7", 30.0], ["Kevon Looney", "6-9", 20.0], ["James Michael McAdoo", "6-9", 23.0], ["Brandon Rush", "6-6", 30.0], ["Marreese Speights", "6-10", 28.0], ["Klay Thompson", "6-7", 26.0], ["Anderson Varejao", "6-11", 33.0], ["Cole Aldrich", "6-11", 27.0], ["Jeff Ayres", "6-9", 29.0], ["Jamal Crawford", "6-5", 36.0], ["Branden Dawson", "6-6", 23.0], ["Jeff Green", "6-9", 29.0], ["Blake Griffin", "6-10", 27.0], ["Wesley Johnson", "6-7", 28.0], ["DeAndre Jordan", "6-11", 27.0], ["Luc Richard Mbah a Moute", "6-8", 29.0], ["Chris Paul", "6-0", 31.0], ["Paul Pierce", "6-7", 38.0], ["Pablo Prigioni", "6-3", 39.0], ["JJ Redick", "6-4", 31.0], ["Austin Rivers", "6-4", 23.0], ["C.J. Wilcox", "6-5", 25.0], ["Brandon Bass", "6-8", 31.0], ["Tarik Black", "6-9", 24.0], ["Anthony Brown", "6-7", 23.0], ["Kobe Bryant", "6-6", 37.0], ["Jordan Clarkson", "6-5", 24.0], ["Roy Hibbert", "7-2", 29.0], ["Marcelo Huertas", "6-3", 33.0], ["Ryan Kelly", "6-11", 25.0], ["Larry Nance Jr.", "6-9", 23.0], ["Julius Randle", "6-9", 21.0], ["D'Angelo Russell", "6-5", 20.0], ["Robert Sacre", "7-0", 27.0], ["Louis Williams", "6-1", 29.0], ["Metta World Peace", "6-7", 36.0], ["Nick Young", "6-7", 31.0], ["Eric Bledsoe", "6-1", 26.0], ["Devin Booker", "6-6", 19.0], ["Chase Budinger", "6-7", 28.0], ["Tyson Chandler", "7-1", 33.0], ["Archie Goodwin", "6-5", 21.0], ["John Jenkins", "6-4", 25.0], ["Brandon Knight", "6-3", 24.0], ["Alex Len", "7-1", 22.0], ["Jon Leuer", "6-10", 27.0], ["Phil Pressey", "5-11", 25.0], ["Ronnie Price", "6-2", 32.0], ["Mirza Teletovic", "6-9", 30.0], ["P.J. Tucker", "6-6", 31.0], ["T.J. Warren", "6-8", 22.0], ["Alan Williams", "6-8", 23.0], ["Quincy Acy", "6-7", 25.0], ["James Anderson", "6-6", 27.0], ["Marco Belinelli", "6-5", 30.0], ["Caron Butler", "6-7", 36.0], ["Omri Casspi", "6-9", 27.0], ["Willie Cauley-Stein", "7-0", 22.0], ["Darren Collison", "6-0", 28.0], ["DeMarcus Cousins", "6-11", 25.0], ["Seth Curry", "6-2", 25.0], ["Duje Dukan", "6-9", 24.0], ["Rudy Gay", "6-8", 29.0], ["Kosta Koufos", "7-0", 27.0], ["Ben McLemore", "6-5", 23.0], ["Eric Moreland", "6-10", 24.0], ["Rajon Rondo", "6-1", 30.0], ["Cameron Bairstow", "6-9", 25.0], ["Aaron Brooks", "6-0", 31.0], ["Jimmy Butler", "6-7", 26.0], ["Mike Dunleavy", "6-9", 35.0], ["Cristiano Felicio", "6-10", 23.0], ["Pau Gasol", "7-0", 35.0], ["Taj Gibson", "6-9", 30.0], ["Justin Holiday", "6-6", 27.0], ["Doug McDermott", "6-8", 24.0], ["Nikola Mirotic", "6-10", 25.0], ["E'Twaun Moore", "6-4", 27.0], ["Joakim Noah", "6-11", 31.0], ["Bobby Portis", "6-11", 21.0], ["Derrick Rose", "6-3", 27.0], ["Tony Snell", "6-7", 24.0], ["Matthew Dellavedova", "6-4", 25.0], ["Channing Frye", "6-11", 33.0], ["Kyrie Irving", "6-3", 24.0], ["LeBron James", "6-8", 31.0], ["Richard Jefferson", "6-7", 35.0], ["Dahntay Jones", "6-6", 35.0], ["James Jones", "6-8", 35.0], ["Sasha Kaun", "6-11", 31.0], ["Kevin Love", "6-10", 27.0], ["Jordan McRae", "6-5", 25.0], ["Timofey Mozgov", "7-1", 29.0], ["Iman Shumpert", "6-5", 25.0], ["J.R. Smith", "6-6", 30.0], ["Tristan Thompson", "6-9", 25.0], ["Mo Williams", "6-1", 33.0], ["Joel Anthony", "6-9", 33.0], ["Aron Baynes", "6-10", 29.0], ["Steve Blake", "6-3", 36.0], ["Lorenzo Brown", "6-5", 25.0], ["Reggie Bullock", "6-7", 25.0], ["Kentavious Caldwell-Pope", "6-5", 23.0], ["Spencer Dinwiddie", "6-6", 23.0], ["Andre Drummond", "6-11", 22.0], ["Tobias Harris", "6-9", 23.0], ["Darrun Hilliard", "6-6", 23.0], ["Reggie Jackson", "6-3", 26.0], ["Stanley Johnson", "6-7", 20.0], ["Jodie Meeks", "6-4", 28.0], ["Marcus Morris", "6-9", 26.0], ["Anthony Tolliver", "6-8", 31.0], ["Lavoy Allen", "6-9", 27.0], ["Rakeem Christmas", "6-9", 24.0], ["Monta Ellis", "6-3", 30.0], ["Paul George", "6-9", 26.0], ["George Hill", "6-3", 30.0], ["Jordan Hill", "6-10", 28.0], ["Solomon Hill", "6-7", 25.0], ["Ty Lawson", "5-11", 28.0], ["Ian Mahinmi", "6-11", 29.0], ["C.J. Miles", "6-6", 29.0], ["Glenn Robinson III", "6-7", 22.0], ["Rodney Stuckey", "6-5", 30.0], ["Myles Turner", "6-11", 20.0], ["Shayne Whittington", "6-11", 25.0], ["Joe Young", "6-2", 23.0], ["Giannis Antetokounmpo", "6-11", 21.0], ["Jerryd Bayless", "6-3", 27.0], ["Michael Carter-Williams", "6-6", 24.0], ["Jared Cunningham", "6-4", 25.0], ["Tyler Ennis", "6-3", 21.0], ["John Henson", "6-11", 25.0], ["Damien Inglis", "6-8", 21.0], ["O.J. Mayo", "6-5", 28.0], ["Khris Middleton", "6-8", 24.0], ["Greg Monroe", "6-11", 26.0], ["Steve Novak", "6-10", 32.0], ["Johnny O'Bryant III", "6-9", 23.0], ["Jabari Parker", "6-8", 21.0], ["Miles Plumlee", "6-11", 27.0], ["Greivis Vasquez", "6-6", 29.0], ["Rashad Vaughn", "6-6", 19.0], ["Justin Anderson", "6-6", 22.0], ["J.J. Barea", "6-0", 31.0], ["Jeremy Evans", "6-9", 28.0], ["Raymond Felton", "6-1", 31.0], ["Devin Harris", "6-3", 33.0], ["David Lee", "6-9", 33.0], ["Wesley Matthews", "6-5", 29.0], ["JaVale McGee", "7-0", 28.0], ["Salah Mejri", "7-2", 29.0], ["Dirk Nowitzki", "7-0", 37.0], ["Zaza Pachulia", "6-11", 32.0], ["Chandler Parsons", "6-10", 27.0], ["Dwight Powell", "6-11", 24.0], ["Charlie Villanueva", "6-11", 31.0], ["Deron Williams", "6-3", 31.0], ["Trevor Ariza", "6-8", 30.0], ["Michael Beasley", "6-10", 27.0], ["Patrick Beverley", "6-1", 27.0], ["Corey Brewer", "6-9", 30.0], ["Clint Capela", "6-10", 22.0], ["Sam Dekker", "6-9", 22.0], ["Andrew Goudelock", "6-3", 27.0], ["James Harden", "6-5", 26.0], ["Montrezl Harrell", "6-8", 22.0], ["Dwight Howard", "6-11", 30.0], ["Terrence Jones", "6-9", 24.0], ["K.J. McDaniels", "6-6", 23.0], ["Donatas Motiejunas", "7-0", 25.0], ["Josh Smith", "6-9", 30.0], ["Jason Terry", "6-2", 38.0], ["Jordan Adams", "6-5", 21.0], ["Tony Allen", "6-4", 34.0], ["Chris Andersen", "6-10", 37.0], ["Matt Barnes", "6-7", 36.0], ["Vince Carter", "6-6", 39.0], ["Mike Conley", "6-1", 28.0], ["Bryce Cotton", "6-1", 23.0], ["Jordan Farmar", "6-2", 29.0], ["Marc Gasol", "7-1", 31.0], ["JaMychal Green", "6-9", 25.0], ["P.J. Hairston", "6-6", 23.0], ["Jarell Martin", "6-10", 22.0], ["Ray McCallum", "6-3", 24.0], ["Xavier Munford", "6-3", 24.0], ["Zach Randolph", "6-9", 34.0], ["Lance Stephenson", "6-5", 25.0], ["Alex Stepheson", "6-10", 28.0], ["Brandan Wright", "6-10", 28.0], ["Alexis Ajinca", "7-2", 28.0], ["Ryan Anderson", "6-10", 28.0], ["Omer Asik", "7-0", 29.0], ["Luke Babbitt", "6-9", 26.0], ["Norris Cole", "6-2", 27.0], ["Dante Cunningham", "6-8", 29.0], ["Anthony Davis", "6-10", 23.0], ["Bryce Dejean-Jones", "6-6", 23.0], ["Toney Douglas", "6-2", 30.0], ["James Ennis", "6-7", 25.0], ["Tyreke Evans", "6-6", 26.0], ["Tim Frazier", "6-1", 25.0], ["Alonzo Gee", "6-6", 29.0], ["Eric Gordon", "6-4", 27.0], ["Jordan Hamilton", "6-7", 25.0], ["Jrue Holiday", "6-4", 25.0], ["Orlando Johnson", "6-5", 27.0], ["Kendrick Perkins", "6-10", 31.0], ["Quincy Pondexter", "6-7", 28.0], ["LaMarcus Aldridge", "6-11", 30.0], ["Kyle Anderson", "6-9", 22.0], ["Matt Bonner", "6-10", 36.0], ["Boris Diaw", "6-8", 34.0], ["Tim Duncan", "6-11", 40.0], ["Manu Ginobili", "6-6", 38.0], ["Danny Green", "6-6", 28.0], ["Kawhi Leonard", "6-7", 24.0], ["Boban Marjanovic", "7-3", 27.0], ["Kevin Martin", "6-7", 33.0], ["Andre Miller", "6-3", 40.0], ["Patty Mills", "6-0", 27.0], ["Tony Parker", "6-2", 34.0], ["Jonathon Simmons", "6-6", 26.0], ["David West", "6-9", 35.0], ["Kent Bazemore", "6-5", 26.0], ["Tim Hardaway Jr.", "6-6", 24.0], ["Kirk Hinrich", "6-4", 35.0], ["Al Horford", "6-10", 30.0], ["Kris Humphries", "6-9", 31.0], ["Kyle Korver", "6-7", 35.0], ["Paul Millsap", "6-8", 31.0], ["Mike Muscala", "6-11", 24.0], ["Lamar Patterson", "6-5", 24.0], ["Dennis Schroder", "6-1", 22.0], ["Mike Scott", "6-8", 27.0], ["Thabo Sefolosha", "6-7", 32.0], ["Tiago Splitter", "6-11", 31.0], ["Walter Tavares", "7-3", 24.0], ["Jeff Teague", "6-2", 27.0], ["Nicolas Batum", "6-8", 27.0], ["Troy Daniels", "6-4", 24.0], ["Jorge Gutierrez", "6-3", 27.0], ["Tyler Hansbrough", "6-9", 30.0], ["Aaron Harrison", "6-6", 21.0], ["Spencer Hawes", "7-1", 28.0], ["Al Jefferson", "6-10", 31.0], ["Frank Kaminsky III", "7-0", 23.0], ["Michael Kidd-Gilchrist", "6-7", 22.0], ["Jeremy Lamb", "6-5", 24.0], ["Courtney Lee", "6-5", 30.0], ["Jeremy Lin", "6-3", 27.0], ["Kemba Walker", "6-1", 26.0], ["Marvin Williams", "6-9", 29.0], ["Cody Zeller", "7-0", 23.0], ["Chris Bosh", "6-11", 32.0], ["Luol Deng", "6-9", 31.0], ["Goran Dragic", "6-3", 30.0], ["Gerald Green", "6-7", 30.0], ["Udonis Haslem", "6-8", 36.0], ["Joe Johnson", "6-7", 34.0], ["Tyler Johnson", "6-4", 24.0], ["Josh McRoberts", "6-10", 29.0], ["Josh Richardson", "6-6", 22.0], ["Amar'e Stoudemire", "6-10", 33.0], ["Dwyane Wade", "6-4", 34.0], ["Briante Weber", "6-2", 23.0], ["Hassan Whiteside", "7-0", 26.0], ["Justise Winslow", "6-7", 20.0], ["Dorell Wright", "6-9", 30.0], ["Dewayne Dedmon", "7-0", 26.0], ["Evan Fournier", "6-7", 23.0], ["Aaron Gordon", "6-9", 20.0], ["Mario Hezonja", "6-8", 21.0], ["Ersan Ilyasova", "6-10", 29.0], ["Brandon Jennings", "6-1", 26.0], ["Devyn Marble", "6-6", 23.0], ["Shabazz Napier", "6-1", 24.0], ["Andrew Nicholson", "6-9", 26.0], ["Victor Oladipo", "6-4", 24.0], ["Elfrid Payton", "6-4", 22.0], ["Jason Smith", "7-0", 30.0], ["Nikola Vucevic", "7-0", 25.0], ["C.J. Watson", "6-2", 32.0], ["Alan Anderson", "6-6", 33.0], ["Bradley Beal", "6-5", 22.0], ["Jared Dudley", "6-7", 30.0], ["Jarell Eddie", "6-7", 24.0], ["Drew Gooden", "6-10", 34.0], ["Marcin Gortat", "6-11", 32.0], ["JJ Hickson", "6-9", 27.0], ["Nene Hilario", "6-11", 33.0], ["Markieff Morris", "6-10", 26.0], ["Kelly Oubre Jr.", "6-7", 20.0], ["Otto Porter Jr.", "6-8", 23.0], ["Ramon Sessions", "6-3", 30.0], ["Garrett Temple", "6-6", 30.0], ["Marcus Thornton", "6-4", 29.0], ["John Wall", "6-4", 25.0], ["Darrell Arthur", "6-9", 28.0], ["D.J. Augustin", "6-0", 28.0], ["Will Barton", "6-6", 25.0], ["Wilson Chandler", "6-8", 29.0], ["Kenneth Faried", "6-8", 26.0], ["Danilo Gallinari", "6-10", 27.0], ["Gary Harris", "6-4", 21.0], ["Nikola Jokic", "6-10", 21.0], ["Joffrey Lauvergne", "6-11", 24.0], ["Mike Miller", "6-8", 36.0], ["Emmanuel Mudiay", "6-5", 20.0], ["Jameer Nelson", "6-0", 34.0], ["Jusuf Nurkic", "7-0", 21.0], ["JaKarr Sampson", "6-9", 23.0], ["Axel Toupane", "6-7", 23.0], ["Nemanja Bjelica", "6-10", 28.0], ["Gorgui Dieng", "6-11", 26.0], ["Kevin Garnett", "6-11", 40.0], ["Tyus Jones", "6-2", 20.0], ["Zach LaVine", "6-5", 21.0], ["Shabazz Muhammad", "6-6", 23.0], ["Adreian Payne", "6-10", 25.0], ["Nikola Pekovic", "6-11", 30.0], ["Tayshaun Prince", "6-9", 36.0], ["Ricky Rubio", "6-4", 25.0], ["Damjan Rudez", "6-9", 29.0], ["Greg Smith", "6-10", 25.0], ["Karl-Anthony Towns", "7-0", 20.0], ["Andrew Wiggins", "6-8", 21.0], ["Steven Adams", "7-0", 22.0], ["Nick Collison", "6-10", 35.0], ["Kevin Durant", "6-9", 27.0], ["Randy Foye", "6-4", 32.0], ["Josh Huestis", "6-7", 24.0], ["Serge Ibaka", "6-10", 26.0], ["Enes Kanter", "6-11", 24.0], ["Mitch McGary", "6-10", 24.0], ["Nazr Mohammed", "6-10", 38.0], ["Anthony Morrow", "6-5", 30.0], ["Cameron Payne", "6-3", 21.0], ["Andre Roberson", "6-7", 24.0], ["Kyle Singler", "6-8", 28.0], ["Dion Waiters", "6-4", 24.0], ["Russell Westbrook", "6-3", 27.0], ["Cliff Alexander", "6-8", 20.0], ["Al-Farouq Aminu", "6-9", 25.0], ["Pat Connaughton", "6-5", 23.0], ["Allen Crabbe", "6-6", 24.0], ["Ed Davis", "6-10", 27.0], ["Maurice Harkless", "6-9", 23.0], ["Gerald Henderson", "6-5", 28.0], ["Chris Kaman", "7-0", 34.0], ["Meyers Leonard", "7-1", 24.0], ["Damian Lillard", "6-3", 25.0], ["C.J. McCollum", "6-4", 24.0], ["Luis Montero", "6-7", 23.0], ["Mason Plumlee", "6-11", 26.0], ["Brian Roberts", "6-1", 30.0], ["Noah Vonleh", "6-9", 20.0], ["Trevor Booker", "6-8", 28.0], ["Trey Burke", "6-1", 23.0], ["Alec Burks", "6-6", 24.0], ["Dante Exum", "6-6", 20.0], ["Derrick Favors", "6-10", 24.0], ["Rudy Gobert", "7-1", 23.0], ["Gordon Hayward", "6-8", 26.0], ["Rodney Hood", "6-8", 23.0], ["Joe Ingles", "6-8", 28.0], ["Chris Johnson", "6-6", 26.0], ["Trey Lyles", "6-10", 20.0], ["Shelvin Mack", "6-3", 26.0], ["Raul Neto", "6-1", 24.0], ["Tibor Pleiss", "7-3", 26.0], ["Jeff Withey", "7-0", 26.0], [NaN, NaN, NaN]]} pagination={true} search={true} sort={true} style={{"width": "80%"}}/>
  <Divider sx={{"marginBottom": "1em", "marginTop": "0.5em"}}/>
  <Simplegrid_763f7d9c19788e9d7e33255541a5b3af/>
</VStack>
</Center>
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
  <Simplegrid_0b0409b45fb352875e0caaaa8ed78726/>
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
