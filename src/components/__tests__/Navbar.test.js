import React from 'react';
import { render } from "@testing-library/react"
import Navbar from "../Navbar.js";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


test("logo should render on rendering header",()=>{
    const navbar = render(
      <StaticRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </StaticRouter>
    );
    console.log(navbar);
})