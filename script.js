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

