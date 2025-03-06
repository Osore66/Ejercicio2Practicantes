function blanco() {
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

function header() {
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

        );
      
    },
  };
}

function texto() {
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

//----------MARCOS-----------

//Pon tu código aquí


function paginaMarcos() {
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

function carruselMarcos(){
  
}


//----------SANTIAGO-----------

//Pon tu código aquí


function paginaSantiago() {
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

//----------ALEX-----------

//Pon tu código aquí


function paginaAlex() {
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

//----------DOMINGO-----------

//Pon tu código aquí


function paginaDomingo() {
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

//----------SANDRA-----------

//Pon tu código aquí


function paginaSandra() {
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


//----------YOANNET-----------

//Pon tu código aquí


function paginaYoannet() {
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


//----------PÁGINAS-----------

function inicio() {
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
        m(header),
        m(blanco),
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
          m(texto),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function marcos() {
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
        m(header),
        m(blanco),
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
          m(paginaMarcos),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function santiago() {
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
        m(header),
        m(blanco),
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
          m(paginaSantiago),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function alex() {
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
        m(header),
        m(blanco),
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
          m(paginaAlex),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function domingo() {
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
        m(header),
        m(blanco),
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
          m(paginaDomingo),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function sandra() {
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
        m(header),
        m(blanco),
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
          m(paginaSandra),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

function yoannet() {
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
        m(header),
        m(blanco),
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
          m(paginaYoannet),
          //m(aside),
        )
        //m(footer),
      ),
    ],
  };
}

export { inicio, marcos, santiago, alex, domingo, sandra, yoannet };
