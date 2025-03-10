import { Inicio, Pau, Marcos, Santiago, Alex, Domingo, Sandra, Yoannet} from "./components.js"

/* function Layout() {
    return {
        view: ({children}) => [
            m("header"),
            m("main"),
            children,
            m("aside")
        ]
    }
} */

const routes = {
    "/Inicio": { view: () =>  m(Inicio)},
    "/Marcos": { view: () =>  m(Marcos)},
    "/Santiago": { view: () =>  m(Santiago)},
    "/Alex": { view: () =>  m(Alex)},
    "/Domingo": { view: () =>  m(Domingo)},
    "/Sandra": { view: () =>  m(Sandra)},
    "/Yoannet": { view: () =>  m(Yoannet)},
    "/Pau": { view: () =>  m(Pau)},
/*     "/ejemplo": { view: () => m(Layout, Header)}
 */}

m.route(document.body, "/Inicio", routes)