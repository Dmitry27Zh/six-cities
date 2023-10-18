import { SORT_TYPES } from './../const';
export type FormDataState = {
  [name: string]: string;
}

export type ClassName = string

export type Url = string

export type SortTypes = typeof SORT_TYPES[number]
