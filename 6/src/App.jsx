import {routes} from "./routes/routes.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    const router = createBrowserRouter(routes);
    return (
        <RouterProvider router={router} future={{v7_startTransition: false, v7_relativeSplatPath: false}}/>
    )
}

export default App
