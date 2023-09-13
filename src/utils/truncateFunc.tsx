
const TruncateText = (text : string, maxLength: number) => {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{truncatedText}</div>;
} 

export default TruncateText;