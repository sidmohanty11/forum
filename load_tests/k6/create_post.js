import http from "k6/http";

export default function () {
  const url = "http://localhost:4000/graphql";

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1MTk5NTIyMiwiZXhwIjoxNjU1NTk1MjIyfQ.Jck1ZKVDHruvGmMtzXKBxtqJBuNk4KUlYGq-nhlBWBA",
    },
  };

  const create_post = JSON.stringify({
    query:
      'mutation {    postCreate(post: { content: "post", category: "blog", title: "title" }) {      userErrors {        message      }      post {        id        title      }    }  }',
  });
  http.post(url, create_post, params);
}
