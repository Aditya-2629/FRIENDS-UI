/**
 * 
 * Creates typing animation for generated code
 * @param {string} text
 * @param {(code:string)=>void} setCode
   */

   export function typeWriter(text, setCode) {

   let index = 0;
   let output = "";

   const speed = 4;

   const interval = setInterval(() => {

   output += text[index];
   setCode(output);

   index++;

   if (index >= text.length) {
     clearInterval(interval);
     }

     }, speed);

     }
 */