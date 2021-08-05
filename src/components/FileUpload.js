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

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        >
        Upload File
          <input
            type="file"
            hidden
            onChange={handleUpload}
            />
      </Button>
      {!uploadingFile ? '' : <PicViewer data={uploadingFile}/>}
    </div>
  )
}
