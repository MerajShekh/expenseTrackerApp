const convertBufferToBase64 = data => {
  let src = 'data:image/png;base64,';
  const base64String = window.btoa(
    String.fromCharCode(...new Uint8Array(data)),
  );
  src += base64String;
  return src;
};

export {convertBufferToBase64};
