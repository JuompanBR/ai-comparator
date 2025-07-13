const Loader: React.FC = () => {
    return (
        <>
            <div className="container-outer">
                <div className="style-scope community-question-set x-scope paper-spinner-0">
                    <div className="active loaderContainer style-scope paper-spinner">
                        <div className="spinner-layer layer-1 style-scope paper-spinner">
                            <div className="circle-clipper left style-scope paper-spinner"></div>
                            <div className="circle-clipper right style-scope paper-spinner"></div>
                        </div>
                        <div className="spinner-layer layer-2 style-scope paper-spinner">
                            <div className="circle-clipper left style-scope paper-spinner"></div>
                            <div className="circle-clipper right style-scope paper-spinner"></div>
                        </div>
                        <div className="spinner-layer layer-3 style-scope paper-spinner">
                            <div className="circle-clipper left style-scope paper-spinner"></div>
                            <div className="circle-clipper right style-scope paper-spinner"></div>
                        </div>
                        <div className="spinner-layer layer-4 style-scope paper-spinner">
                            <div className="circle-clipper left style-scope paper-spinner"></div>
                            <div className="circle-clipper right style-scope paper-spinner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Loader;