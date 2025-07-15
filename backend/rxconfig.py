import reflex as rx

config = rx.Config(
    app_name="podcast_discovery",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)