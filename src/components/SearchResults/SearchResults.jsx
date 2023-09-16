import bookLibraryResults from "../../utilities/results-api";

export default async function searchResults(searchTerm, num="15") {
    return bookLibraryResults(searchTerm, num);
};