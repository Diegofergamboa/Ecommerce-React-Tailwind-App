import PropTypes  from 'prop-types';

const Layout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout