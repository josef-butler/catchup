# CatchUp

👐 CatchUp is an app used for organising, finding and attending social events.

🔨 It's built using ASP.NET Core, React, TypeScript and Mobx.

🌱 This personal project is currently a work in progress, and is for me to develop skills specifically in ASP.NET Core, C# and TypeScript. It will:

- Use a Web API in .NET Core with Clean Architecture using the CQRS + Mediator pattern
- Include Identity and Authentication using .NET Core Identity
- Use React as the client
- Use MobX as a state management library

💾 This README will be updated as the project progresses.

---

## Server-side details

### GET /values

Response body:

```JSON
[
  {
    "id": 1,
    "name": "Value 101"
  },
  {
    "id": 2,
    "name": "Value 102"
  }
]
```

### GET /values/:id

Response body:

```JSON
[
  {
    "id": 1,
    "name": "Value 101"
  }
]