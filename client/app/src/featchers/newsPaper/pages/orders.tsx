import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../global/components/Table";
import IconAndTytleBtn from "../../global/components/IconAndStyleBtn";


const Orders = () => {

  const [data, setData] = useState([]);
  const ordersColumns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  return (
    <div>
      <IconAndTytleBtn icon={<IoAddCircleOutline />} btnprops={{ type: 'submit' }} title="Add new order" to="/orsers/neworderform" />
      <Table columns={ordersColumns} data={data} />
    </div>
  )
}

export default Orders