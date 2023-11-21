import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.styles import Image as Image
from NBA_API.styles.color import Colors as Color
from NBA_API.state import Game




def match_box(game: Game):
    
    return rx.wrap_item(
        rx.card(
            rx.cond(
                game.period == 0,
                rx.text(game.status, color="red"),
                rx.cond(
                    game.home_team_score > game.visitor_team_score,
                    rx.hstack(
                        rx.icon(
                            tag="star"
                        ),
                        rx.text(f"{game.home_team_score} - {game.visitor_team_score}" , color = "green",font_weight="bold"),
                    ),
                    rx.hstack(
                        rx.text(f"{game.home_team_score} - {game.visitor_team_score}" , color = "green",font_weight="bold"),
                        rx.icon(
                            tag="star"
                        ),
                    )   
                )        
            ),
            header = rx.flex(
                rx.image(
                    src=f"/teams/{game.home_team.id}.ico",
                    height=f"{Image.ICO.value}",
                    width=f"{Image.ICO.value}",
                    border_radius=f"{Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} ",
                    border= f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
                    box_shadow="lg",
                    bg="black",
                    max_height="40%",
                    max_width="40%"),
                rx.spacer(),
                rx.heading(f"{game.home_team.abbreviation} vs {game.visitor_team.abbreviation}", size=Size.DEFAULT.value),
                rx.spacer(),
                rx.image(
                    src=f"/teams/{game.visitor_team.id}.ico",
                    height=f"{Image.ICO.value}",
                    width=f"{Image.ICO.value}",
                    border_radius=f"{Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} ",
                    border= f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
                    box_shadow="lg",
                    bg="black",
                    max_height="40%",
                    max_width="40%"),
                width="100%"
            ),
            footer = rx.hstack(
                rx.image(
                    src="/teams/court.ico",
                    html_width=Image.ICO.value,
                    html_height=Image.ICO.value,
                    align="center"
                )
            ),
            align_items="center",
            width="100%",
            bg_image="/background/match_box.jpg",
            background_size= "cover",
            background_position= "center",
            background_repeat= "no_repeat",
            background_color= "rgba(0, 0, 0, 0.7)",
            border=f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}"
        )
    )
