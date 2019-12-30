import React from 'react';
import Screens from './Components/Screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import Reducers from './Redux/Reducers';
import thunk from 'redux-thunk';
import OneSignal from 'react-native-onesignal';

class App extends React.Component {
    constructor(props) {
        super(props);
        OneSignal.init("eb3cfbbe-c84c-48fa-bb69-1fae071a4387");
    
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
      }
    
      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device);
      }
    
    render() {
        return (
            <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
                <Screens />
            </Provider>
        )
    }
}

export default App;