import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Body from "./components/Body";


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
