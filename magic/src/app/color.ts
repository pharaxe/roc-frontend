export class Color {
   name: string;
   symbol: string;

   constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
   }
}

export const white = new Color("White", "w");
export const blue = new Color("Blue", "u");
export const black = new Color("Black", "b");
export const red = new Color("Red", "r");
export const green = new Color("Green", "g");
