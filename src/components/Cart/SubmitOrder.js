import style from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const confirmOrderHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={confirmOrderHandler}>
      <div className={style.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={style.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={style.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <button>Submit</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  )
}

export default SubmitOrder;