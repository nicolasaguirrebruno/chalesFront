import { useDispatch, useSelector } from "react-redux";
import { chalesApi } from "../api";
import { onAddWish, onLoadWishes, onRemoveWish } from "../store";

export const useWishesStore = () => {
  const { wishes } = useSelector((state) => state.wishes);
  const { user, status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startAddingWishes = async ({
    id,
    nombre,
    categoria,
    caracteristicas,
    descripcion,
    precio,
    image,
  }) => {
    const { data } = await chalesApi.post("/favorites", {
      id,
      nombre,
      categoria,
      caracteristicas,
      descripcion,
      precio,
      image,
    });

    dispatch(
      onAddWish({
        id,
        nombre,
        categoria,
        caracteristicas,
        descripcion,
        precio,
        image,

        user,
      })
    );
  };

  const startDeletingWishes = async (id) => {
    try {
      await chalesApi.delete(`/favorites/${id}`, {});
      dispatch(onRemoveWish({ id }));
    } catch (error) {}
  };

  const startLoadingWishes = async () => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/favorites");
        const wishes = data.favoritos;
        console.log(wishes);
        const userWishes = wishes.filter((wish) => wish.user._id === user.uid);
        console.log(userWishes);
        dispatch(onLoadWishes({ userWishes }));
      }
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startLoadinAllWishes = async (id) => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/favorites");
        const wishes = data.favoritos;
        const idWishes = wishes.filter((wish) => wish.id === id);

        if (idWishes.length > 0) {
          console.log("hola");
          return true;
        } else {
          console.log("adios");
          return false;
        }
      }
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };
  return {
    //* Properties
    wishes,
    //* Methods
    startAddingWishes,
    startDeletingWishes,
    startLoadingWishes,
    startLoadinAllWishes,
  };
};
