// left section

// img
const leftSectionImg = async () => {

    const url = "https://api.github.com/users/Alidhuniya";
    const get = await fetch(url);
    const data = await get.json();
    // console.log(data);

    // get user img
    document.querySelector(".left__img").src = ` ${data.avatar_url}`;

  

}

leftSectionImg();

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