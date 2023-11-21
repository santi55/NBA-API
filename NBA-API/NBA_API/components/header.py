import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.styles import Image as Image


def header() -> rx.Component:
    return rx.hstack(
        rx.link( 
            rx.text(
                rx.span("data",font_style="italic"),
                rx.span("JS",font_weight="bold"),
            ),
            href="/"
        ),
        align_items="left",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        top="0",
        width="100%",
        position="sticky",
        z_index="4",
        height="5%",
        border_bottom= f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
        #border_color= Color.SEPARATOR.value,
        bg_image=Color.HEADER.value
    )