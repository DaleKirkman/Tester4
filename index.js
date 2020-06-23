var imgArr = ["meeting4.png","meeting3.png","meeting2.png","meeting1.png","meeting-intro.png","meeting-box.png"];

function displayPodcast(){
    var podcasts = Math.floor(Math.random() * (imgArr.length));
    document.podcasts.src="images-meetings/" + imgArr[podcasts];
}
