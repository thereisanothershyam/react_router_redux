import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Component 1</Link>
            </li>
            <li>
              <Link to="/component2">Component 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Component1
                value={0}
                onIncrement={() => dispatch(increment())}
                onDecrement={() => dispatch(decrement())}
              />
            }
          />
          <Route
            path="/component2"
            element={
              <Component2
                value={0}
                onIncrement={() => dispatch(increment())}
                onDecrement={() => dispatch(decrement())}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
