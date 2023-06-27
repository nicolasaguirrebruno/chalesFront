import { useFavoriteStore } from "../hooks";

export const handleRemove = ({ id }) => {
  const { startDeleting } = useFavoriteStore();

  startDeleting({ id });

  return {
    startDeleting,
  };
};
