import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

// function WebviewContainer(): JSX.Element {
//     return (
//         <View>
//             <WebView source={{ uri: 'https://www.baidu.com' }} />
//         </View>
//     );
// }

class WebviewContainer extends React.Component {
    constructor(props: Record<any,any>) { 
        super(props);
    }

    render(): React.ReactNode {
        return (
            <View>
                <WebView source={{ uri: 'https://www.baidu.com' }} />
            </View>
        );
    }
}

export default WebviewContainer;