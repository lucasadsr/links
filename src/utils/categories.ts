import { MaterialIcons } from "@expo/vector-icons";

interface Category {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
  { id: "1", name: "Projeto", icon: "code" },
  { id: "2", name: "Site", icon: "language" },
  { id: "3", name: "Vídeo", icon: "movie" },
  { id: "4", name: "Artigo", icon: "newspaper" },
  { id: "5", name: "Curso", icon: "folder" },
  { id: "6", name: "Documento", icon: "content-paste" },
];
