FROM python:3.11-slim

WORKDIR /app

# Copy backend app and dependencies
COPY podcast_discovery /app/podcast_discovery
COPY rxconfig.py requirements.txt /app/

# Install only reflex
RUN pip install reflex==0.8.2

# Start backend-only Reflex server in prod mode
CMD ["reflex", "run", "--backend-only", "--env", "production"]
