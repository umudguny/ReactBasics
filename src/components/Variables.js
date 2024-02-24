const text1 = "Hello";
const text2 = "World";
const reverse = true;
function Variables() {
  return (
    <>
      {/* {text1} {text2} */}
      {/* {`Title:  ${text1}  and ${text2}`} */}

      {/* {!reverse && `Title:  ${text1}  and ${text2}`} */}
      {/* {reverse && `Title:  ${text2}  and ${text1}`} */}
      {reverse ? `${text1} ${text2}` : `${text2} ${text1}`}
    </>
  );
}
export default Variable;
