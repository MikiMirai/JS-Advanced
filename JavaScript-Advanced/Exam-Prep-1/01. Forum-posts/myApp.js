window.addEventListener("load", solve);

function solve() {
    const titlePost = document.getElementById("post-title");
    const categoryPost = document.getElementById("post-category");
    const contentPost = document.getElementById("post-content");
    const reviewBox = document.getElementById("review-list");
    const publishedBox = document.getElementById("published-list");
    document.getElementById("clear-btn").addEventListener("click", clearPosts);
    const publishButton = document.getElementById("publish-btn")
        .addEventListener("click", publishPost);

    function publishPost(ev) {
        if (titlePost != "" && categoryPost != "" && contentPost != "") {
            createPost(titlePost.value, categoryPost.value, contentPost.value)
        }
        titlePost.value = "";
        categoryPost.value = "";
        contentPost.value = "";
    }

    function createPost(title, category, content) {
        const li = document.createElement("li");
        li.setAttribute("class", "rpost");
        const articleEl = elementCreate("article", "", li);

        elementCreate("h4", `${title}`, articleEl);
        elementCreate("p", `Category: ${category}`, articleEl);
        elementCreate("p", `Content: ${content}`, articleEl);

        const editButton = elementCreate("button", "Edit", li);
        editButton.setAttribute("class", "action-btn edit");
        const approveButton = elementCreate("button", "Approve", li);
        approveButton.setAttribute("class", "action-btn approve");

        reviewBox.appendChild(li);

        editButton.addEventListener("click", (ev) => editPost(ev, title, category, content));
        approveButton.addEventListener("click", (ev) => approvePost(ev, articleEl));
    }

    function editPost(ev, editTitle, editCategory, editContent) {
        ev.target.parentNode.remove();

        titlePost.value = editTitle;
        categoryPost.value = editCategory;
        contentPost.value = editContent;
    }

    function approvePost(ev, article) {
        ev.target.parentNode.remove();

        const publishedPost = document.createElement("li");
        publishedPost.setAttribute("class", "rpost");
        publishedPost.appendChild(article);
        publishedBox.appendChild(publishedPost);
    }

    function clearPosts() {
        let postsArray = Array.from(publishedBox.children);
        postsArray.forEach((post) => { post.remove() });
    }

    function elementCreate(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }
}