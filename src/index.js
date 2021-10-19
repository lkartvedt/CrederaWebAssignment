import _ from "lodash";
import "./styles/main.css";

import { getProfileData, getFriendsListData } from "./services/profile";
import { generateProfileGroupItemsFromTemplate } from "./components/profile-group";
import { generateFriendsListFromTemplate } from "./components/profile-friends";
import { generatePinnedPostsFromTemplate } from "./components/profile-posts";
import { updateProfileInformation } from "./components/profile-header";

window.addEventListener("load", () => {
  getFriendsListData().then((results) => {
    generateFriendsListFromTemplate(results);
  });

  getProfileData().then((results) => {
    updateProfileInformation(results);
    generateProfileGroupItemsFromTemplate(results);
    generatePinnedPostsFromTemplate(results);
  });
});
