import { BASE_URL } from "./base";

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
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

export const fetchSuggestions = async (term) => {
    try {
        const response = await fetch(`${BASE_URL}/products/suggestions?productName=${term}`);
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

export const fetchProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
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

export const searchProducts = async (term) => {
    try {
        const response = await fetch(`${BASE_URL}/products/search?productName=${term}`);
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

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE"
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

export const editProduct = async (id, name, quantity, description, price) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                description: description,
                price: price
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

export const createProduct = async (name, quantity, description, price, imageUrl, categoryId) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                description: description,
                price: price,
                images: [imageUrl],
                categoryId: categoryId
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