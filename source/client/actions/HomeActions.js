import alt from '../alt'
import $ from 'jquery'

class HomeActions {
  constructor () {
    this.generateActions(
      'getTopTenMoviesSuccess',
      'getTopTenMoviesFail'
    )
  }

  getTopTenMovies () {
    let request = {
      url: '/api/movies/top-ten',
      method: 'get'
    }

    $.ajax(request)
      .done(data => {
        let movies = []
        for (let movie of data) {
          let movieData = {
            _id: movie._id,
            name: movie.name,
            description: movie.description,
            genres: movie.genres
          }
          movies.push(movieData)
        }

        this.getTopTenMoviesSuccess(movies)
      })
      .fail(err => this.getTopTenMoviesFail(err))

    return true
  }
}

export default alt.createActions(HomeActions)
