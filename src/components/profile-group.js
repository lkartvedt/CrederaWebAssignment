import { removeChildNodes } from "../utils";

const activityStates = {
  active: "active",
  inactive: "inactive",
  moderate: "moderate",
  low: "low",
};
/**
 * Function which generates a single Card node based on a dataset
 *
 * @param {object} data data containing attributes of a card
 * @return {Node} generated markup for a card
 */
const generateCardNode = (data) => {
  const { name, href, activity } = data;
  const templateId = "profile-group-results-item-template";
  const resultCardTemplate = document.getElementById(templateId);
  const clone = document.importNode(resultCardTemplate.content, true);
  const titleNode = clone.querySelector("p.page-paragraph");
  const referenceNode = clone.querySelector("a.page-paragraph");

  titleNode.innerHTML = `${name}`;
  referenceNode.href = href;

  var style = clone.querySelector('.profile-group-results-card').style;

  switch(activity){
    case activityStates.active:
      style.setProperty("--backgroundColor", "var(--secondary)");
      break;
    case activityStates.inactive:
      style.setProperty("--backgroundColor", "var(--primary)");
      break;
    case activityStates.moderate:
      style.setProperty("--backgroundColor", "var(--warning)");
      break;
    case activityStates.low:
      style.setProperty("--backgroundColor", "var(--grayscale_2)");
      break;
  }


  // if(activity == activityStates.active){
  //   style.setProperty("--backgroundColor", "var(--secondary)");
  // }else if(activity == activityStates.inactive){
  //   style.setProperty("--backgroundColor", "var(--primary)");
  // }else if(activity == activityStates.moderate){
  //   style.setProperty("--backgroundColor", "var(--warning)");
  // }else if(activity == activityStates.low){
  //   style.setProperty("--backgroundColor", "var(--grayscale_2)");
  // }

  return clone;
};

/**
 * Function which accepts the JSON results from the API, and uses HTML templates
 * to generate the markup needed for the results list
 *
 * @param {object} resultsData JSON payload of results
 */
export const generateProfileGroupItemsFromTemplate = (resultsData) => {
  const profileGroupsList = document.querySelector(
    "#profile-groups .profile-group-results"
  );

  removeChildNodes(profileGroupsList);

  if (resultsData.groups && resultsData.groups.length > 0) {
    for (let i = 0; i < resultsData.groups.length; i++) {
      const groupNode = generateCardNode(resultsData.groups[i]);
      profileGroupsList.appendChild(groupNode);
    }
  }
};
