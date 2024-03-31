(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const userEmails = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];
  console.log(userEmails);
  /*
  Palabra clave "const" declara la variable "userEmails"
  Variable "l" cambiado a "userEmails" para mejor descripcion
  Cambio de tipo de variable "Array<string>" a una definicion simple
  Elimina las repeticiones de emails 
  */

  //Lista de compras de un carrito
  const shoppingList = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];
  console.log(shoppingList);
  /*
  Palabra clave "const" declara la variable "shoppingList"
  Variable "var2" cambiado a "shoppingList" para mejor descripcion
  Cambio de tipo de variable "Array<string>" a una definicion simple de JavaScript 
  */

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThre = (NumberToAdd: number): number => {
    return NumberToAdd + 3;
  }
  console.log(addThre(2));
  /*
  Palabra clave "const" declara la variable "addThree"
  Variable "fff" cambiado a "addThree" para mejor descripcion
  */
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalized(w: string): string { 
    const capitalized = w.charAt(0).toUpperCase() + w.substring(1).toLocaleLowerCase();
    return capitalized;
  }
  console.log(capitalized("capricorn"));
  /*
  Palabra clave "const" declara la variable "capitalized"
  Variable "capi" cambiado a "capitalized" para que sea mas descriptivo
  Corregimos "toLowerCase" a "toLowerCase", por que no asignaba el resultado a ninguna variable
  */

  //variable que alerta en caso de que algun evento suceda
  let eventOccurred: boolean = false;
  if(eventOccurred)
    console.log('event');
  /*
  Utilizamos "let" para declarar variable
  Variable "www" cambiado a "eventOccurred"
  */



  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let hasAccess: boolean = true;
  if(hasAccess)
   console.log('welcome');
  /*
  Utilizamos "let" para declarar variable, ya que sus valor no cambia
  Variable "c" cambiado a "hasAccess" para mejor descripcion
  */

  //variable para hallar el promedio de 3 numeros
  const sudo: number = (1 + 2 + 3) / 3;
  console.log(sudo);
  /*
  Mantenemos "const" ya que el valor sudo es constante y no esperamos cambios
  */
  
  //variable que almacena el valor de PI
  const pizza: number = 3.141592654;
  console.log(pizza);
  /*
  Utilizamos "const" en lugar de "let"
  */

  //variabel que controla si un archivo es modificable 
  let Bv: boolean = false;
  if(Bv) console.log('edit this file?');
  /*
  cambiamos "let" a "const"
  */
  
  //variable para almacenar el valor de e
  const eulerNumber: number = 2.718281828; 


})();