import { useFavoriteStore } from "../hooks";

export const handleAdd = ({ id, nombre, categoria, precio, image }) => {
  const { startAdding } = useFavoriteStore();

  startAdding({ id, nombre, categoria, precio, image });

  return {
    startAdding,
  };
};
