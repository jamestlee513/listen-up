window.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.querySelector('.sidebar-container__playlists-selections');
    sidebarContainer.addEventListener('click', async e => {
        const selection = e.target;
        const playlistClass = selection.classList[0];
        const index = playlistClass.indexOf('-');
        const id = parseInt(playlistClass.slice(index + 1))

        const res = await fetch(`/playlists/${id}`);
        const json = await res.json();
        const data = json.PlaylistPodcastJoins;

        makeActive(selection);
        populatePodcastContent(data);
        // console.log(data);
    });

    function makeActive(selection) {
        sidebarContainer.childNodes.forEach((playlist) => {
            if (playlist.classList.contains('playlist-active')) {
                playlist.classList.remove('playlist-active');
            }
        })
        selection.classList.add('playlist-active');
    }

    function populatePodcastContent(data) {
        const contentContainer = document.querySelector('.main-container__playlist-content');
        contentContainer.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const { description, duration, hostName, id, podcastImage, title } = data[i].Podcast;

            const newPlaylistContent = document.createElement('div');
            newPlaylistContent.classList.add('podcast__wrapper');
            newPlaylistContent.innerHTML = `
            <div class='podcast-img-wrapper'>
                <img src='../${podcastImage}' alt='podcast image'>
            </div>
            <div class='podcast-header'>
                <h3 class='podcast-title'>${title}</h3>
                <h4 class='podcast-host'>${hostName}</h4>
            </div>
            <p class='podcast-description'>no description for now</p>
            `

            contentContainer.appendChild(newPlaylistContent);
        }
    }
});