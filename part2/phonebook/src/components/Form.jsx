const Form = ({
  newName,
  newPhone,
  saveNameFunc,
  newNameFunc,
  newPhoneFunc,
}) => {
  return (
    <form onSubmit={saveNameFunc}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={newNameFunc}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newPhone}
          onChange={newPhoneFunc}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
