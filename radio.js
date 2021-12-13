
  const radio = {
    stations:[
        {
            name: 'k104',
            songs:[ {
                    title: 'Roar',
                    artist: 'Ketty perry'
                     },
                    {
                    title: 'Dance Monkey',
                    artist: 'Tines and I'
                    }
                ]
        },

        {
            name: '97.9 the beat',
            songs:[ 
                    {
                    title: 'music',
                    artist: 'artist'
                    }
                  ]
        },
        
        {
            name: '101.9 FunAsia',
            songs:[
                    {
                    title: 'Jaadu theri',
                    artist: 'Rahman'
                    }
                  ]
        }

    ],
    random(min,max) {
        const radioIndex = Math.floor(Math.random() * radio.stations.length)
        const songsIndex =  Math.floor(Math.random() * radio.stations[radioIndex].songs.length)
        return radio.stations[radioIndex].songs[songsIndex];
        
    }
} 

const playSong = radio.random(min,max);
console.log("Now Playing: " + playSong.title +  " by "  + playSong.artist) ;
