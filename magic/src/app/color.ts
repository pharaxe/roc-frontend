export class Color {
   name: string;
   symbol: string;

   constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
   }
}

export const white = new Color("White", "W");
export const blue = new Color("Blue", "U");
export const black = new Color("Black", "B");
export const red = new Color("Red", "G");
export const green = new Color("Green", "G");
