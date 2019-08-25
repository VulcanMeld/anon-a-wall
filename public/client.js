"use strict";

const wallPosts = [
  {
    content: "hello, I love you all",
    selfDestruct: { on: true, timeInMinutes: 30 },
    likes: 0
  },

  {
    content: "hello, I love you all",
    selfDestruct: { on: true, timeInMinutes: 30 },
    likes: 0
  }
];

const getWallPosts = callBackFn => {
  let wallPostsData = wallPosts;
  displayWallPosts(wallPostsData);
};

const watchForm = () => {
  $(".js-user-text-box").on("submit", function(event) {
    event.preventDefault();
  });
};

const displayWallPosts = data => {
  for(let i = 0; i < data.length; i++) {
    $(".js-wall").append(
      `<div class = 'post' id = ${i}><p>${data[i].content}</p><button class = "js-like-button"></button><p class = "js-like-count">Like Count: ${data[i].likes} </p></div>`
    );
  }

  $(".js-like-button").on("click", function(event) {
    getLikes;
  });

  const getLikes = callBackFn => {};
};

const displayLikes = () => {};

const startApp = () => {
  getWallPosts(displayWallPosts);
  watchForm();
};

$(startApp);
