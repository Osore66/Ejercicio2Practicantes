//==========VARIABLES GLOBALES===========

//Aquí van las variables globales(las que se usan en más de una página)
//==========COMPONENTES GLOBALES==========
let clickie = false;

//==========FUNCIONES GLOBALES==========

//Aquí van las funciones globales(las que se usan en más de una página)

//==========MARCOS==========
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

//==========MARCOS==========

function HeaderMarcos() {
  let backgroundColor = clickie ? "gray" : "white";
  let color = clickie ? "white" : "black";
  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            width: "100%",
            height: "70px",
            position: "fixed",
            backgroundColor: backgroundColor,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            padding: "0 10px",           
            zIndex: 1001,
          },

        },
        m(m.route.Link, {
          href: "/Inicio",
          style: {
            textDecoration: m.route.get() === "/Marcos" ? "underline" : "none",
            fontWeight: m.route.get() === "/Marcos" ? "bold" : "normal",
            color: color,
          },
        }, "Inicio"),

        m(m.route.Link, {
          href: "/Página 2",
          style: {
            color: color,
            textDecoration: m.route.get() === "/Página 2" ? "underline" : "none",
            fontWeight: m.route.get() === "/Página 2" ? "bold" : "normal",
          },
        }, "Página 2"),

        m("button",{
          onclick: ()=>
          {
            clickie = !clickie;
            m.redraw();
          },
          style:{
          width: "40px",
          height: "40px",
          cursor: "pointer",
          border: "1px solid black",
          backgroundImage: "url('./img/modo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",  
        },
      },  
      ),
      );
    },
  };
}

function cookiesMarcos(){
  return {
    view: function () {
      return m(
        "div",
        {
          style: {
            
          },
        },
      );
    },
  };
}

