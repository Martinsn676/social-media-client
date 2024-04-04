import { describe } from "yargs";
import { login } from "./login";

describe("redness", () => {
  it("is red", () => {
    expect("red").toBe("red");
  });
});
