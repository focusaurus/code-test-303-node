"use strict";
const request = require("supertest")(require("./app"));
const tap = require("tap");

tap.test("create user base case", async test => {
  await request
    .post("/api/v1/posts")
    .send({ hi: "HI" })
    .expect(201);
});
