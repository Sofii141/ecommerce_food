/*resive como parametro el archivo imagen cargado por el usuario 
y devuelve una promesa que resuelve con la representación de la imagen en formato Base64.
*/
export function ImagetoBase64(file) {
  const readerImage = new FileReader();
  readerImage.readAsDataURL(file);

  const data = new Promise((res, rej) => {
    readerImage.onload = () => res(readerImage.result);
    readerImage.onerror = err => rej(err);
  });

  return data;
}