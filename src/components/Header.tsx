
import { RulerDimensionLine, MoveRight } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export const Header = () => {

    const location = useLocation();
    const isComparePage = location.pathname === '/compare';

    return (
        <header className="h-[90px] w-full flex justify-between items-center px-20 py-6">
            <Link to="/"><RulerDimensionLine strokeWidth={1.5} size={48} className="text-yellow-600" /></Link>
            {!isComparePage && (
                <Link
                    to="/compare"
                    className="text-sm flex space-x-3 text-slate-900 items-center underline hover:opacity-80 transition-all"
                >
                    <span>Compare your AIs</span>
                    <MoveRight className="arrow block relative" strokeWidth={1.5} />
                </Link>
            )}
        </header>
    );
};