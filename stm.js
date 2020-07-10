document.querySelector(".repos").innerHTML = `
    <hr />
    <div class="repos__titleDown">
    <a href="${data[0].html_url}">${data[0].name}</a>
    <button class="repos__btnBlock">Downloads</button>
    </div>

    <div class="repos__descRdme">
    <p class="repos__desc">${data[0].description}</p>
    <div class="repos__btn">
    <button class="repos__btnBlock1">Read More </button>
    </div>
    </div>
    `;

    document.querySelector(".repos__btnBlock").addEventListener("click", ()=> {
        location.href = "https://api.github.com/repos/Alidhuniya/AJAX-vs-nonAJAX-with-asyncAwait/zipball/master";
    })

    document.querySelector(".repos__btn").addEventListener("click", ()=> {
        location.href= "https://github.com/Alidhuniya/musician-band/blob/master/README.md";
    })

    <div class="repos__btn">
         <a href="" class="repos__btnBlock1">Read More </a>
        </div>
