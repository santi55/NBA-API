import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color

def header() -> rx.Component:
    return rx.hstack(
        rx.text(
            rx.span("data",font_style="italic"),
            rx.span("JS",font_weight="bold")
        ),
        rx.spacer(),
        rx.image(src="logoJS.ico",size=Size.SMALL.value),
        rx.spacer(),
        rx.avatar(
            rx.avatar_badge(
                box_size="1.25em",
                bg="green.500",
                border_color="green.500",),
                name = "SANTI MULAS",
                size="sm"
        ),
        position="sticky",
        bg=Color.BACKGROUND.value,
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        top="0",
        width="100%"
    )