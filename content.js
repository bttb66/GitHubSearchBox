var searchText = document.getElementById("text");
var searchByUser = document.getElementById("user");
var searchByRepo = document.getElementById("repo");

document.getElementById("search").addEventListener("click", function() {
    var keyword = searchText.value;
    if (searchByUser.checked) {
        //user검색 선택
        chrome.tabs.create({ url : "https://github.com/" + keyword},(tab) =>{
            if (tab.title == 'Page not found &middot; GitHub')
                chrome.tabs.update(tab.id, { url: "https://github.com/search?utf8=%E2%9C%93&q=" + keyword + "/"});
        });
    } else {
        chrome.tabs.create({ url : "https://github.com/search?utf8=%E2%9C%93&q=" + keyword +"/"});
    }
});
