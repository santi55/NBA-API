import reflex as rx
from NBA_API.state import State, User



    
def row(user : User):
    return rx.tr(
        rx.td(user.id),
        rx.td(user.user_name),
        rx.td(user.user_email),
        rx.th(rx.icon(tag="close", on_click=State.db_delUser(user.id),color_scheme="teal"))
    )

def tabla_usuarios():
   return rx.cond(
        State.len_usuarios==0,
        rx.vstack(
            rx.text("no hay usuarios"),
            #rx.button("añadir usuario", on_click=State.db_addUser())
        ),
        rx.vstack(
           # rx.button("añadir usuario", on_click=State.db_addUser()),
            rx.table_container(
                rx.table(
                    rx.thead(
                        rx.tr(
                            rx.th("ID"),
                            rx.th("Username"),
                            rx.th("Email")
                        )
                    ),
                    rx.tbody(
                        rx.foreach(
                            State.users,
                            row
                        )   
                    ),
                    variant="striped",
                    color_scheme="teal",
                ),
                margin_top="1rem",
            ),
    )
   )
   
def form_register():
    return rx.vstack(
        rx.heading("Registrate"),
        rx.divider(),
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="User",
                    id="username",
                    color="black",
                    is_required=True
                ),
                rx.input(
                    placeholder="Email",
                    id="email",
                    color="black",
                    is_required=True
                ),
                rx.hstack(
                    rx.checkbox("Checked", id="check"),
                    rx.switch("Switched", id="switch"),
                ),
                rx.button("Submit", type_="submit"),
            ),
            on_submit=State.db_addUser,
            reset_on_submit=True,
        ),
    )
    
def lista_usuarios():
    return rx.box(
        rx.link(
            rx.image(src="logo.ico",bg="white"),
            on_click=State.right()
        ),
        rx.drawer(
            rx.drawer_overlay(
                rx.drawer_content(
                    rx.drawer_header("Confirm"),
                    rx.drawer_body(
                        tabla_usuarios()
                    ),
                    rx.drawer_footer(
                        rx.button(
                            "Close", 
                            on_click=State.right()
                        )
                    ),
                    bg="rgba(0, 0, 0, 0.3)",
                )
            ),
            is_open=State.show_right,
        ),
)