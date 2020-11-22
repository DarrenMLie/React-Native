//action types
export const UPDATE_VIDEOS = 'UPDATE_VIDEOS'
export const ADD_FAVORITES = 'ADD_FAVORITES'
export const DELETE_FAVORITES = 'DELETE_FAVORITES'

//action creators
export const UpdateVideos = videos => ({
    type: UPDATE_VIDEOS,
    payload: videos
})

export const AddFavorites = favorites => ({
    type: ADD_FAVORITES,
    payload: favorites
})

export const DeleteFavorites = favorites => ({
    type: DELETE_FAVORITES,
    payload: favorites
})