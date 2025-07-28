import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.green[300],
    fontSize: 22,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 12,
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
  },
  linksContent: {
    gap: 20,
    paddingTop: 8,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
});
