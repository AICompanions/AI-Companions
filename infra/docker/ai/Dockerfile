FROM python:3.11-slim
WORKDIR /app
COPY ../../apps/ai/requirements.txt .
RUN pip install -r requirements.txt
COPY ../../apps/ai /app
EXPOSE 8001
