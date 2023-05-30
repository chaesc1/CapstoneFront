import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function CounselingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 300,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 50,
        }}
      >
        {/* 퀴즈 */}
        <View
          style={{
            width: "65%",
            height: 300,
            backgroundColor: "#FDFBEC",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingVertical: 30,

            borderRadius: 20,
            // height: 300,

            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <Text
              style={{
                backgroundColor: "#FF6D60",
                justifyContent: "center",
                alignItems: "center",
                height: 130,
                width: 130,
                display: "flex",
                borderRadius: 10,
                padding: 20,
                fontWeight: 600,
                color: "white",
                fontSize: 20,
              }}
            >
              퀴즈
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#FDFBEC",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: "100%",
              borderRadius: 10,
              padding: 20,
              fontWeight: "600",
              color: "black",
              fontSize: 15,
            }}
          >
            단어 맞추기를 할 수 있는 퀴즈입니다.
          </Text>
        </View>

        {/* 상담 */}
        <View
          style={{
            width: "65%",
            height: 300,
            backgroundColor: "#FDFBEC",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingVertical: 30,

            borderRadius: 20,
            // height: 300,

            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Counseling")}>
            <Text
              style={{
                backgroundColor: "#FF6D60",
                justifyContent: "center",
                alignItems: "center",
                height: 130,
                width: 130,
                display: "flex",
                borderRadius: 10,
                padding: 20,
                fontWeight: 600,
                color: "white",
                fontSize: 20,
              }}
            >
              상담
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#FDFBEC",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: "100%",
              borderRadius: 10,
              padding: 20,
              fontWeight: "600",
              color: "black",
              fontSize: 15,
            }}
          >
            고민을 털어놓을 수 있어요.
          </Text>
        </View>
      </View>

      {/* 둘째 줄 */}
      <View
        style={{
          width: 300,
          //alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 50,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            width: "65%",
            height: 300,
            backgroundColor: "#FDFBEC",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingVertical: 30,

            borderRadius: 20,
            // height: 300,

            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <Text
              style={{
                backgroundColor: "#312A13",
                justifyContent: "center",
                alignItems: "center",
                height: 130,
                width: 130,
                display: "flex",
                borderRadius: 10,
                padding: 20,
                fontWeight: 600,
                color: "white",
                fontSize: 20,
              }}
            >
              스무고개
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#FDFBEC",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: "100%",
              borderRadius: 10,
              padding: 20,
              fontWeight: "600",
              color: "black",
              fontSize: 15,
            }}
          >
            해당 기능을 이용하려면 회원가입이 필요합니다.
          </Text>
        </View>

        <View
          style={{
            width: "65%",
            height: 300,
            backgroundColor: "#FDFBEC",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingVertical: 30,

            borderRadius: 20,
            // height: 300,

            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <Text
              style={{
                backgroundColor: "#312A13",
                justifyContent: "center",
                alignItems: "center",
                height: 130,
                width: 130,
                display: "flex",
                borderRadius: 10,
                padding: 20,
                fontWeight: 600,
                color: "white",
                fontSize: 20,
              }}
            >
              끝말잇기
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#FDFBEC",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: "100%",
              borderRadius: 10,
              padding: 20,
              fontWeight: "600",
              color: "black",
              fontSize: 15,
            }}
          >
            해당 기능을 이용하려면 회원가입이 필요합니다.
          </Text>
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
    justifyContent: "center",
    //gap: 24,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
