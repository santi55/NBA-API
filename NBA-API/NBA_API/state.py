import reflex as rx
from datetime import datetime, date, timedelta
import locale
import requests
from typing import List,Union,Dict, Optional
# Establecer el idioma local a ingles
locale.setlocale(locale.LC_TIME, 'en_US.utf8')

diaHoy = date.today()

##uSER TABLE
class User(rx.Model, table=True):
    user_name: str
    user_email: str
    
    
    
class Team(rx.Base):
    id : int
    abbreviation : str
    city : str
    conference : str
    division : str
    full_name : str
    name : str
    """
    def __init__(self, id, abbreviation, city, conference, division, full_name, name):
        self.id = id
        self.abbreviation = abbreviation
        self.city = city
        self.conference = conference
        self.division = division
        self.full_name = full_name
        self.name = name
      """  
class Game(rx.Base):
    id : int
    date : str
    home_team : Team
    home_team_score : int
    period : int
    postseason : bool
    season : int
    status : str
    time : Optional[str]
    visitor_team : Team
    visitor_team_score : int
    """
    def __init__(self, id, date, home_team, home_team_score, period, postseason, season, status, time, visitor_team, visitor_team_score):
        self.id = id
        self.date = date
        self.home_team = Team(**home_team)
        self.home_team_score = home_team_score
        self.period = period
        self.postseason = postseason
        self.season = season
        self.status = status
        self.time = time
        self.visitor_team = Team(**visitor_team)
        self.visitor_team_score = visitor_team_score
    """

class State(rx.State):
    
    #drawer derecho para lista de usuarios
    show_right: bool = False
    
    def right(self):
        self.show_right = not (self.show_right)
    
    date = diaHoy
    #para imprimir el dia bonito
    
    users : list[User]
    @rx.var
    def len_usuarios(self):
        return len(self.users)
    
    #### STATE NBA ###
    
    @rx.var
    def day_clean(self) -> str:
        try:
            return self.date.strftime("%A %B %d, %Y")
        except:
            dia = datetime.strptime(self.date, "%Y-%m-%d")
            return dia.strftime("%A %B %d, %Y")
    @rx.var
    def link_match(self) -> str:
        return f"https://www.balldontlie.io/api/v1/games?dates[]={self.date}"
    

    @rx.var
    def lista_partidos_perDay(self) -> List[Game]: 
        matchs_day : List[Game] = []
        try:

            list_matchs = requests.get(self.link_match).json()['data']
            for m in list_matchs:
                game = Game(
                    id=m["id"],
                    date=m["date"],
                    home_team=m["home_team"],
                    home_team_score=m["home_team_score"],
                    period=m["period"],
                    postseason=m["postseason"],
                    season=m["season"],
                    status=m["status"],
                    time=m["time"],
                    visitor_team=m["visitor_team"],
                    visitor_team_score=m["visitor_team_score"]            
                )
                matchs_day.append(game)
            
            return matchs_day
        
        except:
            
            return []
       
    
        
    def incrementDay(self):
        try:
            self.date += timedelta(days=1)
        except:
            dia = datetime.strptime(self.date, "%Y-%m-%d")
            dia += timedelta(days=1)
            self.date = dia
    def decrementDay(self):
        try:
            self.date -= timedelta(days=1)
        except:
            dia = datetime.strptime(self.date, "%Y-%m-%d")
            dia -= timedelta(days=1)
            self.date = dia
    
    
    ########## STATE USUARIOS #######
    
    @rx.var 
    def db_getUsers(self) -> list[User]:
        with rx.session() as sess:
            self.users = (
                sess.query(User)
                .all()
            )
            
            
    ##añadir usuario en la base de datos
    def db_addUser(self, user_data: dict):
        with rx.session() as sess:
            sess.add(
                User(user_name=user_data["username"], user_email=user_data["email"])
            )
            sess.commit()
            
        
    
    ##eliminar usuario
    def db_delUser(self, id: str):
        with rx.session() as sess:
            user = sess.exec(User.select.where(User.id == id)).first()
            sess.delete(user)
            sess.commit()
            
