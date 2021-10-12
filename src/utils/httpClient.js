const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ4YTMyZTk5YWRlMGIwYzBmZDcyNDg0M2Y5MDFmYSIsInN1YiI6IjYxNjFjOGVkODlkOTdmMDAyOTExYWZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aJxqfdHgvs4kApveIMp0wkVd0oS-I0ZxK3w3q0HUGIs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
