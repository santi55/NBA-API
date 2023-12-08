import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.font import Fonts as Font
from NBA_API.components.match_box import match_box
from NBA_API.state import State, Game



def display_box(game: Game):
    return match_box(game)
   
#recorre todos los partidos
def stats_matches():
    return rx.responsive_grid(
        rx.foreach(
            State.lista_partidos_perDay,
            display_box
        ),
        justify="center",
        spacing = Size.XSMALL.value,
        columns = [2,3,4]
    )
    
def imprimeDay() -> rx.component:
    return rx.text(State.link_match)


def jornada():
    return rx.vstack(
            rx.hstack(
                rx.center(
                    rx.icon(
                        tag = "star",
                           # on_click=State.decrementDay()
                    ),
                    rx.spacer(),
                    rx.heading(
                    State.day_clean,
                    #color=Color.TEXT_COLOR
                    font_family= Font.TITLE.value,
                    font_size = Size.BIG.value
                    ),
                    rx.icon(
                        tag = "star",
                        #on_click=State.incrementDay()
                    )
                ),
                border_radius="md",
                bg="black"
            ),
        rx.input(
            type_="date",
            size= "xs",
            border_color="black",
            focus_border_color="orange",
            error_border_color="red",
            width="50%",
            default_value=str(State.date),
            #on_change=State.set_date,
        ),
        margin_top=Size.BIG.value,
        color="white",
           
    )
       











"""
#muestra id, nombre, apellidos de jugadores
for players_nba in response_p.json()['data']:

    print (str(players_nba["id"]) + " " +  str(players_nba["first_name"]) + " " + str(players_nba["last_name"]))

contador = 1

#muestra equipos del este
for team_nba in  response_t.json()['data']:
    if team_nba["conference"] == "East":
        print(str(contador) + " - " + str(team_nba["full_name"]))
        contador += 1


#devuelve el id del mejor jugador

def bestPlayer() -> dict:
    jugadores = 0
    max_puntuacion = 0
    puntuacion = 0
    json = {}
    id = ""
    for final in response_f.json()['data']:
        if final["pts"] is not None and final["reb"] is not None  and final["ast"] is not None:
            puntuacion = int(final["pts"]) + int(final["reb"]) + int(final["ast"])
        if puntuacion > max_puntuacion:
            id = final["id"]
            max_puntuacion = puntuacion
            json = final
    return json  


def nba() -> rx.component:
    return rx.box(
            rx.heading(bestPlayer()["player"]["first_name"],size="2xl", color=Color.TEXT_COLOR.value,text_align="center"),
            rx.heading(bestPlayer()["player"]["last_name"],size="2xl", color=Color.TEXT_COLOR.value,text_align="center"),
            rx.heading(bestPlayer()["team"]["full_name"],size="xl",color=Color.TEXT_COLOR.value,text_align="center"),
            rx.heading(str(bestPlayer()["pts"]) + "pts " + str(bestPlayer()["ast"]) + "reb " + str(bestPlayer()["reb"]) +"ast ",size="lg", color=Color.TEXT_COLOR.value,text_align="center"),
            bg=Color.BG_BOX.value,
            border_radius="md",
            width="60%",  
        )
    
def match() -> rx.component:
    return rx.box(
        rx.heading(str(bestPlayer()["game"]["visitor_team_id"]) + " VS " + str(bestPlayer()["game"]["home_team_id"]),size="2xl",color=Color.TEXT_COLOR.value,text_align="center"),
        bg=Color.BG_MATCH.value,
        border_radius="md",
        width="60%"
    )
"""   