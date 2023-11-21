import reflex as rx




class Spline(rx.Component):
    """Spline component."""

    library = "@splinetool/react-spline"
    tag = "Spline"
    scene: rx.Var[
        str
    ] = "https://prod.spline.design/joLpOOYbGL-10EJ4/scene.splinecode"
    is_default = True

    lib_dependencies: list[str] = ["@splinetool/runtime"]


spline = Spline.create


def spline_example():
    return rx.center(
        spline(),
        overflow="hidden",
        width="100%",
        height="30em",
    )
