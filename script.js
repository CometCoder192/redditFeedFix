//let postTitle = document.getElementById('postTitle');
//let postImage = document.getElementById('postImage');

let progHumorDiv = document.getElementById('progHumorDiv');
let csCareerDiv = document.getElementById('csCareerDiv');

function fetcher() {
    fetch('https://www.reddit.com/r/ProgrammerHumor/top.json?t=day')
    .then(response => response.json())
    .then(data => {
        const posts = data.data.children;
        for (i = 0; i < 3; i++) {
            const postTitle = document.createElement('h3');
            const postImage = document.createElement('img');
            const postAuthor = posts[i].data.author;
            postImage.setAttribute('id', 'postImage');
            postTitle.setAttribute('id', 'postTitle');
            
            postTitle.innerText = `${posts[i].data.title} by ${postAuthor}`;
            postImage.src = posts[i].data.url;
            
            progHumorDiv.append(postTitle);
            progHumorDiv.append(postImage);
            
        }
        
    })
    .catch(error => console.error("Error: ", error));
    fetch('https://www.reddit.com/r/cscareerquestions/top.json?t=day')
    .then(response => response.json())
    .then(data => {
        const posts = data.data.children;
        for (let i = 0; i < 3; i++) {
            const postTitle = document.createElement('h2');
            const postText = document.createElement('p');
            const postAuthor = posts[i].data.author;
            postTitle.setAttribute('id', 'postTitle');
            postTitle.innerText = `\"${posts[i].data.title}\" by ${postAuthor}`;
            postText.innerHTML = `${posts[i].data.selftext}`
            csCareerDiv.append(postTitle);
            csCareerDiv.append(postText);
            
        }
        console.log(posts[0].data);
        
    })
    .catch(error => console.log(`Error: ${error}`));

    
}

fetcher();
