from pydantic import BaseModel
import os


class Settings(BaseModel):
    port: int = int(os.getenv("AI_PORT", "8001"))
    provider: str = os.getenv("AI_PROVIDER", "mock")


settings = Settings()
