import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "links-storage";

interface LinkStorage {
  id: string;
  name: string;
  url: string;
  category: string;
}

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];
  return response;
}

async function save(newLink: LinkStorage): Promise<void> {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);
    await AsyncStorage.setItem(LINK_STORAGE_KEY, updated);
  } catch (err) {
    throw err;
  }
}

export const LinkStorage = {
  get,
  save,
};
