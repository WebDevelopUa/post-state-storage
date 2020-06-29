import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import {Provider as BlogProvider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
    {
        HOME: IndexScreen,
        SHOW: ShowScreen,
        CREATE: CreateScreen,
        EDIT: EditScreen
    },
    {
        initialRouteName: 'HOME',
        defaultNavigationOptions: {
            title: 'BLOG POST | state storage |',
        },
    }
);
const App = createAppContainer(navigator)

export default () => <BlogProvider><App/></BlogProvider>
