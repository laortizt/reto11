const jokeEl = document.getElementById('joke') //se agrega getElement y joke
const jokeBtn = document.getElementById('jokeBtn') //se agrega getElement y jokeBtn

jokeBtn.addEventListener('click', generateJoke) //se agrega click

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

