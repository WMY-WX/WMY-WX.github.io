var posts=["2025/01/15/Markdown-完整教程/","2025/01/10/Markdown-语法教学/","2025/01/06/hello-world/","2025/01/10/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };