import {
  describe,
  expect,
  it,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";

// 執行順序
// beforeAll -> beforeEach -> it -> afterEach -> afterAll

// 只執行一次，且在所有測試之前執行
// 資料庫連線、建立測試資料
// 建立臨時文件
beforeAll(() => {
  console.log("beforeAll");

  return () => {
    // afterAll
    console.log("afterAll");
  };
});

// pinia
beforeEach(() => {
  console.log("beforeEach");
  return () => {
    // afterEach
    console.log("afterEach");
  };
});

it("first", () => {
  console.log("first");
});

it("second", () => {
  console.log("second");
});

// reset
afterEach(() => {
  console.log("afterEach");
});

describe("sub", () => {
  beforeEach(() => {
    console.log("sub beforeEach");
  });

  it("sub first", () => {
    console.log("sub first");
  });

  afterEach(() => {
    console.log("sub afterEach");
  });
});

// 只執行一次，且在所有測試之後執行
// 關閉資料庫連線
// 刪除臨時文件
afterAll(() => {
  console.log("afterAll");
});
