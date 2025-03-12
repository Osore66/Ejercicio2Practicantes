function Blanco() {
  return {
    view: ({ }) => [
      m("div", {
        style: {
          width: "100%",
          height: "80px",
          "box-sizing": "border-box",
        },
      }),
      "",
    ],
  };
}

function Header() {
  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            width: "100%",
            height: "70px",
            position: "fixed",
            backgroundColor: "#666666",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            padding: "0 10px",
            boxSizing: "border-box",
            zIndex: 1000,
          },
        },

        m(m.route.Link, {
          href: "/Inicio",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Inicio"),
        m(m.route.Link, {
          href: "/Marcos",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Marcos"),

        m(m.route.Link, {
          href: "/Santiago",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Santiago"),

        m(m.route.Link, {
          href: "/Alex",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Alex"),

        m(m.route.Link, {
          href: "/Domingo",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Domingo"),

        m(m.route.Link, {
          href: "/Sandra",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Sandra"),

        m(m.route.Link, {
          href: "/Yoannet",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Yoannet"),

        m(m.route.Link, {
          href: "/Pau",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Pau"),

      );

    },
  };
}

function Texto() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página principal"
        ),
      );
    },
  };
}

//----------Marcos-----------

//Pon tu código aquí

function HeaderMarcos() {
  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            width: "100%",
            height: "70px",
            position: "fixed",
            backgroundColor: "#666666",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            padding: "0 10px",
            boxSizing: "border-box",
            zIndex: 1000,
          },

        },
        m(m.route.Link, {
          href: "/Inicio",
          style: {
            color: "white",
            textDecoration: "none",
          },
        }, "Inicio"),
      );

    },
  };
}

function PaginaMarcos() {

  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {

              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "fontSize",
            },
          },
          "Página Marcos"
        ),
      );
    },
  };
}

function CarruselMarcos() {
  return {
    select:
    {
      model: {
        tarjetas: [
          { titulo: "Titulo 1", imagen: "img/vino blanco garima.jpg" },
          { titulo: "Titulo 2", imagen: "img/queso san simon ahumado.jpg" },
          { titulo: "Titulo 3", imagen: "img/mejillones en escabeche 13-18.jpg" },
          { titulo: "Titulo 4", imagen: "img/jamon cocido libra.jpg" },
          { titulo: "Titulo 5", imagen: "img/sol.png" },
          { titulo: "Titulo 6", imagen: "img/arbol.jpg" },
        ],
        selectedPost: 0,
      },
    },
    view: function () {
      return m("div", { style: { margin: "20px 0px", textAlign: "center" } }, [
        m("h1", { style: { marginBottom: "15px" } }, "Carrusel"),
        m("div", {
          style: {
            position: "relative", width: "600px", height: "550px", margin: "0 auto", overflow: "hidden", display: "flex", borderRadius: "6px",
          },
        },
          m("img", {
            src:
              this.select.model.tarjetas[
                this.select.model.selectedPost].imagen,
            alt:
              this.select.model.tarjetas[
                this.select.model.selectedPost].titulo,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }),

        ),
        m("div", { style: { marginTop: "10px" } }, [
          m("button", {
            style: { marginRight: "10px", padding: "5px 10px", cursor: "pointer" },
            onclick: () => {

              this.select.model.selectedPost =
                (
                  this.select.model.selectedPost - 1 +
                  this.select.model.tarjetas.length) %
                this.select.model.tarjetas.length;
              m.redraw();
            },
          }, "<"),
          m("button", {
            style: { padding: "5px 10px", cursor: "pointer" },
            onclick: () => {

              this.select.model.selectedPost =
                (
                  this.select.model.selectedPost + 1) %
                this.select.model.tarjetas.length;
              m.redraw();
            },
          }, ">"),
        ]),
      ]);
    },
  };
}

