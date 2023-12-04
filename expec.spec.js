import { expect, it } from "vitest";

it("toBe", () => {
  expect(1).toBe(1);
});

it("toEqual", () => {
  const user = {
    name: "vitest",
  };
  expect(user).toEqual({ name: "vitest" });
});

it("toBeTruthy", () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
});

it("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
});

it("toContain", () => {
  const item1 = { name: "JOJO" };
  const item2 = { name: "DIO" };
  const item3 = { name: "COCO" };
  const list = [item1, item2];

  expect(list).toContain(item1);
  expect(list).toContain(item2);
  expect("<div>1234</div>").toContain("1234");
});

it("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("name must be a string");
    }
    return name;
  }
  expect(() => {
    getName(123);
  }).toThrow();
});
