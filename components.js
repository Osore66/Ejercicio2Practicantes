function blanco() {
  return {
    view: ({}) => [
      m("div", {
        style: {
          width: "100%",
          height: "900px",
          "box-sizing": "border-box",
        },
      }),
      "",
    ],
  };
}

function texto() {
  const fontSize = "60px"; // Cambia aquí el tamaño de fuente para todo

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
          "Título Super Marcos"
        ),
        m(
          "p",
          {
            style: {
              margin: "0",
              fontSize: fontSize,
              textAlign: "center",
              marginBottom: "16px",
            },
          },
          "Texto Simple"
        ),

        m(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row", // Por defecto flex será row, se puede cambiar por column
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "16px",
              padding: "10px",
              width: "100%",
            },
          },
          // Lo óptimo es que los 3 textos se hagan con model, ya lo veremos
          m(
            "div",
            {
              style: {
                display: "flex", // Flexbox para centrar el texto
                justifyContent: "center", // Centra horizontalmente
                alignItems: "center", // Centra verticalmente
                backgroundColor: "#D3D3D3", // Fondo gris
                border: "2px solid black", // Borde negro
                borderRadius: "16px", // Redondeamos la caja
                width: "300px", // Ajustamos el ancho de la caja
                height: "150px", // Ajustamos la altura de la caja
              },
            },
            m(
              "p",
              {
                style: {
                  margin: "0", // Eliminar márgenes predeterminados
                  fontSize: fontSize, // Aplicamos el tamaño de la fuente
                  textAlign: "center", // Centrar el texto
                },
              },
              "Texto 1"
            )
          ),

          m(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D3D3D3",
                border: "2px solid black",
                borderRadius: "16px",
                width: "300px",
                height: "150px",
              },
            },
            m(
              "p",
              {
                style: { margin: "0", fontSize: fontSize, textAlign: "center" },
              },
              "Texto 2"
            )
          ),

          m(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D3D3D3",
                border: "2px solid black",
                borderRadius: "16px",
                width: "300px",
                height: "150px",
              },
            },
            m(
              "p",
              {
                style: {
                  margin: "0",
                  fontSize: fontSize,
                  textAlign: "center",
                },
              },
              "Texto 3"
            )
          )
        )
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
        //m(header),
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

export { inicio };
