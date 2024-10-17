import { useState } from 'react';
import upiIconLogo from '../assets/upi_icon_logo.png'
import logo from '../assets/logo png.png'
import paymentService from "../services/service";

function Home() {

  const [value, setValue] = useState(1);

  const handleChange = event => {
    setValue(() => event.target.value);
  };

  const handleSubmit = () => {
    if(value === undefined || value === null || value <= 0) {
      alert("Please enter a valid number");
    }
    else
    {
      // const payload = {};
      // payload["amount"] = value.toString();
      // payload["customer_name"] = "Test";
      // payload["customer_email"] = "test@gmail.com";
      // payload["customer_mobile"] = "9999999999";

      // paymentService.pay({ payload }).then((res) => {
      //   console.log(res);
      //   window.location.href = res.data.payment_url;
      // });
        window.location.href = 'https://qrstuff.me/gateway/pay/89e89973abf4adf517551ad1f527ff49';
    }
  }

  return (
    <>
      <div>
        <a href="https://haodatech.in/" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>  
      <h1>Haoda Pay</h1>
      <div className="form__group field">
        <input 
          type="input" 
          className="form__field" 
          placeholder="Enter Amount" 
          name="Amount" 
          id='amount' 
          value={value}
          onChange={handleChange}
          required 
        />
        <label htmlFor="amount" className="form__label">enter amount</label>
        <button onClick={handleSubmit}>
          Pay
        </button>
      </div>
    </>
  )
}

export default Home
