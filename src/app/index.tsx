import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  Alert,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { styles } from "@/styles/screens";
import { useCallback, useEffect, useState } from "react";
import { categories } from "@/utils/categories";
import { linkStorage } from "@/storage/link-storage";
import { LinkStorage } from "@/@types/link";

export default function Index() {
  const [category, setCategory] = useState<string>(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkStorage[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null);

  async function getLinks() {
    try {
      const data = await linkStorage.get();
      setLinks(data);
    } catch (err) {
      Alert.alert("Erro", "Não foi possível carregar os links.");
      console.error(err);
    }
  }

  function handleDetails(link: LinkStorage) {
    setSelectedLink(link);
    setShowModal(true);
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [])
  );

  useEffect(() => {
    if (links.length > 0) {
      const filtered = links.filter((link) => link.category === category);
      setFilteredLinks(filtered);
    }
  }, [category, links]);

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

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={filteredLinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Link</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowModal(false)}
              >
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{selectedLink?.name}</Text>

            <Text style={styles.modalUrl}>{selectedLink?.url}</Text>

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
