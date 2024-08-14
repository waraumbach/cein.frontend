import { BASE_URL } from "./base";

export const getPaymentIntent = async (amount) => {
  try {
    const response = await fetch(`${BASE_URL}/api/payment`, {
      method: "POST",
      body: JSON.stringify({
        amount: amount
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
};
