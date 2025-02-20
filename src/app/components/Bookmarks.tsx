import React from 'react';
import { BookmarksResponse } from '@/types';
import Bookmark from '@/app/components/Bookmark';
import Pagination from '@/app/components/Pagination';

type Props = {
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <Pagination bookmarks={bookmarks} />
            {
            // key: virtual dom (react내부적으로 화면 rendering) 때문에..
            // 바뀐 부분만 빠르게 update...
            bookmarks.data.map(bookmark => 
                <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }            
        </div>
    );
};

export default Bookmarks;