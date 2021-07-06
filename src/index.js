const handleCreatePlaylist = () => alert("You just clicked submit")

const createPlaylistForm = document.querySelector('form#create-playlist')
const submitCreatePlaylist = createPlaylistForm.querySelector('button[type=submit]')

submitCreatePlaylist.addEventListener('click', handleCreatePlaylist)