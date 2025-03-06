import { inicio, marcos, santiago, alex, domingo, sandra, yoannet} from "./components.js"

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
    "/Inicio": { view: () =>  m(inicio)},
    "/Marcos": { view: () =>  m(marcos)},
    "/Santiago": { view: () =>  m(santiago)},
    "/Alex": { view: () =>  m(alex)},
    "/Domingo": { view: () =>  m(domingo)},
    "/Sandra": { view: () =>  m(sandra)},
    "/Yoannet": { view: () =>  m(yoannet)},
/*     "/ejemplo": { view: () => m(Layout, Header)}
 */}

m.route(document.body, "/Inicio", routes)