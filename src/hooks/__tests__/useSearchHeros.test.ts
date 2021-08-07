import { renderHook } from "@testing-library/react-hooks";
import useSearchHeros from "../useSearchHeros";

const name = "spider-man";

describe("# useSearchHeros()", () => {
  test("Should be exists like a function", async () => {
    expect(useSearchHeros).toBeInstanceOf(Function);
  });

  test("Should render hook", async () => {
    const { result } = renderHook(() => useSearchHeros(name));

    expect(result.current.result).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.onLoad).toBeInstanceOf(Function);
  });
});
