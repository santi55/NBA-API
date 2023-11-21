"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.styles import Size as Size
import NBA_API.styles.styles as styles
from NBA_API.components.header import header
from NBA_API.components.footer import footer
from NBA_API.components.sidebar import sidebar
from NBA_API.logica.stats import jornada,stats_matches,imprimeDay
from NBA_API.state import State
from NBA_API.components.spline import spline
from NBA_API.logica.user import form_register, lista_usuarios

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"



@rx.page()
def nba() -> rx.Component:
    return rx.box(
        header(),
        rx.center(
            rx.vstack(
                jornada(),
                rx.divider(),
                stats_matches(),
                spacing=Size.BIG.value,
                margin_top="0px",
                width="70%",
                align_items="center"
            )
        ),
        rx.divider(),
        footer()
    )

@rx.page()
def index() -> rx.Component:
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

# Add state and page to the app. 
app = rx.App(style=styles.BASE_STYLE)

app.compile()
