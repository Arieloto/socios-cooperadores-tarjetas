// Cargar el archivo JSON
fetch('listasocios2024.json')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor donde se van a colocar las tarjetas
    const cardsContainer = document.getElementById('cards-container');

    // Iterar sobre los miembros en el JSON y crear una tarjeta para cada uno
    data.ClubIntegrantes.forEach(socio => {
      // Crear el div que contendrá la tarjeta
      const card = document.createElement('div');
      card.classList.add('business-card-horizontal');

      // Crear el lado izquierdo (foto del miembro)
      const cardLeft = document.createElement('div');
      cardLeft.classList.add('card-left');

      const memberPhoto = document.createElement('img');
      memberPhoto.classList.add('member-photo');
      memberPhoto.src = socio.UrlFotos;  // Usamos la URL de la foto desde el JSON
      memberPhoto.alt = `${socio.Nombre1}  ${socio.Nombre2} ${socio.Apellido1} ${socio.Apellido2}`;
     
      // Nombre completo debajo de la foto
     const memberName = document.createElement('p');
     memberName.classList.add('member-name');
     memberName.textContent = `${socio.Nombre1} ${socio.Nombre2} ${socio.Apellido1} ${socio.Apellido2}`;

      // Añadir la foto al lado izquierdo
      cardLeft.appendChild(memberPhoto);
      cardLeft.appendChild(memberName);

      // Crear el lado derecho (información del miembro)
      const cardRight = document.createElement('div');
      cardRight.classList.add('card-right');

      // Crear la información del club
      const clubInfo = document.createElement('div');
      clubInfo.classList.add('club-info');

      const clubLogo = document.createElement('img');
      clubLogo.classList.add('club-logo');
      clubLogo.src = 'Escudo Nuevo.png';  // Aquí puedes colocar la URL de tu logo
      clubLogo.alt = 'Club Logo';

      const clubName = document.createElement('h4');
      clubName.textContent = 'Club Nacional de Tiro N° 69 Almirante Blanco Encalada Olmue';

      clubInfo.appendChild(clubLogo);
      clubInfo.appendChild(clubName);

      // Crear la información del miembro
      const memberInfo = document.createElement('div');
      memberInfo.classList.add('member-info');

      const memberData = [
        
        { label: 'Número de socio', value: socio.NumSocio },           
        { label: 'Fono', value: socio.Fono },
        { label: 'Email', value: socio.Email },
        { label: 'Dirección', value: socio.Direccion },
        { label: 'F. Vencimiento', value: socio.FVencimiento },  
      ];

      memberData.forEach(data => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${data.label}:</strong> ${data.value}`;
        memberInfo.appendChild(p);
      });

      // Añadir la información del club y del miembro al lado derecho
      cardRight.appendChild(clubInfo);
      cardRight.appendChild(memberInfo);

      // Añadir ambos lados de la tarjeta al contenedor de la tarjeta
      card.appendChild(cardLeft);
      card.appendChild(cardRight);

      // Añadir la tarjeta al contenedor de las tarjetas
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
