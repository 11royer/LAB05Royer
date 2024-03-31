## SOLID

/*Aqui mostramos los 5 principios de SOLID*/

//Principio de responsabilidad unica: La clase debe tener una responsabilidad unica y definida.

class UserManager {
  saveUser(user: User) {
    // Método para guardar un usuario en la base de datos
  }
}

class EmailSender {
  sendEmail(user: User) {
    // Método para enviar un correo electrónico
  }
}

//Principio de abierto/cerrado: Se pueden añadir nuevas funcionalidades a una clase sin cambiar su codigo existente

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  calculateArea() {
    // Cálculo específico del área del círculo
  }
}

class Square implements Shape {
  calculateArea() {
    // Cálculo específico del área del cuadrado
  }
}

//Principio de sustitucion de Liskov: Objetos de una clase deriva deben poder sustituir a los objetos de la clase base, sin alterar el comportamiento del programa

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private sideLength: number) {}
  
  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

//Principio de Segregacion de interfaces: No debe depender de interfaces que no utiliza

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

class SimplePrinter implements Printer {
  print() {
    // Método para imprimir
  }
}

class SuperScanner implements Scanner, Printer {
  scan() {
    // Método para escanear
  }
  
  print() {
    // Método para imprimir
  }
}

//Principio de inversion de dependencia: Los modulos de alto nivel, no dependen de los modulos de bajo nivel

interface Database {
  query(sql: string): any;
}

class UserService {
  constructor(private database: Database) {}
  
  getUsers() {
    return this.database.query('SELECT * FROM users');
  }
}

class MySQLDatabase implements Database {
  query(sql: string) {
    // Método para realizar consultas a la base de datos MySQL
  }
}

class PostgreSQLDatabase implements Database {
  query(sql: string) {
    // Método para realizar consultas a la base de datos PostgreSQL
  }
}
