import React from 'react';
import Error404 from '../../components/Error/Error';

function Error() {
  return (
    <main>
      <Error404
        h1="404"
        p="Oups! La page que vous demandez n'existe pas."
        href="Retourner sur la page d'accueil"
      />
    </main>
  );
}

export default Error;
