import { createContext, useContext, useEffect, useState } from "react";
import StoreItems from '../data/StoreItems.json';
import Dailog from "../components/Dailog/Dailog";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ShoppingCartContext = createContext({});

const intialCartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const intialLoveItems = localStorage.getItem("love")
    ? JSON.parse(localStorage.getItem("love"))
    : [];

// eslint-disable-next-line react/prop-types
export default function ShoppinCartProvider({ children }) {

  const [cartItem, setCartItem] = useState(intialCartItems);

  const [loveItem, setLoveItem] = useState(intialLoveItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    localStorage.setItem("love", JSON.stringify(loveItem));
  }, [loveItem]);

  // دي بتشوف العنصر الي هضيفة موجود ولا لا ولو موجود هتجيب الكمية بتاعته
  const getItemsQuantity = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  // الفانكشن دي بتضيف عنصر في السلة
  const increaseCartQuantity = (id, quantity , image) => {
    setCartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity, image }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity, image};
          } else {
            return item;
          }
        });
      }
    });
    // setCartItem(preCart => [...preCart, {id, quantity, image}]);
  };

  const increaseLoveQuantity = (id) => {
    setLoveItem(preLove => [...preLove, {id}])
  };

  // والفانكشن دي بتمسح العنصر من السلة

  const removeItemFromCart = (id) => {
    setCartItem((currItem) => currItem.filter((item) => item.id !== id));
  };

  const removeLoveFromCart = (id) => {
    setLoveItem(currItem => currItem.filter(item => item.id !== id));
  };

  // دي بتعرف عندك كام عنصر داخل السله
  const cartQuantity = cartItem.length;

  const LoveQuantity = loveItem.length;

  // بترجع ليك الtotal fjhu hgukhwv
  const supTotal = cartItem.reduce((total, cart) => {
    const item = StoreItems.find(
      (i) => i.id === cart.id
    );
    return total + (item?.price || 0) * cart.quantity ;
  }, 0);

  const total = supTotal + 50;

  // الكود الخاص بالdailog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // search data 
  const [search, setSearch] = useState("");

  // ده بتاع الفايربيز الي هو لو يوزر يعمل كذا 
  const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
          toast.success("User is not logged in", {
            position: "top-center",
          });
        }
      });
    };
    useEffect(() => {
      fetchUserData();
    }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        getItemsQuantity,
        increaseCartQuantity,
        removeItemFromCart,
        cartQuantity,
        loveItem,
        increaseLoveQuantity,
        removeLoveFromCart,
        LoveQuantity,
        setLoveItem,
        supTotal,
        total,
        open,
        handleClickOpen,
        handleClose,
        search,
        setSearch,
        userDetails,
      }}
    >
      {children}
      <Dailog />
    </ShoppingCartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingcart = () => {
  return useContext(ShoppingCartContext);
};
