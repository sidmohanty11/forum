let data: {
  college: string;
  collegeUrl: string;
  branches: string[];
};

try {
  data = require("../app.json");
} catch (err) {
  data = require("../app-example.json");
}
export const appData = data;
