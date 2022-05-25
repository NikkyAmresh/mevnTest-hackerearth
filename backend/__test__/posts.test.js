process.env.NODE_ENV = "test";
const db = require("../app/models/index");
const request = require("supertest");
const app = require("../app");
const jp = require("jsonpath");
const pointer = require("json-pointer");
const _ = require("lodash");

function getPointerPath(jsonPath) {
  return jsonPath.join("/").replace("$", "");
}

function matchSnapshot(val, ignorePaths = []) {
  const obj = _.cloneDeep(val);
  ignorePaths.forEach((ignorePath) => {
    jp.paths(obj, ignorePath).forEach((jsonPath) => {
      pointer.remove(obj, getPointerPath(jsonPath));
    });
  });

  expect(obj).toMatchSnapshot();
}

beforeAll((done) => {
  done();
});

afterAll((done) => {
  db.mongoose.connection.close();
  console.log("Disconnected from Mongoose");
  done();
});

let postID;

describe("POST /api/posts", () => {
  test("It should create a new post", async () => {
    const response = await request(app).post("/api/posts").send({
      title: "test title",
      description: "test description",
      published: false,
    });
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body, ["$.createdAt", "$.updatedAt", "id"]);
  });
});

describe("POST /api/posts", () => {
  test("It should create another new post", async () => {
    const response = await request(app).post("/api/posts").send({
      title: "test another title",
      description: "test another description",
      published: false,
    });
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body, ["$.createdAt", "$.updatedAt", "id"]);
  });
});

describe("GET /api/posts", () => {
  test("It should respond with an array of posts", async () => {
    const response = await request(app).get("/api/posts");
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body, [
      "$[*].createdAt",
      "$[*].updatedAt",
      "$[*].id",
    ]);
    if (response.body.length > 0) postID = response.body[0].id;
  });
});

describe("GET /api/posts/:id", () => {
  test("It should return new post", async () => {
    const response = await request(app).get(`/api/posts/${postID}`);
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body, ["$.createdAt", "$.updatedAt", "id"]);
  });
});

describe("PUT /api/posts/:id", () => {
  test("It should update the post", async () => {
    const response = await request(app).put(`/api/posts/${postID}`).send({
      title: "new Title",
      description: "new Description",
      published: true,
    });
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body);
  });
});

describe("DELETE /api/posts/:id", () => {
  test("It should delete the post", async () => {
    const response = await request(app).delete(`/api/posts/${postID}`);
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body);
  });
});

describe("DELETE /api/posts/:id", () => {
  test("It should delete all posts", async () => {
    const response = await request(app).delete(`/api/posts`);
    expect(response.statusCode).toBe(200);
    matchSnapshot(response.body);
  });
});

describe("Test a 404", () => {
  test("It should respond with a 404 status", async () => {
    const response = await request(app).get("/nowhere");
    expect(response.statusCode).toBe(404);
    matchSnapshot(response.text);
  });
});
