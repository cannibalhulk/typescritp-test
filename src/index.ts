//tuples

let user: [number, string] = [1, "sai"];

//enums
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
enum Sizes {
  Small = 1,
  Medium,
  Large,
}
let mySize: Sizes = Sizes.Medium;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income ** 3;
  }
  return income * 33;
}

calculateTax(10_000);

//OBJECTS

let employee: Employee = {
  id: 1,
  name: "shukur",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Type aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// UNION TYPES
function kgtToLbs(weight: number | string): number {
  if (typeof weight === "string") {
    return parseInt(weight) * 2.2;
  } else return parseInt(weight.toString()) * 2.2;
}

kgtToLbs(14);
kgtToLbs("14");





// INTERSECTION TYPES
let weight: string & number;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIxsd = Draggable & Resizable;

let textBox: UIxsd = {

    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES
type Quantity = 50 |100;
let quantity: Quantity = 50;

type Metric = "sm" | "m"



// NULLABLE TYPES

function greet(name:string | null){
    if(name)
    console.log(name.toUpperCase())
    else
        console.log('Salam!')
}

greet(null)



// OPTIONAL CHAINING

type Customer = {
    birthday?: Date;
}

function getCustomer (id:number) :Customer | null {
    return id === 0 ? null : {birthday : new Date()}
}

let customer = getCustomer(0);
// Optional property access operator

console.log(customer?.birthday?.getFullYear())

//Optional element access operator 
// customers?.[0]

// Optional call 
let log: any = null;
log?.('a');