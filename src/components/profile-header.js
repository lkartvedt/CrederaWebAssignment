export const updateProfileInformation = (data) => {
  const { firstName, lastName, jobTitle, companyName, avatarSrc} = data;
  const headerNode = document.querySelector("#profile-header .profile-header");
  const profileAvatarNode = headerNode.querySelector("img");
  const nameNode = headerNode.querySelector(".profile-info .profile-info-name");
  const titleNode = headerNode.querySelector("p.page-paragraph");

  nameNode.classList.remove(
    "loading",
    "skeleton-block",
    "skeleton-block--half"
  );

  titleNode.classList.remove(
    "loading",
    "skeleton-block",
    "skeleton-block--quarter"
  );

  nameNode.innerHTML = `${firstName} ${lastName}`;
  titleNode.innerHTML = `${jobTitle} @ ${companyName}`;


    if (avatarSrc){
      profileAvatarNode.src = avatarSrc;
      profileAvatarNode.setAttribute("aria-label", `${firstName} ${lastName}`);
    } 
    else{
      profileAvatarNode.remove();
      const altTextNode = headerNode.querySelector(".profile-img-alt-text");
      const initals = firstName[0].concat(lastName[0]);
      altTextNode.innerHTML = `${initals}`;
      altTextNode.style.setProperty("transform", "translateY(45px)");
    }
};
