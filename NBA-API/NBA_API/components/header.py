import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color
from NBA_API.styles.styles import Image as Image
from NBA_API import constants
def link_rs(src : str, href: str):
    return rx.link(
         rx.image(src=src, height=Size.BIG.value),
         href=href,
         is_external=True
    )
def header() -> rx.Component:
    return rx.hstack(
        rx.link( 
            rx.text(
                rx.span("data",font_style="italic"),
                rx.span("JS",font_weight="bold"),
            ),
            href="/"
        ),
        rx.spacer(),
        rx.hstack(
            link_rs("linkedin.svg",constants.LINKEDIN_URL),
            link_rs("github.svg",constants.GITHUB_URL),
            link_rs("mail.svg",constants.MAIL_URL)
        ),
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        top="0",
        width="100%",
        position="sticky",
        z_index="4",
        height="5%",
        border_bottom= f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
        #border_color= Color.SEPARATOR.value,
        bg_image=Color.HEADER.value,
    )