```mermaid
sequenceDiagram
actor User
participant Server
User->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
Server-->>User: HTML Document
User->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>User:CSS File
User->>Server:GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>User: JavaScript File
User->Server:GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>User: JSON File
User-->Server: Complete Website
```
