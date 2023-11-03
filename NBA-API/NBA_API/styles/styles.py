import reflex as rx
from enum import Enum

# Constants
MAX_WIDTH = "560px"

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