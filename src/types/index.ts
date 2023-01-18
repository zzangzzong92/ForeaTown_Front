export interface User {
  id: number;
  name: string;
  Kickname: string;
  age: number;
  sex: "male" | "female";
  location: string;
  country: string;
  userImg: string;
}

export interface Location {
  name: string;
}

export interface Country {
  name: string;
}

export interface Language {
  id: number;
  title: string;
  like: boolean;
  createdAt: string;
  onOffType: "online" | "offline";
  place: string;
  groupMembers: number;
  groupMaster: string;
}

export interface SignIn {
  email: string;
  password: string;
}
