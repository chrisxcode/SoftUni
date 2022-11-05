function getArticleGenerator(articles) {
    let allArticles = articles;
    let content = document.getElementById(`content`);

return solve;
    function solve (){
        let shouldWeAddArticle = allArticles.length > 0;
        let currentArticle = allArticles.shift();
        if (shouldWeAddArticle) {
            let newArticle = document.createElement(`article`);
            let newParagraph = document.createElement(`p`);
            newParagraph.textContent = currentArticle;
            newArticle.appendChild(newParagraph);
            content.appendChild(newArticle);
        }
  
    }
}
