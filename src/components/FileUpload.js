import PicViewer from './PicViewer'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export default function FileUpload() {
  const [ uploadingFile, setUploadFile ] = useState()

  function handleUpload(e) {
    const file = e.target.files[0]
    console.log(file)
    const fileBlob = URL.createObjectURL(file)
    setUploadFile(fileBlob)
  }

  function handleFileClear() {
    setUploadFile('')
  }

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        >
        Upload Picture
          <input
            type="file"
            hidden
            onChange={handleUpload}
            />
      </Button>
      <Button
        variant="contained"
        component="label"
        onClick={handleFileClear}
        >
        Clear Picture
      </Button>
      <div>
        <PicViewer data={uploadingFile}/>
      </div>
    </div>
  )
}
