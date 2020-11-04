const { Playlist, Podcast, PlaylistPodcastJoin } = require("../db/models");

async function findAllPlaylists() {
    const playlists = await Playlist.findAll({
        order: [['title', 'ASC']]
    });
    console.log(playlists);
    return playlists.map(playlist => ({
       id: playlist.id,
       title: playlist.title,
       href: `/playlists/${playlist.id}`
    }));
}

module.exports = {
    findAllPlaylists
}