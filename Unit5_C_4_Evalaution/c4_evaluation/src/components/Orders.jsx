import { showAllData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../Redux/actions";

export const Orders = () => {
 
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/orders").then(({ data }) => {
      setdata(data);
      dispatch(showAllData(data));
    });
  }, []);

  const alldata = useSelector((store) => {
    return store.data.data;
  });


  const changeStatus = (e) => {
    dispatch(filterData(e.target.value));
    const newdata = data.sort(function (a, b) {
      return a[e.target.value] > b[e.target.value]
        ? 1
        : a[e.target.value] < b[e.target.value]
        ? -1
        : 0;
    });
  
  };

  return (
    <div>
      <div>
        <div>
          <select
            className="controls"
            name="progress"
            id="progress"
            onChange={changeStatus}
          >
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>

          <tbody>
            {data.map((e) => {
              return (
                <tr className="orders-row">
                  <td className="id">{e.id}</td>
                  <td className="problem">{e.problem}</td>
                  <td className="owner">{e.owner}</td>
                  <td className="status">{e.status}</td>
                  <td className="cost">{e.cost}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    <select className="changeStatus" name="changeStatus">
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Not Accepted">Not Accepted</option>
                    </select>
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}
                    <button>Accept</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
