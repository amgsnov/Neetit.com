const wrapper = document.querySelector(".holder");

if (localStorage.getItem("posts")) {
  const posts = JSON.parse(localStorage.getItem("posts"));
  posts.forEach(({ title, text }) => {
    const post = document.createElement("div");
    post.className = "block-post";
    post.innerHTML = `
      <div class="block-post__preview">
      <img class="block-post__img" src="../illustrations/monro.svg">
      <p class="block-title">Jean Lopez</p>
      
  </div>
  <div class="block-post__content">
      <h1 class="block-post__title">${title}</h1>
      <p class="block-post__subtitle">${text}</p>
      <div class="block-post__comment">
          <a href="./leaveComment.html">
              <svg class="svg-comment" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.59182 15.3042C2.34396 9.78675 6.40306 3.75 12.3609 3.75H12.6823C17.1379 3.75 20.7499 7.36201 20.7499 11.8176C20.7499 16.7785 16.7284 20.8 11.7676 20.8H3.94731C3.62905 20.8 3.34545 20.5991 3.23982 20.2989C3.13419 19.9987 3.22954 19.6645 3.47769 19.4652L5.44918 17.8819C5.53538 17.8127 5.56587 17.6951 5.52416 17.5927L4.59182 15.3042ZM12.3609 5.25C7.46834 5.25 4.13502 10.2074 5.98096 14.7383L6.9133 17.0268C7.2053 17.7435 6.99184 18.5669 6.38842 19.0515L6.07897 19.3H11.7676C15.9 19.3 19.2499 15.95 19.2499 11.8176C19.2499 8.19044 16.3095 5.25 12.6823 5.25H12.3609Z"
                      fill="white" />
              </svg>
          </a>
          <span class="comment-span">0</span>
          <svg class="svg-like" width="18px" height="18px" viewBox="0 -0.43 29.956 29.956" id="_10_-_Love"
              data-name="10 - Love" xmlns="http://www.w3.org/2000/svg">
              <path id="_10_-_Love-2" data-name="10 - Love"
                  d="M16,4.986A8.785,8.785,0,0,0,3.522,4.075c-3.2,3.038-3.395,9.113-.2,15.189,2.131,4.325,7.576,8.69,12.14,11.581a1,1,0,0,0,1.07,0c4.567-2.893,10.017-7.262,12.15-11.6,3.188-6.063,2.99-12.133-.207-15.169A8.785,8.785,0,0,0,16,4.986h0ZM15.154,7.2a1,1,0,0,0,1.692,0A6.792,6.792,0,0,1,27.1,5.525h0A6.408,6.408,0,0,1,28.92,9.452a15.475,15.475,0,0,1-2.015,8.882c0,.008-.009.017-.013.025C24.98,22.251,20.161,26.115,16,28.812c-4.161-2.7-8.98-6.561-10.892-10.453,0-.008-.008-.017-.013-.025A15.483,15.483,0,0,1,3.08,9.452,6.414,6.414,0,0,1,4.9,5.525,6.792,6.792,0,0,1,15.154,7.2Z"
                  transform="translate(-1.023 -1.896)" fill-rule="evenodd" fill="white">
          </svg>
          <span class="like-span">0</span>
      </div>
  </div> `;
    wrapper.appendChild(post);
  });
} else {
  localStorage.setItem("posts", JSON.stringify([]));
}
