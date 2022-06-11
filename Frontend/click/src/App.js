import { BrowserRouter } from "react-router-dom";
import UserRouter from './routers/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
