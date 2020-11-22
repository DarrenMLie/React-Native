import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import fetchapi from './fetchapi'
import { UpdateVideos } from './redux/actions'

// flatlist item component in browse screen component (order: 4)
class BrowseItem extends React.Component {
    static propTypes = {
        obj: PropTypes.object
    }

    render() {
        return (
            <View style={styles.browseitem}>
                <TouchableOpacity style={styles.browseitemlayout} onPress={() => this.props.navigation.navigate('VideoScreen', {obj: this.props.obj})}>
                    <Image source={{uri: `https://i.vimeocdn.com/video/${this.props.obj.item.picture_id}_120x132.jpg`}} style={styles.thumbnail}/>
                    <Text>   </Text>
                    <View>
                        {this.props.obj.item.tags.length <= 30 && <Text>Tags: {this.props.obj.item.tags}</Text>}
                        {this.props.obj.item.tags.length > 30 && <Text>Tags: {this.props.obj.item.tags.slice(0, 30)}</Text>}
                        {this.props.obj.item.tags.length > 30 && <Text>{this.props.obj.item.tags.slice(30)}</Text>}
                        <Text>Duration: {this.props.obj.item.duration + ' seconds'}</Text>
                        <Text>ID: {this.props.obj.item.id}</Text>
                        <Text>Source: pixabay.com</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

// not worth changing function/object literal in render to class property/function
// browse screen component (type: tab, order: 3)
class Browse extends React.Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
        UpdateVideos: PropTypes.func.isRequired
    }

    state = {
        searchtext: '',
    }

    fetchdata = () => {
        fetchapi(this.state.searchtext).then(data => this.props.UpdateVideos({videos: data.hits}))
    }

    getdata = (searchtext) => {
        this.setState({searchtext}, this.fetchdata)
    }

    render() {
        return (
            <View style={styles.browse}>
                <TextInput placeholder='Search' value={this.state.searchtext} onChangeText={searchtext => this.getdata(searchtext)} style={styles.searchbar}/>
                <FlatList keyExtractor={item => item.id.toString()} data={this.props.videos} renderItem={obj => 
                    <BrowseItem obj={obj} navigation={this.props.navigation}/>
                }/>
            </View>
        )
    }
}

// connect to redux props
const mapStateToProps = state => ({
    videos: state.videos
})

export default connect(mapStateToProps, {UpdateVideos: UpdateVideos})(Browse)

// styles
const styles = StyleSheet.create({
    browse: {
        flex: 1,
    },
    searchbar: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 4
    },
    browseitem: {
        padding: 10
    },
    browseitemlayout: {
        flexDirection: 'row'
    },
    thumbnail: { 
        width: 120, 
        height: 132 
    }
})