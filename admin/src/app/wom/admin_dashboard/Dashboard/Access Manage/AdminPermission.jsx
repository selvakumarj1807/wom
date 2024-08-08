import React from "react";
import { Checkbox, Table } from "antd";

const columns = [
  {
    title: "Roles",
    dataIndex: "role",
    id: "role",
  },

  {
    title: "Use",
    dataIndex: "use",
    id: "use",
  },
  {
    title: "Create",
    dataIndex: "create",
    id: "create",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    id: "edit",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    id: "delete",
  },
  {
    title: "File Sharing",
    dataIndex: "share",
    id: "share",
  },
  {
    title: "Download File",
    dataIndex: "download",
    id: "download",
  },
  {
    title: "Forward File",
    dataIndex: "forward",
    id: "forward",
  },
];
const data = [
  {
    role: "Employee",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
  {
    role: "Receptionist",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
  {
    role: "Supervisor",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
  {
    role: "Manager",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
  {
    role: "Manager",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
  {
    role: "General Manager",
    use: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    create: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    edit: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    delete: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    share: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    download: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
    forward: <Checkbox style={{ border: "2px solid #002D62", borderRadius: '5px', height: '18px' }} />,
  },
];
const AdminPermission = () => {
  return (
    <div id="main" className="main">
      <div>
        <br /> <br /> <br />
        <hr />
        <h3 style={{ textAlign: "center", fontSize: "16px" }}>Permission</h3>
        <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default AdminPermission;
