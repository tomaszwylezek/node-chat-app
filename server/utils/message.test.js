const expect = require("expect");
const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const from = "Tom";
    const text = "hello";
    const message = generateMessage("Tom", "hello");

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({
      from,
      text
    });
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    const from = "Tom";
    const url = "https://www.google.com/maps?q=10,12";
    const message = generateLocationMessage("Tom", 10, 12);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({
      from,
      url
    });
  });
});
