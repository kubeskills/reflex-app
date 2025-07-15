import reflex as rx

class State(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

def index():
    return rx.vstack(
        rx.heading("Podcast Discovery", font_size="2em"),
        rx.text("Click count:"),
        rx.text(State.count),
        rx.button("Click Me", on_click=State.increment),
    )

app = rx.App()
app.add_page(index, route="/")
