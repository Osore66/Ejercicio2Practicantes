function Blanco() {
  return {
    view: ({}) => [
      m("div", {
        style: {
          width: "100%",
          height: "100px",
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
              fontSize: fontSize,
            },
          },
          "Página Marcos"
        ),
      );
    },
  };
}

function CarruselMarcos(){
  
}

//----------Santiago-----------

//Pon tu código aquí


function PaginaSantiago() {
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
          "Página Santiago"
        ),
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

//----------Yoannet-----------

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
          m(PaginaMarcos),
        )
        //m(footer),
      ),
    ],
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