import reflex as rx
from NBA_API.styles.styles import Size as Size
from NBA_API.styles.color import Colors as Color
import datetime

def footer():
    return rx.vstack(
        rx.text(
            "'WHERE AMAZING HAPPENS'",
            as_="b",
            font_style="italic",
        ),
        rx.text(
            f"© {datetime.date.today().year} by Sudosu and Such4rd",
            size=Size.XSMALL.value,
            margin_top="0px !important"
        ),
        width="100%",
        margin_top = Size.BIG.value,
        padding=Size.BIG.value
        #position= "fixed"
    )