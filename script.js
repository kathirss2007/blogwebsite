
/* USERNAME AND PASSWORD */
const correctUsername = "BLOG";
const correctPassword = "2030";

/* LOGIN */
function login() {
    const username = document.getElementById("username")
        .value.trim();

    const password = document.getElementById("password")
        .value.trim();

    const error = document.getElementById("error");

    if (
        username === correctUsername &&
        password === correctPassword
    ) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("app").style.display = "block";

        document.getElementById("profileName").innerText = "KATHIR SS";
        document.getElementById("avatar").innerText = "K";

        error.innerText = "";
    } else {
        error.innerText = "Invalid username or password!";
    }
}

/* LOGOUT */
function logout() {
    document.getElementById("app").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerText = "";
}

/* CREATE POST */
function addPost() {
    const text = document.getElementById("postText")
        .value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    // Create elements safely instead of inserting user text
    // through innerHTML.
    const post = document.createElement("div");
    post.className = "post";

    const heading = document.createElement("h3");
    heading.textContent = "KATHIR SS";

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    const actions = document.createElement("div");
    actions.className = "actions";

    // Like button
    const likeButton = document.createElement("button");
    likeButton.append("❤️ Like ");

    const count = document.createElement("span");
    count.textContent = "0";
    likeButton.appendChild(count);
    likeButton.onclick = function () {
        likePost(likeButton);
    };

    // Comment button
    const commentButton = document.createElement("button");
    commentButton.textContent = "💬 Comment";
    commentButton.onclick = commentPost;

    // Share button
    const shareButton = document.createElement("button");
    shareButton.textContent = "🔁 Share";
    shareButton.onclick = sharePost;

    actions.append(likeButton, commentButton, shareButton);
    post.append(heading, paragraph, actions);

    document.getElementById("posts").prepend(post);
    document.getElementById("postText").value = "";
}

/* LIKE */
function likePost(button) {
    const count = button.querySelector("span");
    count.innerText = Number(count.innerText) + 1;
}

/* FOLLOW */
function followUser(button) {
    const followers = document.getElementById("followers");
    const following = document.getElementById("following");

    if (button.innerText.trim() === "Follow") {
        button.innerText = "Following";

        followers.innerText = Number(followers.innerText) + 1;
        following.innerText = Number(following.innerText) + 1;
    } else {
        button.innerText = "Follow";

        followers.innerText = Math.max(
            0, Number(followers.innerText) - 1
        );

        following.innerText = Math.max(
            0, Number(following.innerText) - 1
        );
    }
}

/* COMMENT */
function commentPost() {
    alert("Comment feature coming soon!");
}

/* SHARE */
function sharePost() {
    alert("Post shared successfully!");
}
