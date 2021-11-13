# Folder Structure
```js
.
├── package.json
├── package-lock.json
├── src
│   ├── API
│   │   └── LeaderboardApi.ts
│   ├── Constants
│   │   └── ApiConstants.ts
│   ├── Controllers
│   │   ├── ClubMemberController.ts
│   │   └── LeaderboardController.ts
│   ├── environments
│   │   ├── dev.env.ts
│   │   ├── env.ts
│   │   └── prod.env.ts
│   ├── index.ts
│   ├── Models
│   │   └── ClubMembers.ts
│   ├── Routes
│   │   ├── ClubMemberRoutes.ts
│   │   └── LeaderboardRoutes.ts
│   └── server.ts
└── tsconfig.json
```

# Setup
- In the project root, run `npm i`. This will install all the packages.
- Now, run `npm run dev`. This will start the server in development mode.
- To make changes, open a file and make the suitable changes. Saving the file will automatically restart the server.

# Available APIs
## `/api/leaderboard/rankings`
Accepted method: GET\
Request Data Type: `{}`\
Response Data Type: ```{
	handle: string,
	email: string,
	avatar: string,
	firstName: string,
	lastName: string,
	rank: string,
	rating: integer
}```

#### Example Request
```json
{}
```

#### Example Response
```json
{
	"handle": "XXXXXX",
	"email": "example1234@ex.com",
	"avatar": {"IMAGE_URL"},
	"firstName": "abc",
	"lastName": "xyz",
	"rank": 69,
	"rating": 1690
}
```

## `/api/club/member/new/member`
Accepted method: POST\
Request Data Type: ```{
	handle: string,
	rollNum: number,
	year: number,
	branch: string
}```\
Response Data Type: `{
	status: number,
	mssg: string
}`

#### Example Request
```json
{
	"user": {
		 "handle": "1900020009",
		 "rollNum": 190020009,
		 "year": 2019,
		 "branch": "EE"
	}
}
```

#### Example Response
```json
{
	"status": 200,
	"mssg": "success"
}
```
