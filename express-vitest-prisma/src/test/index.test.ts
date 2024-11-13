import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "..";

vi.mock("./db", () => {
  return {
    prismaClient: {
      request: {
        create: vi.fn().mockResolvedValue({}),
      },
    },
  };
});

describe("Test the sum function", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send({});
    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect Inputs");
  });
});