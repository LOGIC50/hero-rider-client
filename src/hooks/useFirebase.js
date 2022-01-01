import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  //   GoogleAuthProvider,
  //   signInWithPopup,
  updateProfile,
  //   getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeFirebase from "../Firebase/firebase.init";

initailizeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  //   const [admin, setAdmin] = useState(false);
  //   const [token, setToken] = useState("");

  const auth = getAuth();
  //   const googleProvider = new GoogleAuthProvider();

  const registerUser = (loginData, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = {
          email: loginData.email,
          displayName: loginData.name,
          age: loginData.age,
          address: loginData.address,
          phone: loginData.phone,
          image: loginData.image,
          image2: loginData.image2,
          image3: loginData.image3,
          carName: loginData.carName,
          carNamePlate: loginData.carNamePlate,
          carModel: loginData.carModel,
          vehicleType: loginData.vehicleType,
        };
        setUser(newUser);
        // save user to database
        saveUser(
          loginData.email,
          loginData.name,
          loginData.age,
          loginData.address,
          loginData.phone,
          loginData.image,
          loginData.image2,
          loginData.image3,
          loginData.carName,
          loginData.carModel,
          loginData.carNamePlate,
          loginData.vehicleType,
          "POST"
        );
        updateProfile(auth.currentUser, {
          displayName: loginData.name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   const signInWithGoogle = (location, history) => {
  //     setIsLoading(true);
  //     signInWithPopup(auth, googleProvider)
  //       .then((result) => {
  //         const destination = location?.state?.from || "/";
  //         history.replace(destination);
  //         const user = result.user;
  //         saveUser(user.email, user.displayName, "PUT");
  //         setAuthError("");
  //       })
  //       .catch((error) => {
  //         setAuthError(error.message);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  // observe user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getIdToken(user).then((idToken) => {
        //   setToken(idToken);
        // });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   useEffect(() => {
  //     fetch(`https://murmuring-depths-55393.herokuapp.com/users/${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setAdmin(data.admin));
  //   }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (
    email,
    displayName,
    age,
    address,
    phone,
    image,
    image2,
    image3,
    carName,
    carModel,
    carNamePlate,
    vehicleType,
    method
  ) => {
    const user = {
      email,
      displayName,
      age,
      address,
      phone,
      image,
      image2,
      image3,
      carName,
      carModel,
      carNamePlate,
      vehicleType,
    };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  console.log(registerUser.loginData);

  return {
    user,
    // admin,
    registerUser,
    loginUser,
    logout,
    // token,
    isLoading,
    authError,
    // signInWithGoogle,
  };
};

export default useFirebase;
