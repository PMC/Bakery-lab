fetch("/data/data.json") // Replace 'data.json' with the actual path to your JSON file
  .then((response) => response.json())
  .then((data) => {
    const article = document.getElementById("myArticles");

    // More complex example: Handling an array of objects
    if (Array.isArray(data)) {
      const listItems = data
        .map(
          (item) => `
                
<article class="product-card">
<img src="img/v2/${item.img}" alt="Cupcakes" />

<h4 class="Pacifico-font">${item.name}</h4>
<p>${item.text}</p>

<p>300 kr - 600 kr</p>
<button>Buy</button>
</article>

      
      `
        )
        .join("");
      article.innerHTML = `${listItems} </section>`;
    }
  })
  .catch((error) => {
    console.error("Error reading JSON:", error);
    article.innerHTML = "<p>Error loading data.</p>";
  });
