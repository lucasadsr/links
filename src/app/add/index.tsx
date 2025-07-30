import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "@/styles/screens/add";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Add() {
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  function handleAdd() {
    if (!category) {
      return Alert.alert(
        "Selecione uma categoria",
        "Por favor, preencha todos os campos obrigatórios."
      );
    }
    if (!name.trim()) {
      return Alert.alert(
        "Preencha o nome",
        "Por favor, preencha todos os campos obrigatórios."
      );
    }
    if (!url.trim()) {
      return Alert.alert(
        "Preencha a URL",
        "Por favor, preencha todos os campos obrigatórios."
      );
    }
    console.log({ category, name, url });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </SafeAreaView>
  );
}
