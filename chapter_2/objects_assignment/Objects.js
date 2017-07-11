// Instructions

// Write an application that simulates a journal. A journal is essentially a list of entries. 
//Make sure that you can do all of the following things:

// Create a journal. When you create it, it should have no entries.
// Create an entry. Each entry should have a title, content, and an author.
// Add an entry to your journal.
// Display all the entries in your journal.

// Try and make your journal look as appealing as possible!


// Diving Deeper

// Once you've got that working, add more functionality!

//NEAR NEAR               When you're displaying an entry, make it look pretty.
//OK         Add timestamps to your entries when creating them.
//OK         Add tags to entries. An entry should be able to have any number of tags.
//ok          Add the ability to find all entries in your journal with a specific tag.
//ok      Add the ability to find all entries in your journal that contain a specific string.
//ok           Add the ability to display a specific entry.
//Almost THERE     Add the ability to display a specific list of entries.
//ok                      Delete a specified entry.
// Add a function that censors your journal -- censoring your journal should replace a supplied word 
// Be creative! Add whatever else you can think of!


function Journal(article) {
    this.journalArticle = article;
    this.journal = [];
    this.addArticle = function (myArticle) {
        this.journal.push(myArticle);
        // console.log(this.journal);
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
/*////
                    <div><input type="checkbox" name="select" value="coding" id="coding">
                        <label for="coding">Coding</label></div>
   ///         */
            li ='<div><input type="checkbox" name="select" value="'+article.articleTag+
                '" id=listSelection list"'+article.articleTag+'"><label for="'+article.articleTitle+
                '">'+article.articleTag+'</label></div>';
            
            //li ="<div id='li " + article.articleTag + "'>"+article.articleTitle +'</li>';
            //this.journal[i].articleTitle;
            $('#listTitles').prepend(li);
          //  $('.allArticles').prepend(this.journal[i].articleDiv);
        }
    });

    $('#showAll').click(function () {
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


 //       myJournal.showSelectedArticles ($(":checkbox").val());
   // })
})
