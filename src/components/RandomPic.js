import PicViewer from './PicViewer'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export default function RandomPic() {
  const [ randomPic, setRandomPic ] = useState()
  const [ randomPicSteam, setRandomPicStream ] = useState()

  function fetchRandomImg() {
    fetch('https://picsum.photos/500')
    .then(function (res) {
      setRandomPic(res.url)
      return res
    })
    .then(response => response.body)
    .then(rs => {
      const reader = rs.getReader();
      return new ReadableStream({
        async start(controller) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            controller.enqueue(value);
          }
          controller.close();
          reader.releaseLock();
        }
      })
    })
    .then(rs => new Response(rs))
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => setRandomPicStream(url))
  }

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        onClick={fetchRandomImg}
      >
        Get Random Pic
      </Button>
      <PicViewer data={randomPic}/>
      <PicViewer data={randomPicSteam}/>
    </div>
  )
}
