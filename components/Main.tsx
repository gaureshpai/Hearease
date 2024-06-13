import React from 'react'
import Playlist from '@/components/Playlist'
import Playbar from '@/components/Playbar'
import Volumecontainer from './Volumecontainer'

const Main = () => {
  return (
    <div>
        <Playlist/>
        <Playbar/>
        <Volumecontainer/>

    </div>
  )
}

export default Main