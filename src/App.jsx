import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Routers/AllRoutes';
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
