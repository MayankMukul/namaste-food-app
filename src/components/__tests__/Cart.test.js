import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu.js";
import Navbar from "../Navbar.js";
import { Provider } from "react-redux";
import store from "../../utils/store.js"
import { StaticRouter } from "react-router-dom/server";
import CONSTANT_MENU from "../../utils/CONSTANT_MENU.js"
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {return Promise.resolve(CONSTANT_MENU)}
    })
})

test("Testing cart",async ()=>{
    const container = render(
        <StaticRouter>
            <Provider store={store}>
                <Navbar/>
                <RestrauntMenu/>
            </Provider>
        </StaticRouter>
    )

     
        await waitFor(()=>{
            expect(container.getAllByTestId("menu-items"));
        })

    

    const addbtn = container.getAllByTestId("add-btn");

    fireEvent.click(addbtn[0]);
    fireEvent.click(addbtn[1]);

    const cartitem = container.getByTestId("cart-items");

    expect(cartitem.innerHTML).toBe("Cart 2");

})