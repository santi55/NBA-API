import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color
from NBA_API.components.menu import menu

def sidebar():
    return rx.box(
        rx.vstack(
            menu(),
            width="100%",
            padding_x=Size.MEDIUM.value,
            padding_y=Size.MEDIUM.value,
        ),
        width="5%",
        position="fixed",
        height="auto",
        left="0px",
        bg= Color.BACKGROUND.value
    )