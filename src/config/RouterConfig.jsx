import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyList from "../pages/MyList.jsx";
import { HOME, MY_LİST } from "../constants/Path.jsx";
const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MY_LİST} element={<MyList />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
