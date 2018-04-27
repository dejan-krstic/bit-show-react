import Show from '../entities/Show'

class Shows {
    getData() {
        return fetch('http://api.tvmaze.com/shows')
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    result.splice(50);
                    return result.map(show => {
                        return new Show (show.name, show.image.medium, show.id);
                    })
                })
    }
}

export const shows = new Shows();