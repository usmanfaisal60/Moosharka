import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './Screens/Search';
import Trips from './Screens/Trips';
import Messages from './Screens/Messages';
import Host from './Screens/Host';
import Profile from './Screens/Profile';
import LoginOrSignUp from './Screens/LoginOrSignup';
import Login from './Screens/Login';
import ListYourCar from './Screens/ListYourCar';
import Signup from './Screens/Signup';
import SearchResults from './Screens/SearchResults';


const Navigator = createStackNavigator({
    Search,
    Trips,
    Messages,
    Host,
    Profile,
    LoginOrSignUp,
    Login,
    ListYourCar,
    Signup,
    SearchResults
}, {
    headerMode: 'none'
});


export default createAppContainer(Navigator);