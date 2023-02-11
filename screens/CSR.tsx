import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CSR = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <ScrollView>
        <Text  style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          placerat eu dui sit amet tincidunt. Etiam a volutpat leo. Nulla
          facilisi. Curabitur lacus nisl, lobortis non felis sit amet, molestie
          volutpat nunc. Morbi tellus purus, vulputate nec laoreet a, malesuada
          vitae metus. Curabitur gravida sapien ultrices tellus finibus maximus
          sed non ante. Sed blandit at nibh sit amet tincidunt. Morbi facilisis,
          est eget gravida lobortis, massa ligula pharetra dolor, at vestibulum
          nulla velit at ligula. Pellentesque lacinia condimentum arcu, sed
          faucibus lorem maximus a. Suspendisse potenti. Etiam quis tempor
          turpis, mattis iaculis nisi. Phasellus viverra orci a luctus
          dignissim. Suspendisse congue enim sit amet leo maximus, non bibendum
          metus dapibus. Aenean in quam orci. Curabitur pretium vel lectus sit
          amet dignissim. Praesent in risus ex. Nunc condimentum nisl sit amet
          semper posuere. Morbi euismod, nunc ac imperdiet gravida, risus elit
          consectetur nisl, viverra imperdiet metus tellus non eros. Vivamus
          porta arcu leo, et gravida tellus vestibulum sit amet. Sed vitae
          porttitor urna. Ut sed magna sapien. Curabitur eget turpis vitae ex
          fringilla gravida sed id mauris. Morbi ultrices, purus sit amet
          ultricies rhoncus, enim est tristique turpis, quis vulputate urna quam
          id massa. In id dolor quis turpis blandit sodales. Sed aliquet
          scelerisque eros eu cursus. Donec fermentum suscipit venenatis. Nunc
          at nulla lectus. Vestibulum sodales interdum nisi, ut dictum purus.
          Maecenas id aliquet sapien. Vivamus at blandit tortor. Sed fermentum
          sit amet ante vel viverra. Proin bibendum neque et odio gravida
          dapibus vitae et libero. Nam leo leo, suscipit at urna eget, rhoncus
          aliquet ante. Fusce dolor turpis, mollis quis feugiat quis,
          condimentum nec eros. Vivamus auctor purus diam, quis elementum ante
          efficitur sed. Ut convallis posuere odio et mollis. Nullam feugiat
          libero et nibh semper aliquet. Aenean varius feugiat nulla, sit amet
          egestas leo vulputate vitae. Suspendisse nec elit arcu. Phasellus
          finibus faucibus arcu, in vehicula metus finibus sed. Donec blandit
          mauris in velit lobortis, quis facilisis tortor pretium. Nullam non
          eros ac orci tincidunt aliquam ut sed tortor. Curabitur tincidunt eros
          eget dui porttitor, at pellentesque est iaculis. Phasellus convallis
          suscipit massa, a vehicula tellus facilisis vel. Phasellus vitae
          ultrices odio. Fusce sagittis erat ac augue aliquam, ac aliquet urna
          mollis. Duis convallis libero at nibh dapibus vestibulum at id arcu.
          Cras eleifend tincidunt diam, vitae congue arcu vulputate in. Nunc non
          ex scelerisque, volutpat quam id, ornare nulla. Donec consectetur
          congue sem gravida euismod. Duis eu magna in massa rutrum commodo sit
          amet at libero. Maecenas hendrerit convallis dui.
        </Text>
      </ScrollView>
    </View>
  );
};

export default CSR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 36,
    paddingVertical: 35,
    //   padding:50
  },
  title: {
    // fontFamily: "Work Sans",
    fontSize: 24,
    lineHeight: 28.15,
    fontWeight: "600",
    marginBottom:35
  },
  body:{
    // fontFamily: "Work Sans",
    fontSize: 16,
    lineHeight: 18.7,
    fontWeight: "600",
  }
});
