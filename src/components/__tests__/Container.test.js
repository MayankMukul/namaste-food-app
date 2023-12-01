import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Container from "../Container.js";
import { Provider } from "react-redux";
import store from "../../utils/store.js"
import { StaticRouter } from "react-router-dom/server";
import CONST_RESTRAUNT_LIST from "../../utils/CONST_RESTAURANT_LIST.js"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {return Promise.resolve(CONST_RESTRAUNT_LIST)}
    })
})

test("check shimmer is loaded ",()=>{
    const container = render(
      <StaticRouter>
        <Provider store={store}>
          <Container/>
        </Provider>
      </StaticRouter>
    );
    
    // console.log(container);

    const shimmer = container.getByTestId("shimmer")
    expect(shimmer).toBeInTheDocument();

});
test("check 10 shimmer are loaded ",()=>{
    const container = render(
      <StaticRouter>
        <Provider store={store}>
          <Container/>
        </Provider>
      </StaticRouter>
    );
    
    // console.log(container);

    const shimmer = container.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(10);

});

test("Check Restaurant List",async ()=>{
  const container = render(
    <StaticRouter>
      <Provider store={store}>
        <Container/>
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>{
    expect(container.getByTestId("res-list"))
  })

  const resList = container.getByTestId("res-list");
  expect(resList.children.length).toBe(16);
});

test("Check Search Box",async ()=>{
  const container = render(
    <StaticRouter>
      <Provider store={store}>
        <Container/>
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>{
    expect(container.getByTestId("res-list"))
  })
  
  let input = container.getByTestId("search-box")
  fireEvent.change(input, 
    {
    target : {
      value : "food",
    }
  });

  let searchbtn = container.getByTestId("search-btn")
  fireEvent.click(searchbtn);

  const resList = container.getByTestId("res-list");
  expect(resList.children).toBe(2);


})