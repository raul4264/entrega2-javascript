const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
/*==========================================================*/

//a)  Las pizzas que tengan un id impar.

const pizzaIdImpares = pizzas.filter(pizza=> pizza.id % 2 !== 0);

pizzaIdImpares.forEach(pizza=>{
  console.log(`la ${pizza.nombre} es impar`)
}  );

/*==========================================================*/

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

let barata = pizzas.filter(pizza=> pizza.precio < 600) ;

barata.forEach(elem=> console.log("La unica pizza cuyo valor es menor a $600 es la pizza de " + elem.nombre))

/*==========================================================*/

//c) El nombre de cada pizza con su respectivo precio.



pizzas.forEach(pizza=>{
  console.log("Nombre: " + pizza.nombre + "precio " + pizza.precio)
})


/*d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.*/







var objeto=[
  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  }
]


 let aver=pizzas.map(elem=>{
  
  let nombre= elem;
     return nombre
})

aver.forEach(i=>{
  console.log(`La ${i.nombre} 🍄tienes estos ingredientes:  ${i.ingredientes}`)
}) 
