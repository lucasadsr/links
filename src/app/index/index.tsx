import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { styles } from "@/styles/screens";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.navigate("/add")}
        >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4", "5"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Link
            name={`Link ${item}`}
            url={`https://example.com/${item}`}
            onDetails={() => console.log(`clicou ${item}`)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Link</Text>

              <TouchableOpacity activeOpacity={0.7}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>Rocketseat</Text>

            <Text style={styles.modalUrl}>http://rocketseat.com.br</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
