from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Issue(BaseModel):
    id: int
    title: str
    description: str

issues: Dict[int, Issue] = {}

@app.post("/issues/", response_model=Issue)
async def create_issue(issue: Issue):
    if issue.id in issues:
        raise HTTPException(status_code=400, detail="Issue with this ID already exists.")
    issues[issue.id] = issue
    print(issue)
    return issue

@app.get("/issues/", response_model=list[Issue])
async def get_all_issues():
    print(issues)
    return list(issues.values())

@app.get("/issues/{issue_id}", response_model=Issue)
async def read_issue(issue_id: int):
    if issue_id not in issues:
        raise HTTPException(status_code=404, detail="Issue not found.")
    print(issues[issue_id])
    return issues[issue_id]

@app.put("/issues/{issue_id}", response_model=Issue)
async def update_issue(issue_id: int, issue: Issue):
    if issue_id not in issues:
        raise HTTPException(status_code=404, detail="Issue not found.")
    issues[issue_id] = issue
    print(issue)
    return issue

@app.delete("/issues/{issue_id}")
async def delete_issue(issue_id: int):
    if issue_id not in issues:
        raise HTTPException(status_code=404, detail="Issue not found.")
    deleted_issue = issues[issue_id]
    del issues[issue_id]
    print(deleted_issue)
    return {"message": "Issue deleted"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
