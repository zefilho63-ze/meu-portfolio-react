import React from 'react';

export default function Projetos() {
  // Este é o array de objetos (Requisito da atividade)
  const listaProjetos = [
    { id: 1, nome: "Meu Primeiro HTML", link: "#" },
    { id: 2, nome: "Projeto CSS Responsivo", link: "#" },
    { id: 3, nome: "Portfólio em React", link: "#" }
  ];

  return (
    <section style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>
      <ul>
        {listaProjetos.map((projeto) => (
          <li key={projeto.id} style={{ marginBottom: '10px' }}>
            <strong>{projeto.nome}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}