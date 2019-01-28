const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "Node Course"
      },
      {
        id: "2",
        name: "Jen",
        room: "React Course"
      },
      {
        id: "3",
        name: "Julie",
        room: "Node Course"
      }
    ];
  });

  it("should add new user", () => {
    const users = new Users();
    const user = {
      id: "123",
      name: "Andrew",
      room: "The Office Fans"
    };

    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    const user = users.removeUser("1");

    expect(user.id).toBe("1");
    expect(users.users.length).toBe(2);
  });

  it("should not remove a user", () => {
    const user = users.removeUser("55");

    expect(user).toBe(undefined);
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    const user = users.getUser("1");

    expect(user.id).toEqual("1");
  });

  it("should not find user", () => {
    const user = users.getUser("5");

    expect(user).toEqual(undefined);
  });

  it("should return names for node course", () => {
    const userList = users.getUserList("Node Course");

    expect(userList).toEqual(["Mike", "Julie"]);
  });

  it("should return names for react course", () => {
    const userList = users.getUserList("React Course");

    expect(userList).toEqual(["Jen"]);
  });
});
