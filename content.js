var searchText = document.getElementById("text");
var searchByUser = document.getElementById("user");
var searchByRepo = document.getElementById("repo");

document.getElementById("search").addEventListener("click", function() {
    var keyword = searchText.value;
    if (searchByUser.checked) {
        chrome.tabs.create({ url : "https://github.com/" + keyword});
    } else {
        chrome.tabs.create({ url : "https://github.com/search?utf8=%E2%9C%93&q=" + keyword +"/"});
    }
});
