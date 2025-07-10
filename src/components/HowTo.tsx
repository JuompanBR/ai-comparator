export const HowTo = () => {
    return (
        <>
            <h1 id="how-to" className="text-center font-bold text-[1.85rem] text-slate-800 -mt-5 pb-10">How to use</h1>
            <div className="container mx-auto px-4 relative w-full lg:w-[74.8%] mt-11">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
                        <span className="font-bold text-amber-600 text-lg">
                            Step 1
                        </span>
                        <span className="font-normal text-base lg:text-lg">Set the criteria to comparism criteria and adjust the weights</span>
                    </div>
                    <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
                        <span className="font-bold text-amber-600 text-lg">
                            Step 2
                        </span>
                        <span className="font-normal text-base lg:text-lg">Select the models to compare from the set proposed</span>
                    </div>
                    <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
                        <span className="font-bold text-amber-600 text-lg">
                            Step 3
                        </span>
                        <span className="font-normal text-base lg:text-lg">Tap on the "Compare" button, and find the results</span>
                    </div>
                </div>
            </div>
        </>
    );
};