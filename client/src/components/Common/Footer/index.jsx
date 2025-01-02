import './Footer.style.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            Copyright &copy; {currentYear}{' '}
            <a href="https://arturbomtempo.dev/" rel="noreferrer" target="_blank">
                Artur Bomtempo
            </a>
            e{' '}
            <a href="https://www.leticiafranca.com.br/" rel="noreferrer" target="_blank">
                Letícia França
            </a>
            . Todos os direitos reservados.
        </footer>
    );
}
