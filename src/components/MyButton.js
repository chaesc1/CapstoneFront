import React from "react"; // 리액트 호출
import { TouchableOpacity, Text } from "react-native"; // 리액트 네이티브에서 제공하는 컴포넌트 추가

const MyButton = ({text}) => {
    return (
        <TouchableOpacity
            style={{ 
            backgroundColor: '#1E2B22',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => alert('Click!!!')}
        >
            <Text style={{ color: 'white', fontSize: 30}}>{text}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;