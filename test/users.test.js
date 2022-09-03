const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("/POST users", () => {
  it("it should be create users", (done) => {
    let users = {
      username: "admintest",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .post("/api/users/")
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/PATCH/:id users", () => {
  it("It shoudl UPDATE users by id", (done) => {
    const id = 2;
    let users = {
      id: id,
      username: "admintest-update",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .patch("/api/users/" + id)
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET users", () => {
  it("It should GET all the users", (done) => {
    chai
      .request(app)
      .get("/api/users/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("It should GET users by id", (done) => {
    const id = 1;
    chai
      .request(app)
      .get(`/api/users/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/DELETE/:id users", () => {
  it("It should DELETE users by id", (done) => {
    const id = 3;
    chai
      .request(app)
      .delete("/api/users/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
