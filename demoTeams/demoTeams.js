import { LightningElement,api } from 'lwc';

export default class DemoTeams extends LightningElement {

     @api image ='';
     @api image1 ='';
     @api image2='';
     @api image3 ='';
     @api image4 ='';
     @api image5 ='';
     @api image6 ='';
     @api image7 ='';
     @api image8 ='';
     @api name = '';
     @api name1 = '';
     @api name2 = '';
     @api name3 = '';
     @api name4 = '';
     @api name5 = '';
     @api name6 = '';
     @api name7 = '';
     @api name8 = '';
     @api position = '';
     @api position1 = '';
     @api position2 = '';
     @api position3 = '';
     @api position4 = '';
     @api position5 = '';
     @api position6 = '';
     @api position7 = '';
     @api position8 = '';
     @api technology = '';
     @api technology1 = '';
     @api technology2 = '';
     @api technology3 = '';
     @api technology4 = '';
     @api technology5 = '';
     @api technology6 = '';
     @api technology7= '';
     @api technology8 = '';

      
     currentPos = 0;
     elements = [];
     directionToNext = true;
     constructor() {
         super();
         for (let i = 0; i < 9; i++) {
             this.elements.push({
                 'txt': `Div number : ${i+1}`
             });
         }
     }
     
     connectedCallback() {
         // eslint-disable-next-line @lwc/lwc/no-async-operation
         setInterval(() => {
             let c = 0;
             if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                 c = 1;
             }
             if (this.currentPos === 0) {
                 this.directionToNext = true;
             } else if (this.currentPos === (-(Math.floor(this.elements.length / 4)) + c)) {
                 this.directionToNext = false;
             }
             if (this.directionToNext) {
                 this.next();
             } else {
                 this.previous();
             }
         }, 4000);
     }
     previous() {
         this.directionToNext = false;
         if (this.currentPos < 0) {
             const a = (this.currentPos) * 100;
             const b = (this.currentPos + 1) * 100;
             let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
 
             firstDiv.animate([{
                     transform: `translateX(${a}%)`
                 },
                 {
                     transform: `translateX(${b}%)`
                 }
             ], {
                 duration: 500,
                 fill: "forwards"
             });
             this.currentPos++;
         }
 
 
     }
     next() {
         this.directionToNext = true;
         let c = 0;
         if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
             c = 1;
         }
         if (this.currentPos > (-(Math.floor(this.elements.length / 4)) + c)) {
             const a = (this.currentPos) * 100;
             const b = (this.currentPos - 1) * 100;
             let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
             firstDiv.animate([{
                     transform: `translateX(${a}%)`
                 },
                 {
                     transform: `translateX(${b}%)`
                 }
             ], {
                 duration: 500,
                 fill: "forwards"
             });
             this.currentPos--;
         }
 
     }
 
}


