import http from "k6/http";

export default function () {
  const url = "http://localhost:4000/graphql";
  const get_posts =
    '{"query":"{  posts(skip: 0) {    id    title    published    content    comments {      content    }    user {      name      id    }    createdAt    likes    category  }}","variables":{}}';

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post(url, get_posts, params);
}
