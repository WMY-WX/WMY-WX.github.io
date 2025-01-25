var posts=["2025/01/22/C++&SDL的双人塔防游戏/","2025/01/24/C-SDL的双人塔防游戏question/","2025/01/10/test/","2025/01/15/Markdown-完整教程/","2025/01/07/hello-world/","2025/01/16/安知鱼主题多层级分类跳转问题/","2025/01/10/Markdown-语法教学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };