import { BASE_URL } from "./base";

export const createOrder = async (products, token, address) => {
    try {
        const response = await fetch(`${BASE_URL}/api/order`, {
            method: "POST",
            body: JSON.stringify({
                products: products,
                token: token,
                address: address
              }),
              headers: {
                "Content-Type": "application/json",
              }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const fetchOrders = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/order/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};