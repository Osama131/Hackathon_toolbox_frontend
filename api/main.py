from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse


app = FastAPI()


origins = [
    "http://localhost:3000",  # React
    "http://localhost:8080",  # Vue.js
    "http://localhost:8000",  # Angular
    "http://localhost",  # Localhost
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/mdx")
def read_mdx():
    return FileResponse('mdx/test.mdx')
