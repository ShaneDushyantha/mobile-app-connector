// app/routes/api/users.ts

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  
  return json(users); // this returns JSON response
};