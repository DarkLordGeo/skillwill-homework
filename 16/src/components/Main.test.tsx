import { render } from "@testing-library/react"
import Main from "./Main"
import exp from "constants"
import { screen } from '@testing-library/dom'

describe('Main', () => {
    it('test for main page render', () => {
        render(<Main />)
    })
    it("rendering of text", () => {
        render(<Main />)
        const element = screen.getByText("hello")
        console.log(element)
        expect(element).toBeInTheDocument()
    })
})