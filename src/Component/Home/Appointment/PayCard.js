import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PayCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br />{" "}
      <button type="submit" className="btn btn-primary" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default PayCard;