function DesplegableMarcos() {
  return {
    select: {
      model: {
        preguntasFrecuentes: [
          {
            titulo: "¿Qué es el Vino Blanco Garima?",
            texto: "El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
          {
            titulo: "¿Qué es el Queso San Simón Ahumado?",
            texto: "Es un queso gallego con un sabor ahumado y una textura cremosa, perfecto para tablas de queso o para acompañar vinos. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
          {
            titulo: "¿Qué son los Mejillones en Escabeche?",
            texto: "Son mejillones cocidos en una mezcla de vinagre y aceite, lo que les da un sabor ácido y picante, muy populares como aperitivo. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
          {
            titulo: "¿Qué es el Jamón Cocido Libra?",
            texto: "Es un jamón cocido de alta calidad, cortado en finas lonchas, ideal para sándwiches y bocadillos. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
          {
            titulo: "¿Qué es el Sol?",
            texto: "El sol es una estrella que proporciona luz y energía a la Tierra, fundamental para la vida en nuestro planeta. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
          {
            titulo: "¿Qué es el Árbol?",
            texto: "Un árbol es una planta de tallo leñoso que crece durante muchos años y es vital para el ecosistema al producir oxígeno. El Vino Blanco Garima es un vino suave, ideal para acompañar platos ligeros como mariscos y ensaladas.",
            menuAbierto: false,
          },
        ],
        selectedPost: 0,
      },
    },

    toggleMenu: function(selectedPost) {
      this.select.model.preguntasFrecuentes[selectedPost].menuAbierto = !this.select.model.preguntasFrecuentes[selectedPost].menuAbierto;
      m.redraw();
    },

    view: function () {
      return m("div", {
        style: {
          margin: "10px 0px", marginBottom: "20px",
        }
      },
        m("h1", { style: { marginBottom: "20px", fontSize: "25px", } }, "Preguntas Frecuentes"),

        m("div", {
          style: {
            margin: "0", display: "flex", flexDirection: "column",
          }
        },

          m("ul", {
            style: { 
              fontSize: "18px",
              listStyleType: "none",
            }
          },
            this.select.model.preguntasFrecuentes.map((tarjeta, selectedPost) =>
              m("li", {
                style: {    
                  width: "100%",
                  cursor: "pointer",
                  borderTop: selectedPost>0 ? "2px solid black" : "0px",
                },
                onclick: () => this.toggleMenu(selectedPost),
              },

              m("div", {
                style: {
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }
              },

                m("h2", {
                  style: {
                    fontSize: "20px", padding: "17px 0px"
                  }
                }, tarjeta.titulo),

                m("img", {
                  src: tarjeta.menuAbierto ? "img/resta.webp" : "img/suma.png",
                  style: {
                    height: "25px",
                  }
                },),
              ),
                m("div", {
                  style: {
                    overflow: "hidden", maxHeight: tarjeta.menuAbierto ? "200px" : "0px", transition: "max-height 0.5s ease",
                  }
                },
                  m("p", { style: { padding: "10px", fontSize: "16px", } }, tarjeta.texto)
                ),
              )
            )
          )
        )
      );
    }
  };
}

function PersistenciaMarcos(){
  var def=10;
  return{
    oninit: function(){
      this.numero= parseInt(localStorage.getItem("numero") || def);
    },
  
  actualizarNumero: function(){
    localStorage.setItem("numero", this.numero);
  },

  sumarNumero: function(){
    this.numero<=19 ? this.numero++ && this.actualizarNumero(): this.numero=20;
  },

  restarNumero: function(){
    this.numero>=1 ? this.numero-- && this.actualizarNumero(): this.numero=0;
  },

  porDefecto: function(){
  this.numero=def;
  this.actualizarNumero();
  },

    view: function () {
      return m(
        "div",
        {
          style: {
            marginBottom: "50px",
          },
        },

        m( "h1", { style: { margin: "0", textAlign: "center", }, }, "Persistencia de Datos" ),
        
        m("h2", { style:{ marginTop: "20px", textAlign: "center", } }, this.numero),

          m("div", {
            style:{
            marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px",
            }
          },
          m("button", {
            style:{
            width: "80px", height: "30px", backgroundColor: "red", color: "white", border: "1px solid black", borderRadius: "6px", fontWeight: "bold", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", cursor: "pointer",
            },
            onclick: () => this.restarNumero(),
          }, "Restar"),

          m("button", {
            style:{
            width: "80px", height: "30px", backgroundColor: "orange", color: "white", border: "1px solid black", borderRadius: "6px", fontWeight: "bold", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", cursor: "pointer",
            },
            onclick: () => this.porDefecto(),
          }, "Resetear"),

          m("button", {
            style:{
            width: "80px", height: "30px", backgroundColor: "green", color: "white", border: "1px solid black", borderRadius: "6px", fontWeight: "bold", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", cursor: "pointer",
            },
            onclick: () => this.sumarNumero(),
          }, "Sumar"),
        ),
      );
    },
  };
  
}

function TareasMarcos(){
  let tarea;
  let tareainp;
  return{
    view: function () {
      return m(
        "div",
        {
          style: {
            marginBottom: "50px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              textAlign: "center",
            },
          },
          "Lista de tareas"
        ),
        m("div", {
          style:{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }

        },
        m("input", {
          type: "text",
          placeholder: "Introduce la tarea que deseas añadir",
          value: tareainp,
          oninput: (e) => { tareainp = e.target.value; m.redraw(); },
          style: {
            paddingLeft: "10px",
            width: "70%",
            fontSize: "14px",
            minHeight: "40px",
            display: "flex",
           
          },
        }),
        m("button", {
          style:{
          width: "100px",
          height: "40px",        
          cursor: "pointer",
          },
          onclick: () =>{tarea=tareainp; m.redraw()},
        }, "Añadir"),
        m("p", {style: {}}, `Tu tarea es: ${tarea}`),
      ),
       
      );
    },
  };
  };

function FooterMarcos() {
  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            width: "100%", height: "70px", position: "", bottom: 0, backgroundColor: "#666666", display: "flex", alignItems: "center", padding: "0 20px", boxSizing: "border-box", zIndex: 1000,
          },
        },
        m("p", { style: { color: "white", textDecoration: "none", }, }, "Esto es un footer"),

      );

    },
  };
}

