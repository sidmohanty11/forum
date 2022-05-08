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

  const create_comment = JSON.stringify({
    query:
      'mutation {    commentCreate(comment: { content: "hello", postId: 20 }) {      userErrors {        message      }      comment {        id        content        createdAt      }    }  }',
    variables: {},
  });

  http.post(url, create_comment, params);
}
