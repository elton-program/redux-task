import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Userlar } from "./redux/userApp";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector((state) => state.users);

  console.log(data, isError, isLoading);

  useEffect(() => {
    dispatch(Userlar());
  }, []);

  return (
    <div className="div">
      {isLoading ? <h1>Loading...</h1> : null}
      {isError ? <h1>{isError.message}</h1> : null}
      {data?.map((item) => (
        <div className="minidiv" key={item.id}>
          <h2>User {item.id}</h2>
          <h4 className="h1">Firstname: {item.firstname}</h4>
          <h4 className="h1">Lastname: {item.lastname}</h4>
          <h4 className="h1">Username: {item.username}</h4>
          <h6 className="h1">Email: {item.email}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
