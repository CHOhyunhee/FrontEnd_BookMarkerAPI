import { BookmarksResponse } from "@/types"
import axios from "axios"

const API_BASE_URL = 'http://localhost:8080'

//ecmascript7 : async-await
export async function getAllBookmarks(page: number): Promise<BookmarksResponse> {
    const API_URL = `${API_BASE_URL}/api/bookmarks?page=${page}`
    console.log(`url = ${API_URL}`)
    
    const res = await axios.get<BookmarksResponse>(API_URL)
    
    return res.data
}