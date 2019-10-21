import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './Screens/Search';
import Trips from './Screens/Trips';
import Messages from './Screens/Messages';
import Host from './Screens/Host';
import Profile from './Screens/Profile';
import Login from './Screens/Login';



const Navigator = createStackNavigator({
    Search,
    Trips,
    Messages,
    Host,
    Profile,
    Login
}, {
    headerMode: 'none'
});


export default createAppContainer(Navigator);