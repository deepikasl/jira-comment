const tasks = require('jfrog-pipelines-tasks');
const axios = require("axios");

const jira_comment = require("../jira_comment");

jest.mock('jfrog-pipelines-tasks', () => ({
  getInput: jest.fn().mockReturnValue('TAS-1')
}));

const expectedResponse = {
  "id": "10006",
  "body": "test comment"
};

jest.mock('axios', () => 
  jest
  .fn()
  .mockReturnValue(expectedResponse)
);


it("Ability to comment on the requested jira successfully", async () => {
  const response = await jira_comment();
  expect(response).toEqual(expectedResponse);
});
