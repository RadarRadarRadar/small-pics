import styled from 'styled-components'

const PicViewerStyles = styled.img`
  max-width: 50vw;
  background-size: auto;
`

export default function MediaCard(img) {
  // console.log(img.data);

  return (
    <div>
      {img.data ? <PicViewerStyles src={img.data} alt='the thing' /> : 'No Image Yet' }
    </div>
  );
}
