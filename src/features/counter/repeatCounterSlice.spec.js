import repeatCounterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "./repeatCounterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(repeatCounterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = repeatCounterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = repeatCounterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = repeatCounterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
