type Stock = {
  DATPRG: string;
  PREABE: number;
  PREMAX: number;
  PREMIN: number;
  PREMED: number;
  PREULT: number;
  QUATOT: number;
  VOLTOT: number;
 }

type NameStock = {
  id: number,
  sigla: string,
  name: string,
}


type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}

type User = {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
          "lat": string,
          "lng": string
      }
  },
  "phone": string,
  "website": string,
  "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
  }
}

type Album = {
  "userId": number,
  "id": number,
  "title": string
}

type Todos = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean,
}