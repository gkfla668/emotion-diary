
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import New from "./../pages/New";
import Edit from "./../pages/Edit";
import Diary from "./../pages/Diary";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/new" element={<New></New>}></Route>
          <Route path="/edit/:id" element={<Edit></Edit>}></Route>
          <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
