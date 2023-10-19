import { useRef } from "react";
import styles from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
  }

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Address</label>
        <input ref={addressInputRef} type="text" id="address" />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Submit</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default SubmitOrder;