export const HowTo = () => {
    return (
        <>
            <h1 id="how-to" className="text-center font-bold text-[1.7rem] text-slate-700 -mt-9">How to use</h1>
            <div className="container mx-auto px-4 relative w-full lg:w-[80%] mt-12">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-slate-700 p-4 rounded flex flex-col gap-3">
                        <span className="font-bold text-amber-600">
                            Step 1
                        </span>
                        <span className="font-normal text-base">Set the criteria to comparism criteria and adjust the weights</span>
                    </div>
                    <div className="    text-slate-700 p-4 rounded flex flex-col gap-3">
                        <span className="font-bold text-amber-600">
                            Step 2
                        </span>
                        <span className="font-normal text-base">Select the models to compare from the set proposed</span>
                    </div>
                    <div className="text-slate-700 p-4 rounded flex flex-col gap-3">
                        <span className="font-bold text-amber-600">
                            Step 3
                        </span>
                        <span className="font-normal text-base">Tap on the "Compare" button, and find the results</span>
                    </div>
                </div>
            </div>
        </>
    );
};