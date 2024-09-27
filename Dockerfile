FROM python:3.9

WORKDIR /app

RUN pip install fastapi uvicorn

COPY ./server.py .

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
