import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Effect } from "./components/effect";
import { BgFull } from "./forUseContext/bgFull";
import { WordProvider } from "./context";
import { BgReducer } from "./components/reducerPage";
import { store } from "./store/likeComment";
import { EasyPeasyRedux } from "./components/lcViewer/easy-peasy";
import {useState} from 'react'
import { StoreProvider } from "easy-peasy";
import Select from "react-select";

import { store as reduxStore}  from './store/reduxStore'
import { Provider } from 'react-redux'
import { ReduxToolKit } from "./components/lcViewer/redux-toolkit";
import { MemoHook } from "./components/memo/memoHook";

const options = [
  { value: 1, label: "UseEffect,State,Ref" },
  { value: 2, label: "Easy-Peasy" },
  { value: 3, label: "Reducer" },
  { value: 4, label: "useContext" },
  { value: 5, label: "useSelector & useDispatch" },
  { value: 6, label: "useMemo & useCallback" },
];

function App() {
  const [which, setwhich] = useState({ value: 3, label: "UseEffect,State,Ref" });
  const val = which.value
  return (
    <>
      <Select
        options={options}
        onChange={(selected) => setwhich(selected)}
        value={which}
      />
      {/* useState, useEffect , useRef */}
      {val === 1 && (
        <div className="App">
          <Effect />
        </div>
      )}

      {/* easy-peasy obstraction of redux */}
      {val === 2 && (
        <StoreProvider store={store}>
          <EasyPeasyRedux />
        </StoreProvider>
      )}

      {/* useReducer */}
      {val === 3 && <BgReducer />}

      {/* useContext */}
      {val === 4 && (
        <WordProvider>
          <BgFull />
        </WordProvider>
      )}

      {/* useSelector and useDispatch */}
      {val === 5 && (
        <Provider store={reduxStore}>
          <ReduxToolKit />
        </Provider>
      )}

      {val === 6 && <MemoHook />}

    </>
  );
}

export default App;

// useContext
