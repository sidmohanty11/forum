import http from "k6/http";

export default function () {
  const url = "http://localhost:4000/graphql";

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const get_a_post = JSON.stringify({
    query:
      '{    postById(id: "20") {      title      category      content      likes      user {        id        name      }      comments {        id        user {          id          name        }        content        createdAt      }      createdAt    }  }',
    variables: {},
  });

  http.post(url, get_a_post, params);
}
