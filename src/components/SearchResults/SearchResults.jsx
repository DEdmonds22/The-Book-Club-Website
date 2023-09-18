import bookLibraryResults from "../../utilities/results-service/results-api";

export default async function searchResults(searchTerm, num="15") {
    return bookLibraryResults(searchTerm, num);
};
