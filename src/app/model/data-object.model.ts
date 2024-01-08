
export interface ChildObject {
  id: string;
  color: string;
}

export interface DataObject {
  id: string;
  int: number;
  float: number;
  color: string;
  child: ChildObject;
}
