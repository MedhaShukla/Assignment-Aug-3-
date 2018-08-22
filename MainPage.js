import React, { Component } from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Text } from 'react-native';
import Front from './front';
import drawer from './drawer';
import demo from './demo';
import Profile from './Profile';
import TabScene from './TabScene';
import Tab1 from './tab1';
import Tab2 from './tab1';
import Tab3 from './tab1';
import Edit from './edit';

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>

    )
}

export default class MainPage extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Drawer
                        contentComponent={drawer}>
                        
                        <Scene key="Front"
                            component={Front}
                        />
                        <Scene key="demo"
                            component={demo}
                        />
                        <Scene key="Profile"
                            component={Profile}
                        />
                       { /*<Scene key="TabScene"
                            component={TabScene}
                        />*/}
                         <Scene key="Edit"
                            component={Edit} />
                        <Scene key="tabbar"
                            tabs={true}
                            avtiveTintColor="#FFFFFF"
                            activeBackgroundColor='brown'
                        >
                            <Scene key="Tab1" icon={TabIcon}>
                                <Scene key="Tab1"
                                    component={Tab1} />
                            </Scene>
                            <Scene key="Tab2" icon={TabIcon}>
                                <Scene key="Tab2"
                                    component={Tab2} /></Scene>
                            <Scene key="Tab3" icon={TabIcon}>
                                <Scene key="Tab3"
                                    component={Tab3} />
                                </Scene>
                            </Scene>
                           

                        
                    </Drawer>
                </Scene>
            </Router >
        )
    }
}
