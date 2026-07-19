const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updatefollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500; // fixed here

    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updatefollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updatefollowersCounter();
});
