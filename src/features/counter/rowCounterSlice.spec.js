import rowCounterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "./rowCounterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(rowCounterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = rowCounterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = rowCounterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = rowCounterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
