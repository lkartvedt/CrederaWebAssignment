import { removeChildNodes } from "../utils";

/**
 * Function which generates a single Card node based on a dataset
 *
 * @param {object} data data containing attributes of a card
 * @return {Node} generated markup for a card
 */
const generateCardNode = (data) => {
  const { authorFirstName, authorLastName, authorAvatarSrc, jobTitle, companyName,
    post, publishDate, city, state } = data;
  const templateId = "profile-post-item-template";
  const resultCardTemplate = document.getElementById(templateId);
  const clone = document.importNode(resultCardTemplate.content, true);
  const authorName = clone.querySelector(".post-author-info .page-paragraph");
  const jobDesc = clone.querySelector(".post-author-info .page-micro");
  const postNode = clone.querySelector(".post-content");
  const avatarNode = clone.querySelector(".post-author-avatar");
  const relevanceNode = clone.querySelector(".page-relevance");

  authorName.innerHTML = `${authorFirstName} ${authorLastName}`;
  jobDesc.innerHTML = `${jobTitle} @ ${companyName}`;
  postNode.innerHTML = post;

  // append a few things so that I can use JSON.parse on the string to turn it into a js date for ease
  var adjustedDate = "\"".concat(publishDate, ".000Z", "\"");
  var date = new Date(JSON.parse(adjustedDate));
  //getMonth() returns a number and I wanted control over the month abreiviations so I made an array to hold my month preferences 
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = months[date.getMonth()];
  var day = date.getDay().toString();
  var year = date.getFullYear().toString();

  relevanceNode.innerHTML = `${month} ${day}, ${year} | ${city}, ${state}`;

    const avatarImg = document.createElement("img");
    if (authorAvatarSrc) avatarImg.src = authorAvatarSrc;
    else{
      const altTextNode = clone.querySelector(".post-author-img-alt-text");
      const initals = authorFirstName[0].concat(authorLastName[0]);
      altTextNode.innerHTML = `${initals}`;
      altTextNode.style.setProperty("transform", "translateY(12px)");
    }
    avatarImg.setAttribute( "aria-label", `${authorFirstName} ${authorLastName}`);
    avatarNode.appendChild(avatarImg);
    
  return clone;
};

/**
 * Function which accepts the JSON results from the API, and uses HTML templates
 * to generate the markup needed for the results list
 *
 * @param {object} resultsData JSON payload of results
 */
export const generatePinnedPostsFromTemplate = (resultsData) => {
  const pinnedPostsList = document.querySelector(
    "#profile-posts .profile-post-results"
  );

  removeChildNodes(pinnedPostsList);

  if (resultsData.pinnedPost) {
    const postNode = generateCardNode(resultsData.pinnedPost);
    pinnedPostsList.appendChild(postNode);
  }
};
