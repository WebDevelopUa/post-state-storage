import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";
import CustomButton from "../components/CustomButton";
import {Feather} from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(BlogContext);
    return (
        <View style={styles.container}>
            <CustomButton viewStyle={styles.button}
                          textStyle={styles.button}
                          onPress={() => navigation.navigate('CREATE')}>
                + post
            </CustomButton>
            <Text style={styles.paragraph}>Blog Posts</Text>
            <FlatList
                data={state}
                showsVerticalScrollIndicator={false}
                keyExtractor={() => Math.floor(Math.random() * 99999)}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SHOW', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.listTitle}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.listIcon} name='trash'/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('CREATE')}>
            <Feather style={styles.plusIcon} name="plus"/></TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#07a1c9',
        borderRadius: 5
    },
    paragraph: {
        marginVertical: 15,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#07a1c9',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    listTitle: {
        fontSize: 18,
        margin: 14,
        fontWeight: 'bold',
    },
    listIcon: {
        fontSize: 24,
        margin: 14,
        fontWeight: 'bold',
        color: '#ee0a0a',
    },
    plusIcon: {
        fontSize: 30,
        marginRight: 14,
        fontWeight: 'bold',
        color: '#ee0a0a',
    },
    button: {
        // color: '#e6ee0a',
        // backgroundColor: '#cb2eac',
        textAlign: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
});

export default IndexScreen;
