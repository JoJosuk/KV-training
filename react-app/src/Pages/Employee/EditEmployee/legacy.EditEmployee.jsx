import Form from "../../../components/Form";
const EditEmployee = ({ values, handleEdit }) => {
  const statusOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "Active",
      content: "Active",
    },
    {
      value: "Inactive",
      content: "Inactive",
    },
    {
      value: "Probation",
      content: "Probation",
    },
  ];

  const croleOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "SDE",
      content: "SDE",
    },
    {
      value: "SAE",
      content: "SAE",
    },
  ];

  const Fields = [
    {
      id: "empname",
      inputPlaceholder: "Employee name",
      labelContent: "Employee name",
      name: "Employee name",
      type: "text",
    },
    {
      id: "eid",
      inputPlaceholder: "Employee ID",
      labelContent: "Employee ID",
      name: "Employee ID",
      type: "text",
    },
    {
      id: "jdate",
      inputPlaceholder: "Joining Date",
      labelContent: "Joining Date",
      name: "Joining Date",
      type: "text",
    },
    {
      id: "crole",
      labelContent: "Choose Role",
      name: "Choose Role",
      optionList: croleOptionList,
    },
    {
      id: "status",
      labelContent: "Status",
      name: "Status",
      optionList: statusOptionList,
    },
    {
      id: "exp",
      inputPlaceholder: "Experience",
      labelContent: "Experience",
      name: "Experience",
      type: "text",
    },
    {
      id: "address",
      inputPlaceholder: "Address",
      labelContent: "Address",
      name: "Address",
      type: "text",
    },
  ];
  //   const editFields = () => {
  //     return Fields.map((field) => {});
  //   };
  console.log("in modal", values);
  return (
    <div className="modal">
      <section className="sec2">
        <Form Fields={Fields} values={values} handleEdit={handleEdit} />
      </section>
    </div>
  );
};
export default EditEmployee;
