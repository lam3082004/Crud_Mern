import React, { Fragment, useState } from "react";
import MaterialTable from "material-table";
import CustomDatePicker from "./customDatePicker";

const originalData = [
  {
    id: "client 1",
    name: "Anna",
    date: new Date("2021-03-01T20:11:54")
  },
  {
    id: "client 2",
    name: "Tom",
    date: new Date("2020-03-30T11:01:54")
  },
  {
    id: "client 3",
    name: "Deb",
    date: new Date("2021-02-28T21:11:54")
  }
];

export default function CustomEditComponent(props) {
  const [data, setData] = useState(originalData);

  const tableColumns = [
    {
      field: "name",
      title: "Name"
    },
    {
      title: "Date",
      field: "date",
      type: "date",
      dateSetting: { locale: "en-GB" },
      filterComponent: (props) => <CustomDatePicker {...props} />
    }
  ];

  return (
    <Fragment>
      <MaterialTable
        columns={tableColumns}
        data={data}
        // title="Material Table - Custom Filter Component"
        options={{ search: false, filtering: true }}
      />
    </Fragment>
  );
}
