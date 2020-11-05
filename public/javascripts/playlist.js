window.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.querySelector(".sidebar-container__playlists-selections");
    sidebarContainer.addEventListener("click", async e => {
        const selection = e.target;
        const playlistClass = selection.classList[0];
        const index = playlistClass.indexOf('-');
        const id = parseInt(playlistClass.slice(index + 1))

        const res = await fetch(`/playlists/${id}`);
        const data = await res.json();
        console.log(data);

        // console.log(selection);
    });
});