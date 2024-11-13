import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const inputSchema = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", (req: any, res: any) => {
  const parsedResult = inputSchema.safeParse(req.body);

  if (!parsedResult.success) {
    return res.status(400).json({
      message: "Incorrect Inputs",
    });
  }

  const answer = parsedResult.data.a + parsedResult.data.b;

  res.json({
    answer,
  });
});

app.post("/multiply", (req: any, res: any) => {
  const parsedResult = inputSchema.safeParse(req.body);

  if (!parsedResult.success) {
    return res.status(400).json({
      message: "Incorrect Inputs",
    });
  }

  const product = parsedResult.data.a * parsedResult.data.b;

  res.json({
    product,
  });
});

app.post("/divide", (req: any, res: any) => {
  const body = req.body;
  const parsedResult = inputSchema.safeParse(body);

  if (!parsedResult.success) {
    return res.status(400).json({
      message: "Incorrect Inputs",
    });
  }

  const divide = parsedResult.data.a / parsedResult.data.b;

  res.json({
    divide,
  });
});

app.post("/subtract", (req: any, res: any) => {
  const parsedResult = inputSchema.safeParse(req.body);

  if (!parsedResult.success) {
    return res.status(400).json({
      message: "Incorrect Inputs",
    });
  }

  const subtract = parsedResult.data.a - parsedResult.data.b;
  
  res.json({
    subtract,
  });
});
