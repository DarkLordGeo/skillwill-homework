import { renderHook } from "@testing-library/react"
import { useWindowSize } from "./useWindowResize"

describe("custom hook", () => {
    test("Hook test", () => {
        const { result } = renderHook(() => useWindowSize())
        const value = result.current
        expect(value[0]).toBe(false)
    })
})