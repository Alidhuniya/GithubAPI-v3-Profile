// left section

// img
const leftSection = async () => {

    const url = "https://api.github.com/users/Alidhuniya";
    const get = await fetch(url);
    const data = await get.json();
    // console.log(data);

    // get user img
    document.querySelector(".left__img").src = ` ${data.avatar_url}`;

    // get name
    document.querySelector(".left__name").innerHTML = `${data.name}`;

    // get github user name
    document.querySelector(".left__gitUser").innerHTML = `${data.login}`;

    // get bio
    document.querySelector(".left__bio").innerHTML = `${data.bio}`;

    // get company
    document.querySelector(".left__company").innerHTML = `${data.company}`;

    // location
    document.querySelector(".left__location").innerHTML = `${data.location}`;

    // get blog
    document.querySelector(".left__blog").href = `${data.blog}`;

    // get twitter username
    document.querySelector(".left__username").href = ` ${"https://twitter.com/" + data.twitter_username}`;

    // get followers
    document.querySelector(".left__followme").innerHTML = `${data.followers + "followers"}`;

    // get following
    document.querySelector(".left__iamfollowing").innerHTML = `${data.following + "following"}`;

    // get public repo
    document.querySelector(".left__publicRepo").innerHTML = `${data.public_repos + "repos"}`;

}

leftSection();

// icon
const leftSectionIcon = async () => {
      const url = "https://api.github.com/emojis"
      const get = await fetch(url);
      const data = await get.json();

    //   get icon
    //github icon url: "https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png?v8";
    
    const iconUrl = `${data.dart}`;
    document.querySelector(".left__icon").src = iconUrl;


}

leftSectionIcon();

// repos

document.querySelector(".right__repo").addEventListener("click", ()=> {
    document.querySelector(".repos");
})

const Repos = async () => {

    try {
    
    const url = "https://api.github.com/users/Alidhuniya/repos";
    const get = await fetch(url);
    const data = await get.json();
    // console.log(data[0].owner.login);

    
    let output = '';
   

    for (let i in data) {
        let url1 = `https://api.github.com/repos/${data[i].owner.login}/${data[i].name}/zipball/master`;
        output += `
      
        
        <hr class="repos__hr" />
        <div class="repos__titleDown">
        <a href="${data[i].html_url}">${data[i].name}</a>
        <a href="${url1}" class="repos__btnBlock">Downloads</a>
        </div>
    
        <div class="repos__descRdme">
        <p class="repos__desc">${data[i].description}</p>
        <div class="repos__btn">
        <button class="repos__btnBlock1">Read More </button>
        </div>
        </div>

       
        `;
    
        
    }
    // document.querySelector(".repos__btnBlock").addEventListener("click", ()=> {
        // location.href = "https://api.github.com/repos/Alidhuniya/AJAX-vs-nonAJAX-with-asyncAwait/zipball/master";
    //     location.href = `${data[i].archive_url}`;
    // })

    // document.querySelector(".repos__btn").addEventListener("click", ()=> {
    //     location.href= "https://github.com/Alidhuniya/musician-band/blob/master/README.md";
    // })

    document.querySelector(".repos").innerHTML = output;

}
catch(error) {
    console.log("Failed", error);
}

}

Repos();