export class Card {
   id: number;
   name: string;
   url: string;
   cmc: number;
   mana_cost: string;
   mana_symbols: string[];

   multiverseid: number;
   rarity: string;

   constructor(config: any) {
      this.id = config.id;
      this.name = config.name;
      this.url = config.url;
      this.mana_cost = config.mana_cost;
      this.cmc = config.cmc;

      this.mana_symbols = [];

      this.parseManaCost();
   }

   parseManaCost() {
      if (this.mana_cost) {
         let manas = this.mana_cost.toLowerCase();
         manas = manas.replace(/{/g, '');
         manas = manas.replace(/\//g, '');
         manas = manas.replace(/}/g, ',');
         manas = manas.substring(0, manas.length-1); // trim off leading comma
         this.mana_symbols = manas.split(",");
      } 
   }

   getAdjustedCmc() {
      let adjusted_cmc = this.cmc;

      if (this.cmc != 0 && this.mana_cost.indexOf('X') != -1) { // nonartifact X spells sort high
         adjusted_cmc += 8;
      }

   }
}
