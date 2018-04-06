var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'images/1.jpg'
    },
    {
        id: 2,
        title: 'Auta',
        desc: 'Film o przygodach samochodzików',
        poster: 'images/2.jpg'
    },
    {
        id: 3,
        title: 'Spiderman',
        desc: 'Film o człowieku pająku',
        poster: 'images/3.jpg'
    },
    {
        id: 4,
        title: 'Obcy',
        desc: 'Film o przerażającym kosmicie',
        poster: 'images/4.jpg'
    },
    {
        id: 5,
        title: 'Batman',
        desc: 'Film o człowieku nietoperzu',
        poster: 'images/5.jpg'
    },
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDescription, { desc: this.props.movie.desc }),
                React.createElement(MovieImage, { img: this.props.movie.poster })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (React.createElement('h2', {}, this.props.title)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc)
    }
});

var MovieImage = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('img', { src: this.props.img })
    }
})

var moviesElements = movies.map(function (movie) {
    return (
        React.createElement(Movie, { key: movie.id, movie: movie })

    )
});

var MovieList = React.createClass({

    render: function () {
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
});


var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));