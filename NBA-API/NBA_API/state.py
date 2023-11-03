import reflex as rx
import datetime
import locale
import requests
from typing import List,Dict

# Establecer el idioma local a ingles
locale.setlocale(locale.LC_TIME, 'en_US.utf8')





class State(rx.State):
    
    #inicializamos
    diaHoy = datetime.date.today()
    date = diaHoy
    #request a la api
    #match = "https://www.balldontlie.io/api/v1/games?dates[]="+ str(date)
    diccionario : [
        {
            "id": 1037660,
            "date": "2023-11-02T00:00:00.000Z",
            "home_team": {
                "id": 23,
                "abbreviation": "PHI",
                "city": "Philadelphia",
                "conference": "East",
                "division": "Atlantic",
                "full_name": "Philadelphia 76ers",
                "name": "76ers"
            },
            "home_team_score": 114,
            "period": 4,
            "postseason": False,
            "season": 2023,
            "status": "Final",
            "time": "Final",
            "visitor_team": {
                "id": 28,
                "abbreviation": "TOR",
                "city": "Toronto",
                "conference": "East",
                "division": "Atlantic",
                "full_name": "Toronto Raptors",
                "name": "Raptors"
            },
            "visitor_team_score": 99
        },
        {
            "id": 1037661,
            "date": "2023-11-02T00:00:00.000Z",
            "home_team": {
                "id": 19,
                "abbreviation": "NOP",
                "city": "New Orleans",
                "conference": "West",
                "division": "Southwest",
                "full_name": "New Orleans Pelicans",
                "name": "Pelicans"
            },
            "home_team_score": 125,
            "period": 4,
            "postseason": False,
            "season": 2023,
            "status": "Final",
            "time": "Final",
            "visitor_team": {
                "id": 9,
                "abbreviation": "DET",
                "city": "Detroit",
                "conference": "East",
                "division": "Central",
                "full_name": "Detroit Pistons",
                "name": "Pistons"
            },
            "visitor_team_score": 116
        },
        {
            "id": 1037662,
            "date": "2023-11-02T00:00:00.000Z",
            "home_team": {
                "id": 29,
                "abbreviation": "UTA",
                "city": "Utah",
                "conference": "West",
                "division": "Northwest",
                "full_name": "Utah Jazz",
                "name": "Jazz"
            },
            "home_team_score": 113,
            "period": 4,
            "postseason": False,
            "season": 2023,
            "status": "Final",
            "time": "Final",
            "visitor_team": {
                "id": 22,
                "abbreviation": "ORL",
                "city": "Orlando",
                "conference": "East",
                "division": "Southeast",
                "full_name": "Orlando Magic",
                "name": "Magic"
            },
            "visitor_team_score": 115
        },
        {
            "id": 1037663,
            "date": "2023-11-02T00:00:00.000Z",
            "home_team": {
                "id": 24,
                "abbreviation": "PHX",
                "city": "Phoenix",
                "conference": "West",
                "division": "Pacific",
                "full_name": "Phoenix Suns",
                "name": "Suns"
            },
            "home_team_score": 121,
            "period": 4,
            "postseason": False,
            "season": 2023,
            "status": "Final",
            "time": "Final",
            "visitor_team": {
                "id": 27,
                "abbreviation": "SAS",
                "city": "San Antonio",
                "conference": "West",
                "division": "Southwest",
                "full_name": "San Antonio Spurs",
                "name": "Spurs"
            },
            "visitor_team_score": 132
        }
    ]
    #para imprimir el dia bonito
    dayClean = date.strftime("%A %B %d, %Y")
    
    def incrementDay(self):
        self.date += datetime.timedelta(days=1)
        self.dayClean = self.date.strftime("%A %B %d, %Y")
        self.match = "https://www.balldontlie.io/api/v1/games?dates[]="+ str(self.date)

    def decrementDay(self):
        self.date -= datetime.timedelta(days=1)
        self.dayClean = self.date.strftime("%A %B %d, %Y")
        self.match = "https://www.balldontlie.io/api/v1/games?dates[]="+ str(self.date)
        
    def calendarDay(self, fecha):
        self.date = fecha
        self.dayClean = self.date.strftime("%A %B %d, %Y")
        self.match = "https://www.balldontlie.io/api/v1/games?dates[]="+ str(self.date)

    def getMatch(self):
        return self.match