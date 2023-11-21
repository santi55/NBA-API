import reflex as rx
from enum import Enum
from NBA_API.styles.font import Fonts as Font
from NBA_API.styles.color import Colors as Color

# Sizes
class Size(Enum):
    XSMALL = "0.25em"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"
    
   


class Image(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"
    ICO = "6em"

BASE_STYLE = {
    "font_family" : Font.DEFAULT.value,
    "bg_image": "/background/background.jpg",
    "background_size" : "cover",
    "background_position": "center",
    "background_repeat": "no_repeat",
    "color": "black",
    
    rx.Divider: {
        "margin_bottom": "1em",
        "margin_top": "0.5em",
    },
    
    rx.Image: {
        "height":f"{Image.ICO.value}",
        "width":f"{Image.ICO.value}",
        "border_radius":f"{Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} {Size.DEFAULT.value} ",
        "border": f"{Size.XSMALL.value} solid {Color.SEPARATOR.value}",
        "box_shadow":"lg",
        "bg":"black",
        "max:height":"60%",
        "max_width":"60%"
    }
}
