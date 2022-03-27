var library = [ 
    {
        author: 'Bill Gates',
        title:'The Road Ahead',
        readingStatus: true
    },
    {
        author:  'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var Book = "'" + library[i].title + "'" + ' by ' + library[i].author + ":";
    if (library[i].readingStatus) {
      console.log(Book + " Already read ");
    } else
    {
     console.log(Book + " You need to read " );
    }
   }
   