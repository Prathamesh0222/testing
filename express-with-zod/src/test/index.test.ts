import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "..";

describe("Sum of two numbers", () => {
  it("Should return the sum of two numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: 100,
      b: 200,
    });
    expect(response.body.answer).toBe(300);
    expect(response.statusCode).toBe(200);
  });

  it("Should return the sum of two negative numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: -82,
      b: -70,
    });
    expect(response.body.answer).toBe(-152);
    expect(response.statusCode).toBe(200);
    
  });

  it("Should return 400 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send({});
    expect(res.body.message).toBe("Incorrect Inputs");
    expect(res.statusCode).toBe(400);
  });
});

describe("Multiplication of two numbers", () => {
  it("Should return the multiplication of two numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 3,
      b: 2,
    });

    expect(res.body.product).toBe(6);
    expect(res.statusCode).toBe(200);
  });

  it("Should return the multiplication of two big numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 3175,
      b: 6785,
    });

    expect(res.body.product).toBe(21542375);
    expect(res.statusCode).toBe(200);
  });

  it("Should return the multiplication of two numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: -3175,
      b: 0,
    });

    expect(res.body.product).toBe(0);
    expect(res.statusCode).toBe(200);
  });

  it("Should return 400 if no inputs are provided", async () => {
    const response = await request(app).post("/multiply").send({});
    expect(response.body.message).toBe("Incorrect Inputs");
    expect(response.statusCode).toBe(400);
  });
});

describe("Division of two numbers", () => {
  it("Should return the division of two numbers", async () => {
    const response = await request(app).post("/divide").send({
      a: 10,
      b: 5,
    });
    expect(response.body.divide).toBe(2);
    expect(response.statusCode).toBe(200);
  });

  it("Should return 400 if no inputs are provided", async () => {
    const response = await request(app).post("/divide").send({});
    expect(response.body.message).toBe("Incorrect Inputs");
    expect(response.statusCode).toBe(400);
  });
});

describe("Subtraction of two numbers", () => {
  it("Should return the subtraction of two positive numbers", async () => {
    const response = await request(app).post("/subtract").send({
      a: 10,
      b: 5,
    });
    expect(response.body.subtract).toBe(5);
    expect(response.statusCode).toBe(200);
  });

  it("Should return the subtraction of two negative numbers", async () => {
    const response = await request(app).post("/subtract").send({
      a: -10,
      b: -5,
    });
    expect(response.body.subtract).toBe(-5);
    expect(response.statusCode).toBe(200);
  });

  it("Should return 400 status code when no inputs are provided", async () => {
    const response = await request(app).post("/subtract").send({});
    expect(response.body.message).toBe("Incorrect Inputs");
    expect(response.statusCode).toBe(400);
  });
});