function CarruselMarcos() {
  let clicsig = false;
  let clicant = false;
  return {
    select:
    {
      model: {
        tarjetas: [
          { titulo: "Titulo 1", imagen: "img/vino blanco garima.jpg" },
          { titulo: "Titulo 2", imagen: "img/queso san simon ahumado.jpg" },
          { titulo: "Titulo 3", imagen: "img/mejillones en escabeche 13-18.jpg" },
          { titulo: "Titulo 4", imagen: "img/jamon cocido libra.jpg" },
          { titulo: "Titulo 5", imagen: "img/lomito de bellota 100.jpg" },
          { titulo: "Titulo 6", imagen: "img/arbol.jpg" },
        ],
        selectedPost: 0,
      },
    },
    view: function () {
      const siguiente = (this.select.model.selectedPost + 1) % this.select.model.tarjetas.length;
      const siguiente1 = (this.select.model.selectedPost + 2) % this.select.model.tarjetas.length;
      const anterior = (this.select.model.selectedPost - 1 + this.select.model.tarjetas.length)% this.select.model.tarjetas.length;
      const anterior1 = (this.select.model.selectedPost - 2 + this.select.model.tarjetas.length)% this.select.model.tarjetas.length;
      return m("div", { style: { margin: "20px 0px", textAlign: "center" } }, [
        m("h1", { style: { marginBottom: "15px" } }, "Carrusel"),
        m("div", 
          {
          style: {
             width: "600px", height: "550px", margin: "0 auto", display: "flex", justifyContent: "center", borderRadius: "6px", alignItems: "center"
          },
        },
        m("img", {
          src:
            this.select.model.tarjetas[
              anterior1].imagen,
          alt:
            this.select.model.tarjetas[
              anterior1].titulo,
          style: {
            position: "relative",
            right: clicsig ? "80px" : "0px", 
            left: clicant ? "80px" : "0px", 
            transition: clicsig ? "right 0.5s ease" : "left 0.5s ease",
            width: "150px",
            height: "150px",
            objectFit: "cover",
          },
        },
        
      ),
        m("img", {
            src:
              this.select.model.tarjetas[
                anterior].imagen,
            alt:
              this.select.model.tarjetas[
                anterior].titulo,
            style: {
              position: "relative",
              right: clicsig ? "80px" : "0px", 
              left: clicant ? "80px" : "0px", 
              transition: clicsig ? "right 0.5s ease" : "left 0.5s ease",
              width: "300px",
              height: "300px",
              objectFit: "cover",
            },
          }),
          m("img", {
            src:
              this.select.model.tarjetas[
                this.select.model.selectedPost].imagen,
            alt:
              this.select.model.tarjetas[
                this.select.model.selectedPost].titulo,
            style: {
              position: "relative",
              width: "450px",
              height: "450px",
              objectFit: "cover", 
              zIndex: 1000,
            },
          }),
          m("img", {
            src:
              this.select.model.tarjetas[siguiente].imagen,
            alt:
              this.select.model.tarjetas[siguiente].titulo,
            style: {
              position: "relative",
              right: clicsig ? "80px" : "0px", 
              left: clicant ? "80px" : "0px", 
              transition: clicsig ? "right 0.5s ease" : "left 0.5s ease",
              width: "300px",
              height: "300px",
              objectFit: "cover",
              zIndex: 500,
            },
          }),
          m("img", {
            src:
              this.select.model.tarjetas[siguiente1].imagen,
            alt:
              this.select.model.tarjetas[siguiente1].titulo,
            style: {
              position: "relative",
              right: clicsig ? "80px" : "0px",
              left: clicant ? "80px" : "0px", 
              transition: clicsig ? "right 0.5s ease" : "left 0.5s ease",
              right: "50px",
              width: "150px",
              height: "150px",
              objectFit: "cover",
            },
          }),
        ),
        m("div", { style: { marginTop: "10px" } }, [
          m("button", {
            style: { marginRight: "10px", padding: "5px 10px", cursor: "pointer" },
            onclick: () => {
              clicant=true,
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
              clicsig=true,
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
            textAlign: "center"
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
          onmouseover: (e) => e.target.style.backgroundColor="purple",
          onmouseout: (e) => e.target.style.backgroundColor="orange",
        }, "Resetear"),

        m("button", {
          style:{
          width: "80px", height: "30px", backgroundColor: "green", color: "white", border: "1px solid black", borderRadius: "6px", fontWeight: "bold", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", cursor: "pointer",
          },
          onclick: () => this.sumarNumero(),
        }, "Sumar"),       
      ),
      m("input", {
        type: "range",
        max:20,
        min: 0,
        value: this.numero,
        step: 1,
        style:{marginTop: "20px", width: "200px", accentColor: "red", pointerEvents: "none"}}),
      );
    },
  };
  
}
 
function TareasMarcos() {
  let existe = false;
  let editarIndex = -1;
  return {
    tareaInput: "",
    tareas: [],
    completadas: [],

    oninit: function () {
      const tareasGuardadas = localStorage.getItem("tareas");
      if (tareasGuardadas) {
        try {
          this.tareas = JSON.parse(tareasGuardadas);
        } catch (error) {
          console.error("Error al parsear 'tareas' del localStorage:", error);
          this.tareas = [];
        }
      } else {
        this.tareas = [];
      }
      const completadasGuardadas = localStorage.getItem("completadas");
      if (completadasGuardadas) {
        try {
          this.completadas = JSON.parse(completadasGuardadas);
        } catch (error) {
          console.error("Error al parsear 'completadas' del localStorage:", error);
          this.completadas = [];
        }
      } else {
        this.completadas = [];
      }
    },
    actualizarTareas: function () {
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
      localStorage.setItem("completadas", JSON.stringify(this.completadas));
    },

    agregarTarea: function () {
      if (this.tareaInput.trim() === "") return;
      this.tareas.push(this.tareaInput);
      this.tareaInput = "";
      this.actualizarTareas();
    },

    editarTarea: function (index, nuevoValor) {
      if (nuevoValor.trim() === "") return;
      this.tareas[index] = nuevoValor;
      editarIndex = -1;
      this.actualizarTareas();
    },

    view: function () {
      return m("div", { style: { marginBottom: "50px" } },
        m("h1", { style: { margin: "0", textAlign: "center" } }, "Lista de tareas"),

        m("div", {
          style: {
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          },
        },
          m("input", {
            type: "text",
            placeholder: "Introduce la tarea que deseas añadir",
            value: this.tareaInput,
            oninput: (e) => { this.tareaInput = e.target.value; },
            style: {
              paddingLeft: "10px",
              width: "70%",
              fontSize: "14px",
              minHeight: "40px",
              display: "flex",
            },
          }),
          m("button", {
            style: {
              width: "100px",
              height: "40px",
              cursor: "pointer",
            },
            onclick: () => { this.agregarTarea(); },
          }, "Añadir")
        ),

        m("div", {
          style: {
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          },
        },
          m("h2", { style: { textAlign: "center" } }, "Pendientes"),
          m("p", { style: { textAlign: "center", marginTop: "20px" } }, this.tareas.length === 0 ? "No tienes tareas pendientes" : ""),
          this.tareas.map((t, index) =>
            m("div", {
              style: {
                display: "flex",
                marginTop: "10px",
                justifyContent: "center",
                gap: "10px",
              },
            },
              m("input", {
                type: "checkbox",
                checked: false,
                style: { width: "18px", cursor: "pointer" },
                onclick: () => {
                  this.completadas.push(t);
                  this.tareas.splice(index, 1);
                  this.actualizarTareas();
                  m.redraw();
                },
              }),
              m("label", {
                style: {
                  border: "1px solid black",
                  width: "90%",
                  minHeight: "40px",
                  borderRadius: "6px",
                  alignItems: "center",
                  display: "flex",
                  padding: "0 20px",
                  justifyContent: "space-between"
                },
              },
                t
              ),
              editarIndex === index
                ? m("input", {
                    type: "text",
                    value: t,
                    oninput: (e) => {
                      this.tareas[index] = e.target.value;
                    },
                    style: {
                      width: "80%",
                      padding: "5px",
                    },
                  })
                : null,
              m("button", {
                onclick: () => {
                  if (editarIndex === index) {
                    this.editarTarea(index, this.tareas[index]);
                  } else {
                    editarIndex = index;
                  }
                },
              }, editarIndex === index ? "Guardar" : "Editar"),
              m("button", {
                onclick: () => {
                  this.tareas.splice(index, 1);
                  this.actualizarTareas();
                  m.redraw();
                },
              }, "Borrar")
            )
          ),

          m("div", { style: { marginTop: "30px" } },
            m("h2", { style: { textAlign: "center" } }, "Completadas"),
            m("p", { style: { textAlign: "center", marginTop: "20px" } }, this.completadas.length === 0 ? "No has completado aún ninguna tarea" : ""),
            this.completadas.map((t, index) =>
              m("div", {
                style: {
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center",
                  gap: "10px",
                },
              },
                m("input", {
                  type: "checkbox",
                  checked: true,
                  style: { width: "18px", cursor: "pointer" },
                  onclick: () => {
                    this.tareas.push(t);
                    this.completadas.splice(index, 1);
                    this.actualizarTareas();
                    m.redraw();
                  },
                }),
                m("label", {
                  style: {
                    opacity: 0.6,
                    border: "1px solid black",
                    width: "90%",
                    minHeight: "40px",
                    borderRadius: "6px",
                    alignItems: "center",
                    display: "flex",
                    padding: "0 20px",
                    justifyContent: "space-between",
                    textDecoration: "line-through",
                  },
                },
                  t
                ),
                m("button", {
                  onclick: () => {
                    this.completadas.splice(index, 1);
                    this.actualizarTareas();
                    m.redraw();
                  },
                }, "Borrar")
              )
            ),
          ),
        )
      );
    }
  };
}

function TarjetasMarcos(){
  return {
    select: { model: { tarjetas: [], indice:null} },
 
    oninit: async function () {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!respuesta.ok){
        console.error("Errorin");
      }
      this.select.model.tarjetas = await respuesta.json();
      m.redraw();
    },
 
    view: function() {
      return m("div", { style:{display: "flex", flexDirection: "column", marginBottom: "20px"},
      },
      m("h1", {style:{textAlign: "center"}}, "Tarjetas"),
      m("div", {
        style: {
          flexWrap: "wrap", margin: "0", display: "flex", justifyContent: "center", columnGap: "10px", rowGap: "30px", width: " 100%"
        }
      },
        this.select.model.tarjetas.map((tarjeta, indice) =>
          m("div", {
            style: {
              border: "1px solid black", margin: "0", height: "250px", width: "250px", overflow: "hidden", borderRadius: "6px", marginTop: "20px", display: "flex", textAlign: "center", flexDirection: "column", flex: "1 0 200px"
            },
          },
            m("h1", { style: { overflow: "hidden", margin: "0", paddingTop: "10px", paddingBottom: "10px", } }, tarjeta.title),

            m("p", { style: { margin: "0", padding: "12px", textAlign: "justify", height: "auto", } }, tarjeta.body),
            
          ),
        ),
        )
      )
      }
  };
}
 
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

function PaginaMarcos() {
  const fontSize = "50px"; // Cambia aquí el tamaño de fuente para todo

  return {
    view: function () {
      return m("div", {}, 
        m(CarruselMarcos),
        m(DesplegableMarcos),
        m(PersistenciaMarcos),
        m(TareasMarcos),
        m(TarjetasMarcos),
      );
    },
  };
}

//==========SANTIAGO==========

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

//==========ALEX==========

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

//==========DOMINGO==========

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

//==========SANDRA==========

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


//==========YOANNET==========

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

//==========PAU==========

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


//==========PÁGINAS==========

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
    view: () => {
      let backgroundColor = clickie ? "#ddbb0d" : "white"; // Aquí se define la variable
      let color = clickie ? "white" : "black"; 

      return m(
        "div",
        {
          style: {
            display: "flex", 
            flexDirection: "column", 
            minHeight: "100vh", 
            backgroundColor: backgroundColor,
            color: color,
            
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
          m(PaginaMarcos),
        ),
        m(FooterMarcos)
      );
    }
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