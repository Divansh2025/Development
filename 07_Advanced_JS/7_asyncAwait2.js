function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

// when you have multiple promises / fetch data in parallel you can use Promise.all() method
// when we're using async await we don't need to use Promise.all() method

async function getBlogData() {
  try {
    console.log("fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // there's better way to do it
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.log("error fetching blog data");
  }
}
getBlogData();
