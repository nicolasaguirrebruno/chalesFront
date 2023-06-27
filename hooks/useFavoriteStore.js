import { useDispatch, useSelector } from "react-redux";
import { chalesApi } from "../api";
import { onAddFavorite, onLoadEvents, onRemoveFavorite } from "../store";

export const useFavoriteStore = () => {
  const { favorites } = useSelector((state) => state.favorites);
  const { user, status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startAdding = async ({
    id,
    nombre,
    categoria,
    caracteristicas,
    descripcion,
    precio,
    image,
  }) => {
    console.log(id);
    const { data } = await chalesApi.post("/events", {
      id,
      nombre,
      categoria,
      caracteristicas,
      descripcion,
      precio,
      image,
    });

    dispatch(
      onAddFavorite({
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

  const startDeleting = async (id) => {
    try {
      await chalesApi.delete(`/events/${id}`, {});
      dispatch(onRemoveFavorite({ id }));
    } catch (error) {
      console.log(error);
    }
  };

  const startLoadingFavorites = async () => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/events");
        const eventos = data.eventos;
        console.log(eventos);
        const userEvents = eventos.filter(
          (evento) => evento.user._id === user.uid
        );

        dispatch(onLoadEvents({ userEvents }));
      }
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startLoadinAllFavorites = async (id) => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/events");
        const events = data.eventos;
        const idEvents = events.filter((event) => event.id === id);

        if (idEvents.length > 0) {
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
    favorites,
    //* Methods
    startAdding,
    startDeleting,
    startLoadingFavorites,
    startLoadinAllFavorites,
  };
};
