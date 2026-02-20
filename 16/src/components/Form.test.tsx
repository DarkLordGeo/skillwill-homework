import { render } from "@testing-library/react";
// import { describe } from "node:test";
import Form from "./FormTotest";
import { screen } from '@testing-library/dom'
describe('Form', () => {
    test("test render", () => {
        render(<Form />)
    })
    test("test existing input", () => {
        render(<Form />)
        const input = screen.getByRole("textbox")
        expect(input).toBeInTheDocument()
    })
})