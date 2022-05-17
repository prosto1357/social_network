import React from "react";
import {create} from 'react-test-renderer'

import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {
  test("status from props", () => {
    const component = create(<ProfileStatus status="test"/>)
    const instance = component.getInstance()

    expect(instance.state.status).toBe("test")
  })

  test("span", () => {
    const component = create(<ProfileStatus/>)
    const span = component.root.findByType("span")

    expect(span.children).not.toBeNull()
  })

  test("input", () => {
    const component = create(<ProfileStatus/>)

    expect(() => {
      const input = component.root.findByType("input")
    }).toThrow()
  })

  test("edit mode", () => {
    const component = create(<ProfileStatus status="123"/>)

    const span = component.root.findByType("span")
    span.props.onDoubleClick()

    const input = component.root.findByType("input")

    expect(input.props.value).toBe("123")
  })

  test("callback", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus updateStatus={mockCallback}/>)
    const instance = component.getInstance()
    instance.deactivateEditMode()

    expect(mockCallback.mock.calls.length).toBe(1)
  })
})