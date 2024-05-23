import { Dispatch } from "react";
import store from "../store";

export type IRootStoreType = ReturnType<typeof store.getState>;

export type elementType = {
  name: { common: string, isLiked:boolean };
  capital: string;
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  subregion: string;
  population: number;
};

export type nameType={
  name:{
    isLiked:boolean,
    common:string
  }
};

export interface propsInterface {
  setError: Dispatch<string>;
}
