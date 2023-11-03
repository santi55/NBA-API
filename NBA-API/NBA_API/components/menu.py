import reflex as rx
from NBA_API.styles.styles import Size as Size

def menu() -> rx.Component:
    return rx.menu(
        rx.menu_button(
            rx.icon(tag="add")            
        ),
        rx.menu_list(
            rx.menu_item("stats"),
            rx.menu_divider(),
            rx.menu_item(""),
            rx.menu_item(""),
        ),
        margin_top=Size.BIG.value
    )   