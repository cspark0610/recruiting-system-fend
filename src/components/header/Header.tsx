type HeaderProps = {
  url?: string;
  width: string;
  height: string;
};

const Header: React.FC<HeaderProps> = ({ url, width, height }) => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-7">
        <div className={`${width} ${height}`}>
          {url !== 'admin' ? (
            <img
              className="w-full laptop:mt-0 mobile:mt-10 bg-white"
              src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
              alt="Fulltimeforce logo"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
