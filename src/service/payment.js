import { BASE_URL } from "./base";

export const getPaymentIntent = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/payment`, {
      method: "POST",
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
