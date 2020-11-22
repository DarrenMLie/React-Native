import {combineReducers} from 'redux'
import {Alert} from 'react-native'

import {UPDATE_VIDEOS, ADD_FAVORITES, DELETE_FAVORITES} from './actions'

// videos reducer
const VideosReducer = (state = [], action) => {
    if (action.type === UPDATE_VIDEOS) {
        // console.log(action.payload.videos)
        return action.payload.videos
    }
    return state
}

// favorites reducer
const FavoritesReducer = (state = [], action) => {
    if (action.type === ADD_FAVORITES) {
        // console.log(action.payload.favorite)

        let checkdouble
        state.forEach(favorite => {
            if (favorite.pageURL === action.payload.favorite.pageURL) checkdouble = true
        })
        
        if(checkdouble === true) {
            Alert.alert('', 'This video is already in your favorites', [{text: 'Ok'}])
            return state
        }
        Alert.alert('', 'This video has been added to your favorites', [{text: 'Ok'}])
        return [...state, action.payload.favorite]
    }
    if (action.type === DELETE_FAVORITES) {
        // console.log(action.payload.delete)
        const filteredstate = state.filter(favorite => favorite.pageURL !== action.payload.delete.pageURL)
        return filteredstate
    }
    return state
}

// combined reducer
const reducer = combineReducers({
    videos: VideosReducer,
    favorites: FavoritesReducer
})

export default reducer