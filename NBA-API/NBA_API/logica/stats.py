import requests
import reflex as rx
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.font import Fonts as Font
from NBA_API.state import State
from typing import List, Dict


"""
#datos jugadores _ modificando el valor de per_page es el numero de jugadores que recoge
players_url = "https://www.balldontlie.io/api/v1/players?per_page=1"

#datos equipos
teams_url = "https://www.balldontlie.io/api/v1/teams"


#datos match

#llamada request
response_p = requests.get(players_url)
response_t = requests.get(teams_url)
response_f = requests.get(match)
"""




def display_box(match : dict):
   return rx.box(rx.text(match["id"]))


def stats_matches():
    return rx.vstack(
        rx.foreach(
                State.diccionario,
                display_box
            )
    )

    
    


def jornada():
    return rx.hstack(
        rx.center(
            rx.icon(
                tag = "arrow_back",
                on_click=State.decrementDay()
            ),
            rx.spacer(),
            rx.heading(
                State.dayClean,
                #color=Color.TEXT_COLOR
                font_family= Font.TITLE.value
            ),
            rx.icon(
                tag = "arrow_forward",
                on_click=State.incrementDay()
            ),
            rx.spacer(),
            rx.icon(
                tag = "calendar"
            ) 
        )
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