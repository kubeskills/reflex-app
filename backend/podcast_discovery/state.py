import reflex as rx

class State(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1
