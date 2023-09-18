const BASE_URL = "/api/results";

export default async function bookLibraryResults(searchTerm, num="15") {
    try {
        const response = await fetch(`${BASE_URL}?search=${searchTerm}&num=${num}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching results", error);
        throw new Error("Error fetching results");
    }
};