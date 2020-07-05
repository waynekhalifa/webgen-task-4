import React from "react";
import axios from "axios";

export default (ComposedClass, authRoute) => {
  const AuthCheck = ({ history }) => {
    const [loading, setLoading] = React.useState(true);
    const [authUser, setAuthUser] = React.useState(null);

    React.useEffect(() => {
      if (authRoute !== null) {
        authenticateUser();
      } else {
        setLoading(false);
      }
    }, []);

    function authenticateUser() {
      if (authUser === null) {
        getSession();
      } else if (!authUser.isAuth) {
        getSession();
      } else {
        redriectAuthSuccess();
      }
    }

    function getSession() {
      axios
        .get("/api/auth/user")
        .then((res) => {
          const user = res.data.data;

          if (!user.isAuth) {
            redriectAuthFail();
          } else {
            setAuthUser(res.data.data);
            redriectAuthSuccess();
          }
        })
        .catch((err) => console.log(err));
    }

    function redriectAuthSuccess() {
      if (authRoute === false) {
        history.push("/profile");
      } else {
        setLoading(false);
      }
    }

    function redriectAuthFail() {
      if (authRoute === true) {
        history.push("/login");
      } else {
        setLoading(false);
      }
    }

    if (loading) return <p>Loading...</p>;

    return <ComposedClass user={authUser} />;
  };

  return AuthCheck;
};
