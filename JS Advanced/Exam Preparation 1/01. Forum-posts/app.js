window.addEventListener("load", solve);

function solve() {

    let publishButton = document.getElementById(`publish-btn`);

    publishButton.addEventListener(`click`, onClick);

    let titleInputField = document.getElementById(`post-title`);
    let categoryInputField = document.getElementById(`post-category`);
    let contentInputField = document.getElementById(`post-content`);

    let reviewList = document.getElementById(`review-list`);
    let publishedList = document.getElementById(`published-list`);

    let buttons = document.querySelectorAll(`button`);

    function onClick(e) {

        if (titleInputField.value && categoryInputField.value && contentInputField.value && e.target.textContent == `publish`) {
            
            let newList = document.createElement(`li`);
            newList.classList.add(`rpost`);

            let newArticle = document.createElement(`article`);

            let newTitle = document.createElement(`h4`);
            newTitle.textContent = titleInputField.value;
            newArticle.appendChild(newTitle);

            let newCategory = document.createElement(`p`);
            newCategory.textContent = `Category: ${categoryInputField.value}`;
            newArticle.appendChild(newCategory);

            let newContent = document.createElement(`p`);
            newContent.textContent = `Content: ${contentInputField.value}`;
            newArticle.appendChild(newContent);

            newList.appendChild(newArticle);

            let newEditButton = document.createElement(`button`);
            newEditButton.classList.add(`action-btn`, `edit`);
            newEditButton.textContent = `Edit`;
            newList.appendChild(newEditButton);

            let newApproveButton = document.createElement(`button`);
            newApproveButton.classList.add(`action-btn`, `approve`);
            newApproveButton.textContent = `Approve`;
            newList.appendChild(newApproveButton);

            reviewList.appendChild(newList);

            titleInputField.value = ``;
            categoryInputField.value = ``;
            contentInputField.value = ``;

        }

        if (e.target.textContent == `Edit`) {
            let currentPost = e.target.parentNode;
            let currentTitle = currentPost.querySelector(`h4`);
            let currentCategory = currentPost.querySelectorAll(`p`)[0];
            let currentContent = currentPost.querySelectorAll(`p`)[1];

            titleInputField.value = currentTitle.textContent;
            categoryInputField.value = currentCategory.textContent.slice(10);
            contentInputField.value = currentContent.textContent.slice(9);

            reviewList.removeChild(currentPost);
            
        }

        if (e.target.textContent == `Approve`) {
            let currentPost = e.target.parentNode;
            let approveButton = currentPost.querySelectorAll(`button`)[0];
            let editButton =currentPost.querySelectorAll(`button`)[1];
            currentPost.removeChild(approveButton);
            currentPost.removeChild(editButton);
            
            publishedList.appendChild(currentPost);
        }

        if (e.target.textContent == `Clear`) {
            let allPosts = e.target.parentNode.querySelectorAll(`li`);
            
            Array.from(allPosts).forEach(post => publishedList.removeChild(post));

        }




        buttons = document.querySelectorAll(`button`);
        Array.from(buttons).forEach(button => button.addEventListener(`click`, onClick));
    }


}