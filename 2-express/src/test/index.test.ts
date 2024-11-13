import { describe, expect, it } from "@jest/globals";
import { app } from "..";
import request from "supertest";

describe("Test the sum function", () => {
  it("Should return 3 when 1 + 2", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.body.sum).toBe(3);
    expect(res.statusCode).toBe(200);
  });
});

describe("Test the multiply function", () => {
  it("Should return 6 when 3 * 2", async () => {
    const res = await request(app).post("/multiply").send({
      a: 3,
      b: 2,
    });
    expect(res.body.answer).toBe(6);
    expect(res.statusCode).toBe(200);
  });
});
