import { useRef, useState } from "react";
import styles from "./SubmitOrder.module.css";

const isInputValid = (inputValid) => inputValid.trim() !== "";

const SubmitOrder = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const isEnteredNameValid = isInputValid(enteredName);
    const isEnteredCityValid = isInputValid(enteredCity);
    const isEnteredAddressValid = isInputValid(enteredAddress);

    setFormValidity({
      name: isEnteredNameValid,
      city: isEnteredCityValid,
      address: isEnteredAddressValid,
    });

    const isFormValid = isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

    if (!isFormValid) {
      return;
    }
  }

  const nameInputClasses = `${styles.control} ${formValidity.name ? "" : styles.invalid}`;
  const addressInputClasses = `${styles.control} ${formValidity.address ? "" : styles.invalid}`;
  const cityInputClasses = `${styles.control} ${formValidity.city ? "" : styles.invalid}`;

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formValidity.name && <p>Name required</p>}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formValidity.city && <p>City required</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="address">Address</label>
        <input ref={addressInputRef} type="text" id="address" />
        {!formValidity.address && <p>Address required</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Submit</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default SubmitOrder;