import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Video } from 'expo-av'
// import VideoPlayer from 'expo-video-player' (for default fullscreen video player)
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AddFavorites } from './redux/actions'

// video screen component (type: stack, order: 2)
class VideoScreen extends React.Component {
    static propTypes = {
        obj: PropTypes.object,
        AddFavorites: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.videoscreen}>
                <Video source={{ uri: this.props.route.params.obj.item.videos.large.url }} useNativeControls resizeMode='stretch' style={styles.video}/>
                {/* <VideoPlayer videoProps={{shouldPlay: true, resizeMode: Video.RESIZE_MODE_CONTAIN, source: {uri: this.props.route.params.obj.item.videos.large.url}}} inFullscreen={true}/> */}
                <Button title='Add To Favorites' color='#1377E9' onPress={() => this.props.AddFavorites({favorite: this.props.route.params.obj.item})}/>
            </View>
        )
    }
}

// connect to redux props
export default connect(null, {AddFavorites: AddFavorites})(VideoScreen)

// styles
const styles = StyleSheet.create({
    videoscreen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    video: {
        height: 412, 
        width: window.width
    }
})