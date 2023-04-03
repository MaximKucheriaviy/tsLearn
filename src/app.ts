export {};

let age: number;
let name: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

let anything: any;

let some: any;
some = "Text";

let str: string;

str = some;

let person: [string, number];

enum State {
  LOADING,
  READY,
}

let variable: string | number;
let variable2: "enable" | "disable";

let showMessage: (message: string) => void;
let calc: (num1: number, num2: number) => number;
let customError: () => never;

type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
