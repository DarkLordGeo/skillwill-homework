import { renderHook } from "@testing-library/react"
import { useWindowSize } from "./useWindowResize"
import { val } from "cheerio/dist/commonjs/api/attributes"
describe("custom hook", () => {
    test("Hook test", () => {
        const { result } = renderHook(() => useWindowSize())
        const value = result.current
        expect(value[0]).toBe(false)
    })
})