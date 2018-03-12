export class Color {
   id: number;
   name: string;
   symbol: string;

   constructor(name, symbol, id) {
      this.name = name;
      this.symbol = symbol;
      this.id = id;
   }

   construct(data: any) {
      this.name = data.name;
      this.symbol = data.symbol;
      this.id = data.id;
   }
}

export const white = new Color("White", "W");
export const blue = new Color("Blue", "U");
export const black = new Color("Black", "B");
export const red = new Color("Red", "R");
export const green = new Color("Green", "G");
