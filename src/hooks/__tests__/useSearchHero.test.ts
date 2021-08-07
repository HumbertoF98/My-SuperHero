import { renderHook } from "@testing-library/react-hooks";
import useSearchHero from "../useSearchHero";

const heroId = "1234";

describe("# useSearchHero()", () => {
  test("Should be exists like a function", async () => {
    expect(useSearchHero).toBeInstanceOf(Function);
  });

  test("Should render hook", async () => {
    const { result } = renderHook(() => useSearchHero(heroId));

    expect(result.current.result).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.onLoad).toBeInstanceOf(Function);
  });
});
