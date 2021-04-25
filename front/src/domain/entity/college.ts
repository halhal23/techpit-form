export type College = {
  name: string;
  faculty: string;
  department: string;
}

export type Colleges = {
  search: string;
  result: CollegeResult[];
}

export type CollegeResult = {
  name: string;
  facluty: Facluty[];
}

export type Facluty = {
  name: string;
  department: string[];
}