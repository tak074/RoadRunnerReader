import React from 'react';
import style from 'styled-components';

const FullStory = style.div`
  max-height: 10em;
  max-width: 25em;
  overflow: auto;
  font-size: 2em;
  float: right;
  top: 10%;
  display: ${props => props.fullText? 'block': 'none'};
`;
const CurrWord = style.div`
  display:inline;
  color: white;
`;
const OtherWords = style.div`
  display:inline;
  color: #989898;
`;
// {display: full? 'block': 'none'}
const FullText = ({story, fullText, count}) => (
  <div>
    <FullStory fullText={fullText}>
      <OtherWords>{count === 0? story.join(' '): story.slice(0, count - 1).join(' ')}</OtherWords>
      <CurrWord>{count !== 0? ' ' + story[count - 1] + ' ' : ''}</CurrWord>
      <OtherWords>{count !== 0? story.slice(count).join(' ') : ''}</OtherWords>
    </FullStory>
  </div>
)

export default FullText;