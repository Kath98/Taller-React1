// 1. JSX
//Crea un nuevo componente llamado WelcomeMessage que renderice un mensaje de bienvenida en JSX. 
//Luego, utiliza este componente en el componente principal App.

import { list } from "postcss";

//4. Maps
//Crea una lista de productos en el componente principal App utilizando un array de objetos que contenga la
// información de cada producto. Luego, utiliza el método map para renderizar múltiples instancias del componente 
//ProductCard con los datos de cada producto.

function WelcomeMessage() {
  return <h1>Bienvenido!!</h1>;
}

export default function PrincipalApp() { 
  
  const lista=[{ 
  nombre: "leche",
  descripcion:"Bueno",
  precio: "5.000",

}, { 
  nombre: "Pan",
  descripcion:"Bonito",
  precio: "1.000",

},{ 
  nombre: "Cafe",
  descripcion:"Bararto",
  precio: "20.000",

},];
  return (
    <><div>
      <h2>Componente principal</h2>
      <WelcomeMessage /> { }

    </div><div>
        <h2>Informacion del Producto</h2>
        <ProductCard nombre={lista [0,0].nombre} ></ProductCard>
        <ProductCard descripcion={lista [0,0].descripcion} ></ProductCard>
        <ProductCard precio={lista [0,0].precio} ></ProductCard>
        <ProductCard nombre={lista [0,1].nombre} ></ProductCard>
        <ProductCard descripcion={lista [0,1].descripcion} ></ProductCard>
        <ProductCard precio={lista [0,1].precio} ></ProductCard>
        <ProductCard nombre={lista [0,2].nombre} ></ProductCard>
        <ProductCard descripcion={lista [0,2].descripcion} ></ProductCard>
        <ProductCard precio={lista [0,2].precio} ></ProductCard>

      
      </div></>

    
  );
}

// 2. Componentes
// Crea un nuevo componente llamado ProductCard que represente una tarjeta de producto con información 
//como el nombre, la descripción y el precio. 
//Utiliza este componente para mostrar al menos tres productos diferentes en el componente principal App.

//3.  Props
// Agrega propiedades (props) al componente ProductCard para pasar la información del producto desde el 
//componente principal App. Incluye propiedades como el nombre, la descripción y el precio para cada producto
// y asegúrate de mostrar correctamente esta información en el componente ProductCard.



function ProductCard(props) {
 /* return (
    <><div className="product-card">
      <h3>Nombre:{nombre}</h3>
      <p>Descripcion:{descripcion}</p>
      <p>Precio:{precio}</p>
    </div></>
  )*/
return (
  <div>
{ lista.map((elemento) => (
    <div className="product-card">
      return <h3>nombre:{elemento}</h3>
      return <p>descripcion:{elemento}</p>
      return <p>precio:{elemento}</p>
    </div>
))}  ;

</div>
);
};

//5.Combinación de conceptos anteriores
//En este ejercicio final, crea un componente llamado ProductList que reciba una lista de productos como prop (props)
// y utilice el método map para renderizar dinámicamente múltiples instancias del componente ProductCard con los datos
// de cada producto. Utiliza este componente en el componente principal App y asegúrate de pasar la lista de productos 
//como prop.

export default function ProductCard() {
  const lista=[{ 
    nombre: "leche",
    descripcion:"Bueno",
    precio: "5.000",
  
  }, { 
    nombre: "Pan",
    descripcion:"Bonito",
    precio: "1.000",
  
  },{ 
    nombre: "Cafe",
    descripcion:"Bararto",
    precio: "20.000",
  
  },];

  function ProductList(lista) {
    return (
        <>
            <p><strong>Nompre del producto:</strong> {lista.nombre}</p>
            <p><strong>Descripción:</strong> {lista.descripcion}</p>
            <p><strong>Precio:</strong> {lista.precio}</p>
        </>
    )
  }
      
  return (
      <ul>
          {productos.map((elemento) => {
              return <ProductList nombre={elemento.nombre} descripcion={elemento.descripcion} precio={elemento.precio}></ProductList>
          })}
      </ul>
  )
}








