window.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.querySelector('.sidebar-container__playlists-selections');

    const firstPlaylist = document.querySelector('.playlist-1');
    selectPlaylist(firstPlaylist);
    sidebarContainer.addEventListener('click', async e => {
        selectPlaylist(e.target);
    });

    async function selectPlaylist(playlist) {
        const playlistClass = playlist.classList[0];
        const id = getIdFromBEMClass(playlistClass)
        if (id) {
            try {
                const res = await fetch(`/playlists/${id}`);
                const json = await res.json();
                const { title } = json;
                const data = json.PlaylistPodcastJoins;

                makeActive(playlist);
                populatePodcastContent(data);
                // updatePlaylistTitle(title);
            } catch (e) {
                console.error(e)
                throw new Error('Uh oh. Something went wrong...')
            }
        }
    }

    function makeActive(selection) {
        for (let i = 0; i < sidebarContainer.childNodes.length; i++) {
            let playlist = sidebarContainer.childNodes[i].childNodes[0];
            if (playlist.classList.contains('playlist-active')) {

                playlist.classList.remove('playlist-active');
            }
        }
        selection.classList.add('playlist-active');
    }

    function populatePodcastContent(data) {
        const contentContainer = document.querySelector('.main-container__playlist-content');
        contentContainer.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const { hostName, id, podcastImage, title } = data[i].Podcast;
            let { description } = data[i].Podcast;
            if (description.length > 200) {
                description = shortenDescription(description);
            }
            const newPlaylistContent = document.createElement('div');
            newPlaylistContent.classList.add('podcast__wrapper');
            newPlaylistContent.classList.add(`podcast-${id}`);
            newPlaylistContent.innerHTML = `
                <div class="podcast-img__wrapper">
                    <img class="podcast-img" src="${podcastImage}" alt="podcast-image">
                </div>
                <div class="podcast-header">
                    <h3 class="podcast-title">${title}</h3>
                    <h4 class="podcast-host">${hostName}</h4>
                </div>
                <p class="podcast-description">${description}</p>
            `

            newPlaylistContent.addEventListener('click', e => {
                e.stopPropagation();
                const podcastId = getIdFromBEMClass(newPlaylistContent.classList[1]);
                window.location.href = `/podcasts/${podcastId}`;
            })

            contentContainer.appendChild(newPlaylistContent);
        }
    }

    function shortenDescription(description) {
        let words = description.split(' ');
        let shortened = [];
        let i = 0;
        let length = 0;
        while (length < 200) {
            shortened.push(words[i]);
            length += words[i].length;
            i++;
        }
        let shortenedString = shortened.join(' ');
        if (/([a-zA-Z"']^)/.test(shortenedString[shortenedString.length - 1])) {
            shortenedString = shortenedString.slice(0, shortenedString.length - 1);
        }
        shortenedString += '  ...';

        return shortenedString;
    }

    // function updatePlaylistTitle(title) {
    //     // const playlistTitle = document.querySelector('.main-container__playlist-title');
    //     // playlistTitle.innerHTML = title;
    // }

    function getIdFromBEMClass(classString) {
        const index = classString.indexOf('-');
        const id = parseInt(classString.slice(index + 1));
        return id;
    }
});
