const baseURL = "http://localhost:3000/api/trending";

// endpoint: http://localhost:3000/api/posts
export default async function getTrend(id) {
  const res = await fetch(`${baseURL}`);
  const trend = await res.json();

  if (id) {
    return trend.find((value) => value.id == id);
  }

  return trend;
}
