import { describe, expect, it } from "@jest/globals";
import { sum } from "..";

describe("sum", () => {
  it("should be able to add two positive numbers", () => {
    const ans = sum(1, 2);
    expect(ans).toBe(3);
  });

  it("should be able to add two negative numbers", () => {
    const ans = sum(-1, -2);
    expect(ans).toBe(-3);
  });

  it("should be able to add two 0s", () => {
    const ans = sum(0, 0);
    expect(ans).toBe(0);
  });
});
