from fastapi import FastAPI
from app.routers.chat import router as chat_router

app = FastAPI(title="AIC AI Service", version="0.1.0")


@app.get("/health")
def health():
    return {"ok": True}


app.include_router(chat_router, prefix="/v1")
