import { useParams } from "react-router-dom";
// import axios from "axios";
export const Userdetail = () => {
  const { id } = useParams();
  return <div>USERID:{id}</div>;
};
