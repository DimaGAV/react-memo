const host = "https://wedev-api.sky.pro/api/leaderboard";

export async function getLiders() {
  const response = await fetch(host, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка загрузки результатов");
  }

  const data = await response.json();
  return data;
}

export async function uploadLiders({ name, time }) {
  const response = await fetch(host, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка загрузки результатов");
  }

  const data = await response.json();
  return data;
}
