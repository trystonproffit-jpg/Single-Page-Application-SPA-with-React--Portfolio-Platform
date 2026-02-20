import { TextField } from "@mui/material";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <TextField
            fullWidth
            label="Search Projects"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;