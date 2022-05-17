import React from "react";
import {create} from 'react-test-renderer'

import Paginator from "./Paginator";

describe("Paginator", () => {
  test("pages count", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
    const spans = component.root.findAllByType("span")
    expect(spans.length).toBe(10)
  })

  test("button", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
    const button = component.root.findAllByType("button")
    expect(button.length).toBe(1)
  })
})