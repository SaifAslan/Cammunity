import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  navigation: any;
};
interface flatListDataIF {
  title: string;
  imageURL: string;
  id: string;
}
const Index: React.FC<Props> = ({ navigation }) => {
  const flatListData: flatListDataIF[] = [
    {
      id: "0",
      imageURL: require("../assets/category-images/camera.jpg"),
      title: "Hybrid Cameras",
    },
    {
      id: "1",
      imageURL: require("../assets/category-images/lens.webp"),
      title: "Cinema Lenses",
    },
    {
      id: "2",
      imageURL: require("../assets/category-images/light.jpg"),
      title: "Lights",
    },
    {
      id: "3",
      imageURL: require("../assets/category-images/mic.jpg"),
      title: "Microphones",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/shutterstock_1247570584-1.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Equipment</Text>
          <Text style={styles.paragraphText}>
            rent what you need, lent what you don't
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <TextInput
            placeholderTextColor="#000000"
            style={styles.formInput}
            placeholder="Product Name"
          ></TextInput>
          <TextInput
            placeholderTextColor="#000000"
            style={styles.formInput}
            placeholder="London, UK"
          ></TextInput>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => navigation.navigate("CSR")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.buttonText}>Search</Text>
              <Image source={require("../assets/Union.png")} />
            </Pressable>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryTitleText}>brows by category</Text>
            <Text style={styles.categorySubTitleText}>
              find equipment locally and affordably
            </Text>
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              keyExtractor={(item, index) => {
                return item.id;
              }}
              horizontal={true}
              data={flatListData}
              renderItem={(itemData) => {
                return (
                  <View style={styles.categoryItemContainer}>
                    <Image
                      style={styles.categoryImage}
                      source={itemData.item.imageURL}
                    />
                    <Text style={styles.categoryImageTitle}>
                      {itemData.item.title}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    //   padding:50
  },
  image: {
    width: "100%",
    flex: 1,
    tintColor:'rgba(255, 126, 0, 0.2)'
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginStart: 52,
  },
  titleText: {
    // fontFamily: "Work Sans",
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "600",
    textTransform: "capitalize",
    marginBottom: 14,
    lineHeight: 46.92,
  },
  paragraphText: {
    // fontFamily: "Work Sans",
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
    textTransform: "capitalize",
    width: 200,
    lineHeight: 21.11,
  },
  bottomContainer: {
    flex: 2,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginBottom: 35,
  },
  formInput: {
    // fontFamily: "Work Sans",
    textTransform: "capitalize",

    borderRadius: 4,
    borderColor: "#D5D8DE",
    borderWidth: 1,
    width: 200,
    height: 30,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginBottom: 18,
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 11.73,
  },
  buttonContainer: {
    backgroundColor: "#111111",
    width: 96,
    height: 30,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    // fontFamily: "Work Sans",
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    textTransform: "capitalize",
    marginEnd: 6.8,
  },
  categoryContainer: {
    flex: 1.5,
    paddingHorizontal: 14,
    width: "100%",
  },
  categoryTextContainer: {
    width: "100%",
    // justifyContent: "flex-start",
  },
  categoryTitleText: {
    // fontFamily: "Work Sans",
    width: "100%",
    fontSize: 24,
    color: "#000000",
    fontWeight: "500",
    textTransform: "capitalize",
    marginBottom: 11,
    lineHeight: 28.15,
  },
  categorySubTitleText: {
    // fontFamily: "Work Sans",
    fontSize: 12,
    color: "#000000",
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 14.08,
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  categoryItemContainer: {
    margin: 20,
  },
  categoryImage: {
    width: 120,
    height: 120,
    marginBottom: 17.5,
  },
  categoryImageTitle: {
    // fontFamily: "Work Sans",
    fontWeight: "600",
    fontSize: 12,
  },
});
