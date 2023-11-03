"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx
import NBA_API.styles.styles as styles
from NBA_API.styles.color import Colors as Color
from NBA_API.components.header import header
from NBA_API.components.footer import footer
from NBA_API.components.sidebar import sidebar
from NBA_API.logica.stats import jornada,stats_matches
from NBA_API.state import State


docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"




def index() -> rx.Component:
    return rx.box(
        header(),
        sidebar(),
        rx.center(
            rx.vstack(
                jornada(),
                stats_matches()
            ),
        ),
        footer(),
        bg= Color.BACKGROUND.value
    )


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
