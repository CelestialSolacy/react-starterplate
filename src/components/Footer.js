import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <p>
          Author Name
        </p>
        <p>
          All rights reserved
        </p>
      </div>
      <div className="footer-body">
        <p>
          Go to {' '}
          <a href="https://github.com/CelestialSolacy/react-starterplate">
            GitHub repository
          </a>
          {' '} for more information and acknowledgements
        </p>
      </div>
    </footer>
  );
}

export default Footer;
