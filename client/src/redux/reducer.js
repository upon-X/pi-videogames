const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: {},
    platforms: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'GET_VIDEOGAME_NAME': //searchbar
            return {
                ...state,
                videogames: action.payload
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'POST_VIDEOGAME':
            return {
                ...state,
            }
        case 'FILTER_BY_GENRE':
            const allGames = state.videogames;
            const genresFiltered = action.payload === 'All' ?
                state.allVideogames
                : allGames.filter(el => {
                    return el.genres.find(el => {
                        return el.name === action.payload;
                    })
                });
            return {
                ...state,
                videogames: genresFiltered
            };
        case 'FILTER_BY_PLATFORMS':
            const allgames = state.videogames;
            const platformsFiltered = action.payload === 'All' ?
                state.allVideogames
                : allgames.filter(el => {
                    return el.platforms.find(el => {
                        return el.name === action.payload;
                    });
                });
            if (platformsFiltered.length === 0) {
                alert("No hay juegos disponibles para esta plataforma.");
                return state;
            }
            return {
                ...state,
                videogames: platformsFiltered
            };
        case 'FILTER_BY_CREATED':
            const filterType = action.payload;
            if (filterType === 'Created' || filterType === 'Api') {
                const filteredGames = state.allVideogames.filter(game => {
                    const isCreatedInDb = game.createdInDb;
                    return (filterType === 'Created' && isCreatedInDb) ||
                        (filterType === 'Api' && !isCreatedInDb);
                });
                if (filteredGames.length === 0) {
                    alert("No hay juegos creados en la base de datos.");
                    return state;
                }
                return {
                    ...state,
                    videogames: filteredGames
                };
            } else {
                return {
                    ...state,
                    videogames: state.allVideogames
                };
            }
        case 'ORDER_BY_NAME':
            //orden a/z z/a
            let sortName = action.payload === 'Asc' ?
                state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
                : state.videogames.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: sortName,
            };
        case 'ORDER_BY_RATING':
            //Ordena de manera high/low low/high
            const sortRating = action.payload === 'Low' ?
                [...state.videogames].sort((a, b) => a.rating - b.rating)
                : [...state.videogames].sort((a, b) => b.rating - a.rating);
            return {
                ...state,
                videogames: sortRating,
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'GET_PLATFORMS':
            return {
                ...state,
                platforms: action.payload
            }
        case 'RESET_DETAIL':
            return {
                ...state,
                detail: {}, // Restablecer los detalles a un objeto vacío
            };
        // case 'DELETE_GAME':
        //     // Filtra los juegos en el state para eliminar el del ID dado
        //     const updatedVideogames = state.videogames.filter(game => game.id !== action.payload);
        //     return {
        //         ...state,
        //         videogames: updatedVideogames,
        //     };
        default:
            return state;
    }
};

export default rootReducer;