//----------Santiago-----------

//Pon tu código aquí


function PaginaSantiago() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        { style: { marginTop: "20px" } },
        m( "h1", { style: { margin: "0", marginBottom: "15px", textAlign: "center", fontSize: fontSize, }, }, "Página Santiago" ),
      );
    },
  };
}

//----------Alex-----------

//Pon tu código aquí


function PaginaAlex() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página Alex"
        ),
      );
    },
  };
}

//----------Domingo-----------

//Pon tu código aquí


function PaginaDomingo() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página Domingo"
        ),
      );
    },
  };
}

//----------Sandra-----------

//Pon tu código aquí


function PaginaSandra() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página Sandra"
        ),
      );
    },
  };
}


//----------Yoannet-----------

//Pon tu código aquí


function PaginaYoannet() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página Yoannet"
        ),
      );
    },
  };
}

//----------Pau-----------

//Pon tu código aquí


function PaginaPau() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            marginTop: "20px",
          },
        },
        m(
          "h1",
          {
            style: {
              margin: "0",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: fontSize,
            },
          },
          "Página Pau"
        ),
      );
    },
  };
}


//----------PÁGINAS-----------

function Inicio() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(Texto),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Marcos() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () =>
      m(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
        },
        m(HeaderMarcos),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(CarruselMarcos),
          m(DesplegableMarcos),
          m(PersistenciaMarcos),
          m(TareasMarcos)
        ),
        m(FooterMarcos)
      ),
  };
}

function Santiago() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaSantiago),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Alex() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaAlex),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Domingo() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaDomingo),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Sandra() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaSandra),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Yoannet() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaYoannet),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function Pau() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => [
      m(
        "div",
        {
          style: {
            /*backgroundColor: "grey"*/
          },
        },
        m(Header),
        m(Blanco),
        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: "32px",
              padding: "0px 10%",
              margin: "0 auto",
            },
          },
          m(PaginaPau),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

export { Inicio, Marcos, Santiago, Alex, Domingo, Sandra, Yoannet, Pau };