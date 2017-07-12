function Journal(article) {
    this.journalArticle = article;
    this.journal = [];
    this.addArticle = function (myArticle) {
        this.journal.push(myArticle);
    
    }

    this.publishAll = function () {
        $('.allArticles').html('');
        for (let i = 0; i < this.journal.length; i++) {
            $('.allArticles').prepend(this.journal[i].articleDiv);
        }
        console.log('Constructor.publishAll executed!');
    }
    this.removeArticle = function (tag) {
        var removed=0;
        for (let i = 0; i < this.journal.length; i++) {
            if (tag == this.journal[i].articleTag) {
                this.journal.splice(i, 1);
                removed++;
            }
        }
        if(removed>0){
            alert("Tag Removed!");
            console.log(`Tag Removed: ${tag}!`);
            myJournal.publishAll();
        }
        else{
            alert("We coudn't find this tag!");
        }
    }

    this.showArticleByTag = function (tag) {
        var found=0;
        $('.allArticles').html('');
        for (let i = 0; i < this.journal.length; i++) {
            if (tag == this.journal[i].articleTag) {
                found++;
                $('.allArticles').prepend(this.journal[i].articleDiv);
            }
        }
        if(found>0){
            alert("We found the Article");
            console.log(`We found!`);
        }
        else{
            alert("We coudn't find this Tag!");
        }
        console.log('Tag Search: Article Shown');
    }

    this.showArticleByString = function (substring) {
        var found=0;
        substring=substring.toLowerCase();
        $('.allArticles').html('');
        for (let i = 0; i < this.journal.length; i++) {
            let stringTitle   = this.journal[i].articleTitle.toLowerCase();
            let stringAuthor  = this.journal[i].articleAuthor.toLowerCase();
            let stringContent = this.journal[i].articleContent.toLowerCase();
            if (stringTitle.includes(substring)||stringAuthor.includes(substring)||
                stringContent.includes(substring)) {
                found++;
                $('.allArticles').prepend(this.journal[i].articleDiv);
            }
        }
        if(found>0){
            alert("We found!!");
            console.log(`We found!`);
        }
        else{
            alert("We coudn't find this String!");
        }

    console.log('String Search: Article Shown');
    }
}

function Article(title, author, content) {
    this.articleTitle = title;
    this.articleAuthor = author;
    this.articleContent = content;
    this.articleTimeStamp = '';
    this.articleTag = 0;
    this.articleDiv = '';

    this.sendToDataBase = function (news) {
        if (news.articleTitle !== '' && news.articleAuthor !== '' && news.articleContent !== '') {
            console.log('Title: ' + news.articleTitle + '\nAuthor: ' + news.articleAuthor +
                '\nContent: ' + news.articleContent);
            this.articleTimeStamp = getTime();
            var currentDate = new Date();
            this.articleTag = currentDate.getFullYear() + '00' +
                (currentDate.getMonth() + 1) + Math.floor((Math.random() * 1000) + 1);
            this.articleDiv = "<div id='box " + this.articleTag + "'>" + "<span id >" + this.articleTimeStamp +
                ' TAG: ' + this.articleTag + "</span>" +
                "<span id='title'>" + this.articleTitle + '\n' + '</span>'
                + "<span id='author'>" + this.articleAuthor + '\n' + '</span>' +
                "<span id='content'>" + this.articleContent + '<br><br>' + ' ' + '</span>' + '</div>';
            myJournal.addArticle(this);

            return true;
        }
        else {
            console.log('Empty Input! Please type again!');
            alert('Empty Input! Please type again!');
            return false;
        }
    }

    this.publish = function () {
        let h1 = '<h1>' + this.articleTitle + '</h1>';
        let h2 = '<h2>' + this.articleAuthor + '</h2>';
        let p = '<p>' + this.articleContent + '</p>';

        $('#title1').html(h1);
        $('#author1').html(h2);
        $('#content1').html(p);
    }

}  //  END OF THE CONSTRUCTOR !!!!!

function getTime() {
    var currentDate = new Date();
    var dateTime = "Published on: " + currentDate.getDate() + "/"
        + (currentDate.getMonth() + 1) + "/"
        + currentDate.getFullYear() + " at "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds();
    return dateTime;
}
// #################################### FUNCTIONS ##############################################
var allArticles = [];
var myJournal = new Journal();
$(document).ready(function () {
    $('#submitArticle').click(function () {
        event.preventDefault();
        var article = new Article($("input[name = 'title']").val(),
            $("input[name = 'author']").val(),
            $("textarea[name = 'content']").val()
        );
        if (article.sendToDataBase(article)) {
            article.publish();
            li ='<div><input type="checkbox" name="select" value="'+article.articleTag+
                '" id=listSelection list"'+article.articleTag+'"><label for="'+article.articleTitle+
                '">'+article.articleTag+'</label></div>';
            $('#listTitles').prepend(li);
        }
    });

    $('#showAll').click(function () {
        console.log("show all pressed");
        myJournal.publishAll();
    })

    $('#tagToRemoveButton').click(function () {
        myJournal.removeArticle($("input[name = 'tagToRemove']").val());
    })

    $('#searchWithTagButton').click(function () {
        myJournal.showArticleByTag ($("input[name = 'searchWithTag']").val());
    })

    $('#searchWithStringButton').click(function () {
        myJournal.showArticleByString ($("input[name = 'searchWithString']").val());
    })

    $('#showSelectedButton').click(function () {
        var selectedValues = [];    
        $('input[name=select]:checked').each(function(){ 
            selectedValues.push($(this).val());
        })
        alert(selectedValues);
        return false;
    });
  });