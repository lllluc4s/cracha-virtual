const linksSocialMedia = {
  github: 'r0drigu3s',
  instagram: 'caslur___',
  facebook: 'caslur',
  twitter: 'caslur___'
};

function changelinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}
changelinksSocialMedia();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
    });
}
getGitHubProfileInfos();
