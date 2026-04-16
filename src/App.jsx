import Projetos from './components/Projetos';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Meu Portfólio Profissional</h1>
      </header>
      
      <main>
        {/* Aqui você pode adicionar um componente "Sobre" depois */}
        <section style={{ padding: '20px' }}>
          <h2>Sobre Mim</h2>
          <p>Estudante de desenvolvimento migrando para React!</p>
        </section>

        <hr />

        {/* Chamando o componente de projetos que você criou */}
        <Projetos />
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem' }}>
        <p>© 2026 - Feito com React + Vite</p>
      </footer>
    </div>
  );
}

export default App;