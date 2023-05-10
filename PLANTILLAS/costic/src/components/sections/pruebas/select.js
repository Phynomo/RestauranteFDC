import React, { useState } from 'react';

function App() {
  const apikey = '81a91816c209f6d64dfd56aa803647e5';
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const base64Image = image.split(',')[1]; // obtener la cadena Base64 sin el prefijo "data:image/png;base64,"
    const url = 'https://api.imgbb.com/1/upload?key=' + apikey;
    const body = new FormData();
    body.append('image', base64Image);

    fetch(url, {
      method: 'POST',
      body: body
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al enviar la imagen');
        }
        return response.json();
      })
      .then(data => {
        console.log('Imagen enviada con éxito', data);
      })
      .catch(error => {
        console.log('Error al enviar la imagen: ', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="uploaded image" />}
        <button type="submit">Enviar imagen</button>
      </form>
    </div>
  );
}

export default App;
