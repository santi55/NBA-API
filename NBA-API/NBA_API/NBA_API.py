"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.styles import Image as Image
from NBA_API.styles.font import Fonts as Font
import NBA_API.styles.styles as styles
from NBA_API.components.header import header
from NBA_API.components.footer import footer
from NBA_API.components.sidebar import sidebar
from NBA_API.logica.stats import jornada,stats_matches,imprimeDay
from NBA_API.state import State
from NBA_API.components.spline import spline
from NBA_API.components.table_player import tabla
from NBA_API.logica.user import form_register, lista_usuarios

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


"""https://www.stickpng.com/es/img/download/5b26a2438f68598d6f5a4df5"""
@rx.page()
def nba() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                rx.divider(),
                jornada(),
                rx.divider(),
                stats_matches(),
                spacing=Size.BIG.value,
                margin_top="0px",
                width="70%",
                justify="center"
            )
        ),
        rx.divider(),
        footer()
    )

@rx.page()
def register() -> rx.Component:
    return rx.box(
        header(),
        #spline(),
        rx.hstack(
            rx.link(
                rx.image(src="/nba.ico"),
                href="/nba"
            ),
            lista_usuarios(),
            justify="center",
            margin=Size.MEDIUM.value
        ),
        rx.divider(),
        form_register(),
        rx.divider(),
        footer()
    )
@rx.page(
    title="dataJS | Where amazing happens",
    description="dataJS | Where amazing happens"
)
def index() -> rx.Component:
    return rx.box(
        header(),
        rx.center(
            rx.vstack(
                rx.hstack(
                    rx.image(
                        src="/nba.ico",width="100px",
                        height="auto",
                        border_radius="15px 50px",
                        border="5px solid #555",
                        box_shadow="lg"),
                    rx.vstack(
                        rx.heading(
                            "WORK IN PROGRESS...",
                            color = "white",
                            font_family= Font.TITLE.value,
                            font_size = "lg",
                            border_radius="md",
                            bg="black"
                        ),
                        rx.progress(
                            is_indeterminate=True,
                            color_scheme="yellow",
                            width = "100%"
                        ),
                        justify="center",
                        margin = Size.BIG.value,
                        padding = Size.BIG.value
                    ),
                    margin = Size.MEDIUM.value               ),
            rx.divider(),
            tabla(),
            rx.divider(),
            rx.responsive_grid(
                    rx.foreach(
                        list(range(1,31)),
                        lambda id:
                        rx.box(
                            rx.center(
                                rx.image(
                                src=f"/teams/{id}.ico",
                                height=f"{Image.ICO.value}",
                                width=f"{Image.ICO.value}",
                                border_radius=f"{Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} ",
                                border= f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
                                box_shadow="lg",
                                bg="lightgreen",
                                ),
                            ),
                            max_width = "100%"
                        )
                    ),
                    spacing = Size.XSMALL.value,
                    columns = [2,3,4,5,6]
                ),
                max_width = "80%",
                justify = "center",
                margin_bottom = Size.BIG.value
            )
        ),
        nba()
    )
# Add state and page to the app. 
app = rx.App(style=styles.BASE_STYLE)

app.compile()
