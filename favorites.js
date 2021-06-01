import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { DeleteFavorites } from './redux/actions'

// flatlist item component in favorites screen component (order: 4)
class FavoritesItem extends React.Component {
    static propTypes = {
        obj: PropTypes.object,
        DeleteFavorites: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.favoritesitem}>
                <TouchableOpacity style={styles.favoritesitemlayout} onPress={() => this.props.navigation.navigate('VideoScreen', {obj: this.props.obj})}>
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
                <TouchableOpacity onPress={() => this.props.DeleteFavorites({delete: this.props.obj.item})}> 
                    <Text> X </Text>
                </TouchableOpacity>
            </View> 
        )
    }
}

// not worth changing function/object literal in render to class property/function
// favorites screen component (type: tab, order: 3)
class Favorites extends React.Component {
    static propTypes = {
        favorites: PropTypes.array.isRequired,
        DeleteFavorites: PropTypes.func.isRequired
    }

    render() {
        if (this.props.favorites.length === 0) {
            return (
                <View style={styles.nofavorites}>
                    <Text color='gray'>No Favorites</Text>
                </View>
            )
        }
        return (
            <View style={styles.favorites}>
                <FlatList keyExtractor={item => item.id.toString()} data={this.props.favorites} renderItem={obj =>  
                    <FavoritesItem obj={obj} navigation={this.props.navigation} DeleteFavorites={this.props.DeleteFavorites}/>
                }/>
            </View>
        )
    }
}

// connect to redux props
const mapStateToProps = state => ({
    favorites: state.favorites
})

export default connect(mapStateToProps, {DeleteFavorites: DeleteFavorites})(Favorites)

// styles
const styles = StyleSheet.create({
    favorites: {
        flex: 1,
    },
    favoritesitem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 10
    },
    favoritesitemlayout: {
        flexDirection: 'row'
    },
    nofavorites: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    thumbnail: { 
        width: 120, 
        height: 132 
    }
})