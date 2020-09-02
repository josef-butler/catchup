# CatchUp

👐 CatchUp is an app used for organising, finding and attending social events.

🔨 It's built using ASP.NET Core, React, TypeScript and Mobx.

🌱 This personal project is currently a work in progress, and is for me to develop skills specifically in ASP.NET Core, C# and TypeScript. It will:

-   Use a Web API in .NET Core with Clean Architecture using the CQRS + Mediator pattern
-   Include Identity and Authentication using .NET Core Identity
-   Use React as the client
-   Use MobX as a state management library

💾 This README will be updated as the project progresses.

---

## API requests

### Values

#### GET /api/values

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

#### GET /api/values/:id

Response body:

```JSON
{
  "id": 1,
  "name": "Value 101"
}
```

### Activities

#### GET /api/activities

Response body:

```JSON
[
  {
      "id": "7a32896b-6e65-4686-91cf-03e4265b50d6",
      "title": "Past Activity 1",
      "description": "Activity 2 months ago",
      "category": "drinks",
      "date": "2020-06-30T20:00:59.1688347",
      "city": "London",
      "venue": "Pub"
  },
  {
      "id": "25665981-5ca8-450f-a0d6-942a9828c35d",
      "title": "Past Activity 2",
      "description": "Activity 1 month ago",
      "category": "culture",
      "date": "2020-07-31T20:00:59.1710618",
      "city": "Paris",
      "venue": "Louvre"
  }
]
```

#### GET /api/activities/:guid

Response body:

```JSON
{
    "id": "7a32896b-6e65-4686-91cf-03e4265b50d6",
    "title": "Past Activity 1",
    "description": "Activity 2 months ago",
    "category": "drinks",
    "date": "2020-06-30T20:00:59.1688347",
    "city": "London",
    "venue": "Pub"
}
```

#### POST /api/activities

Request body:

```JSON
{
	"id": "{{guid}}",
	"title": "Test Create Activity",
	"description": "Description of the test event",
	"category": "Culture",
	"date": "{{activityDate}}",
	"city": "Wellington",
	"venue": "Waterfront"
}
```

Response body:

```JSON
{}
```
