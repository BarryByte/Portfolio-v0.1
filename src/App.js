import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Body from "./components/Body";
import Pattern from "./components/Pattern";
import Pattern2 from "./components/Pattern2";

function App() {
  return (
    <Provider store={store}>
      <div className="relative w-screen h-screen ">
       
        {/* <Pattern2/> */}
        <div className="absolute inset-0 z-10">
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
