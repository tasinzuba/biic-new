const WP_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://test.yoursite.com/graphql";

export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("GraphQL fetch failed");

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data;
}
