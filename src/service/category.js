import { BASE_URL } from "./base";

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/category`);
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