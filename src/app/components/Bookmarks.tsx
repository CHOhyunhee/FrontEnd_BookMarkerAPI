import { BookmarkType } from '@/types';
import React from 'react';
import Bookmark from '@/app/components/Bookmark';

type Props = {
    bookmarks: BookmarkType[]
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
            // key: virtual dom (react내부적으로 화면 rendering) 때문에..
            // 바뀐 부분만 빠르게 update...
            bookmarks.map(bookmark => 
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            )
            }            
        </div>
    );
};

export default Bookmarks;