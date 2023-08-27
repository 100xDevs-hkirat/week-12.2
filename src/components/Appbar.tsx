import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div>
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            Logout
        </div>
    </div>
}