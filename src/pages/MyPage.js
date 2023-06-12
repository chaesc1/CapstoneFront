import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function MyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 500,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 50,
        }}
      >
        {/* 마이페이지 헤더  */}
        <View
          style={{
            width: "100%",
            height: 800,
            backgroundColor: "#FDFBEC",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingVertical: 30,

            borderRadius: 10,

            elevation: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#FDFBEC",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              paddingVertical: 30,

              borderRadius: 10,

              elevation: 4,
            }}
          >
            <Image
              style={styles.goldPicture}
              source={require("../../assets/gold.png")}
            />
            <View
              style={{
                width: "50%",
                height: 200,
                backgroundColor: "#FDFBEC",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                paddingVertical: 30,

                borderRadius: 20,

                elevation: 4,
              }}
            >
              <Text
                style={{
                  //backgroundColor: "#FDFBEC",
                  justifyContent: "center",
                  alignItems: "center",
                  //height: 100,
                  width: "60%",
                  borderRadius: 10,
                  padding: 20,
                  fontWeight: "600",
                  color: "black",
                  fontSize: 15,
                }}
              >
                이름: 시후
              </Text>
              <Text
                style={{
                  //backgroundColor: "#FDFBEC",
                  justifyContent: "center",
                  alignItems: "center",
                  //height: 100,
                  width: "60%",
                  borderRadius: 10,
                  padding: 20,
                  fontWeight: "600",
                  color: "black",
                  fontSize: 15,
                }}
              >
                나이: 7세
              </Text>
            </View>
          </View>
          {/* 토글?창 */}
          <View
            style={{
              width: "100%",
              height: 600,
              backgroundColor: "#FDFBEC",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              paddingVertical: 30,

              borderRadius: 10,

              elevation: 4,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    alignItems: "center",
    justifyContent: "space-around",
    //gap: 24,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  goldPicture: {
    width: 100,
    height: 100,
  },
});
