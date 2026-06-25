const url = new URL(
  "http://localhost:8000/dfdfdf?value=1&page=2&sort=ascending",
);

console.log(url.pathname);
console.log(url.search);
console.log(url.searchParams);
console.log(url.host);
console.log(url.port);
