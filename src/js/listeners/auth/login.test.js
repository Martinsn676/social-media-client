import { login } from "./login";
import * as storage from "../../storage"; // Import any dependencies to mock

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("stores a token when provided with valid credentials", async () => {
    // Mock the API response
    const mockProfile = { accessToken: "mockToken" };
    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockProfile),
    });

    // Mock the storage save function
    const saveMock = jest.spyOn(storage, "save");

    // Call the login function with valid credentials
    await login("test@example.com", "password");

    // Expectations
    expect(saveMock).toHaveBeenCalledWith("token", "mockToken");
    // Add more assertions as needed
  });

  // Add more test cases for negative scenarios, edge cases, etc.
});
