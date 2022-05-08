import http from "k6/http";

export default function () {
  const url = "http://localhost:4000/graphql";

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const get_profile = JSON.stringify({
    query:
      'query {    profile(userId: "2") {      id      user {        name        posts {          id          title          category          user {            name          }          createdAt          likes          published        }      }      avatarUrl      createdAt      branch      regNo      bio      year    }  }',
    variables: {},
  });

  http.post(url, get_profile, params);
}
