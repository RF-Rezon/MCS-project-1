/* eslint-disable react/prop-types */


const HomeContainer = ({children}) => {
    return (
        <div className="md:max-w-full sm:mx-auto sm:max-w-none md:mx-32">
            {children}
        </div>
    );
};

export default HomeContainer;