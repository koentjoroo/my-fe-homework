const getAsyncAwait = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    
    if (!response.ok) throw new Error('response is not okay :(')
    return data
}

const handleCreatePlaylist = () => alert("You just clicked submit")
const handleFetchButton = () => {
    getAsyncAwait('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
        .then(data => console.log('success:', data))
        .catch(error => alert(error.message))
}

const createPlaylistForm = document.querySelector('form#create-playlist')
const submitCreatePlaylist = createPlaylistForm.querySelector('button[type=submit]')
const fetchDataButton = document.querySelector('button#fetch-data')

submitCreatePlaylist.addEventListener('click', handleCreatePlaylist)
fetchDataButton.addEventListener('click', handleFetchButton)