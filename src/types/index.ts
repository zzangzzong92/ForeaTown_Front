export interface User {
  id: number;
  name: string;
  Kickname: string;
  age: number;
  sex: "male" | "female";
  location: string;
  country: string;
}

export interface Location {
  name: string;
}

export interface Country {
  name: string;
}
