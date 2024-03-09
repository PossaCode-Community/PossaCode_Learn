// fetch("")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

async function getTodo() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur de récupération des données");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

const todos = await getTodo(2);

console.log(todos);
