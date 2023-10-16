import { useState } from "react";

const FormCreditCard = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="pt-2 sm:w-[380px] sm:mx-auto">
      <form>
        <div>
          <label className="title-credit-cards">Name on Card</label>
          <input
            className="form-credit-cards"
            type="text"
            name="name_Card"
            placeholder="Card Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="py-4">
          <label className="title-credit-cards">Card Number</label>
          <input
            className="form-credit-cards"
            type="text"
            name="card_number"
            placeholder="Card Number"
            required
            maxLength={19}
            value={cardNumber
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <div>
            <label className="title-credit-cards">Exp. Date</label>
            <div className="flex pr-2">
              <input
                className="form-credit-cards  mr-2"
                type="text"
                name="expiry_month"
                placeholder="12"
                required
                maxLength={2}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                className="form-credit-cards  "
                type="text"
                name="expiry_year"
                required
                placeholder="2023"
                maxLength={4}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="title-credit-cards">CVC</label>
            <input
              className="form-credit-cards block "
              type="text"
              name="cvc"
              required
              placeholder="cvc"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="pt-4">
        <button className="w-full uppercase text-sm font-bold py-2 px-3 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FormCreditCard;
