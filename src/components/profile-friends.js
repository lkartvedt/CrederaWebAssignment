import { removeChildNodes } from "../utils";

/**
 * Function which generates a single list-item node based on a dataset
 *
 * @param {object} data data containing attributes of a listItem
 * @return {Node} generated markup for a card
 */
const generateListItemNode = (data) => {
  const { avatarSrc, name, jobTitle, companyName, topFriend } = data;
  const templateId = "friend-list-item-template";
  const resultCardTemplate = document.getElementById(templateId);
  const clone = document.importNode(resultCardTemplate.content, true);
  const nameNode = clone.querySelector("p.page-paragraph");
  const titleNode = clone.querySelector("p.page-micro");
  const avatarNode = clone.querySelector(".profile-list-item-avatar");

  nameNode.innerHTML = `${name}`;
  titleNode.innerHTML = `${jobTitle} @ ${companyName}`;
  avatarNode.src = avatarSrc;
  avatarNode.setAttribute("aria-label", `${name}`);

  if (topFriend) {
    const topFriendNode = clone.querySelector(".top-friend-flag");
    topFriendNode.style.display = "block";
  }

  const avatarImg = document.createElement("img");
  if (avatarSrc) avatarImg.src = avatarSrc;
  else{
    const altTextNode = clone.querySelector(".friends-img-alt-text");
    const initals = name[0].concat(name.substr(name.indexOf(' ')+1, 1));
    altTextNode.innerHTML = `${initals}`;
    altTextNode.style.setProperty("transform", "translateY(12px)");
  }
  avatarImg.setAttribute("aria-label", `${name}`);
  avatarNode.appendChild(avatarImg);


  return clone;
};

/**
 * Function which accepts the JSON results from the API, and uses HTML templates
 * to generate the markup needed for the results list
 *
 * @param {object} resultsData JSON payload of results
 */
export const generateFriendsListFromTemplate = (resultsData) => {
  const friendsListSection = document.querySelector(
    "#profile-friends .profile-friends-list"
  );

  for(let i = 0; i < resultsData.friends.length; i++){
    const name = resultsData.friends[i].name;
    // Locate first space in name str and grab everything after.
    // Not a great method for first names like "Mary Ann" or last names like "Van der Woodsen", first/last would ideally be separate feilds
    const lastName = name.slice(name.indexOf(' ')+1); // Using .slice over .substring because it will auto grab the end of the string if a stop val isn't given
    resultsData.friends[i]["lastName"] = lastName; // Insert new feild "lastName" and give it a value
  }

  if (resultsData.friends && resultsData.friends.length > 0) {
    removeChildNodes(friendsListSection);

    resultsData.friends.sort(SortOrderUndef("topFriend", "lastName"));

    for (let i = 0; i < resultsData.friends.length; i++) {
      const friendsNode = generateListItemNode(resultsData.friends[i]);
      friendsListSection.appendChild(friendsNode);
    }
  }

  // Comparer function can compare two objects based on one attribute    
  function SortOrder(a, b, sortAttribute) {    
    if (a[sortAttribute] > b[sortAttribute]) return 1;    
    else if (a[sortAttribute] < b[sortAttribute]) return -1;  
    return 0;     
  }

  // Comparer function can compare based on two attributes, returns a function so .sort method can be used    
  function SortOrderUndef(sortAttributePrimary, sortAttributeSecondary) {    
      return function(a, b) {
          if (a[sortAttributePrimary] == b[sortAttributePrimary]) {
            return SortOrder(a,b,sortAttributeSecondary);
          }    
          else if (a[sortAttributePrimary] == true)  return -1;
          else if (b[sortAttributePrimary] == true) return 1;
      }    
  }
};
