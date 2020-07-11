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
       
        
    
    const url = "https://api.github.com/users/Alidhuniya/repos?per_page=1000";
    const get = await fetch(url);
    const data = await get.json();
    // console.log(data[0].owner.login);

    // next
   

  
    var output = '';

    for (var i in data) {
        var downloads = `https://api.github.com/repos/${data[i].owner.login}/${data[i].name}/zipball/master`;
        const url1 = `https://api.github.com/repos/${data[i].owner.login}/${data[i].name}/contents`;
        const get1 = await fetch(url1);
        const data1 = await get1.json();
        // console.log(data1[0].html_url);
       
        output += `
      <div class="repos__lists">

        <hr class="repos__hr" />
        <div class="repos__titleDown">
        <a class="heading" href="${data[i].html_url}">${data[i].name}</a>
        <a href="${downloads}" class="repos__btnBlock">Downloads</a>
        </div>
    
        <div class="repos__descRdme">
        <p class="repos__desc">${data[i].description}</p>
        <div class="repos__btn">
         <a target="blank" href="${data1[0].html_url}" class="repos__btnBlock1">Read More </a>
        </div>
        </div>

        <div class="date">

        <span> Created at: ${data[i].created_at}</span>
        <span> Updated at: ${data[i].updated_at}</span>

        </div>
    
       </div>

       
       
        `;
    
    }

    document.querySelector(".repos").innerHTML = output;
   
   
    

}
catch(error) {
    console.log("Failed", error);
}

}
Repos();

setTimeout(function () {
    document.getElementById("hide").style.display = "none";
  }, 16500);








