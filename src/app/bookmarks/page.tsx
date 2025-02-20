
export default function BookmarkPage()  {
    //distructuring assignment
    const { titles } = getData()
    
    return (
      <div>
          <h1>Bookmarks Home</h1>
          {
            titles.map((title,idx) => <h2 key={idx}>{title}</h2>)
          }
      </div>
    );
  }
  
  function getData()  {
    return {
        titles: ['Bookmark1', 'Bookmark2']
    }
  }