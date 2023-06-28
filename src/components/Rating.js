import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as EmptyStarIcon } from "@heroicons/react/24/outline";

export default function Rating() {
    return (
        <div className="flex items-center -m-1">
            {Array.from({ length: 4}).map((_, index) => (
                <StarIcon key={index} className="w-6 h-6 flex-shrink-0 text-yellow-400" />
            ))}

            {Array.from({ length: 1}).map((_, index) => (
                <EmptyStarIcon key={index} className="w-6 h-6 flex-shrink-0 text-yellow-400" />
            ))}
        </div>
    )
}