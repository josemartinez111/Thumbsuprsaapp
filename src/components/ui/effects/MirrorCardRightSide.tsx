//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { CalendarDays, Heart, Users } from 'lucide-react';
//     COMPONENTS > UI > EFFECTS >> MIRROR-CARD-RIGHT-SIDE.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment, FunctionComponent, ReactElement } from 'react';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type MirrorCardRightSideType = {
	icon: ReactElement;
	title: string;
	description: string;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const MirrorCardRightSide: FunctionComponent = () => {
	// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
	const CONTENT_ITEMS: Array<MirrorCardRightSideType> = [
		{
			icon: <CalendarDays className="mr-3 h-6 w-6 text-yellow-400" />,
			title: 'Weekly Food Distribution',
			description: 'Every Tuesday & Thursday',
		},
		{
			icon: <Users className="mr-3 h-6 w-6 text-green-400" />,
			title: 'Community Programs',
			description: 'Youth & Family Support',
		},
		{
			icon: <Heart className="mr-3 h-6 w-6 text-red-400" />,
			title: 'Volunteer Opportunities',
			description: 'Join Our Mission',
		},
	];
	// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
	return (
		<Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */ }
			<div className="w-full md:w-1/2 md:pl-12">
        <div className="rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
          <h2 className="mb-6 text-2xl font-semibold">Our Community Impact</h2>
          <ul className="space-y-4">
            { CONTENT_ITEMS.map((item, index) => (
	            <li key={ index } className="flex items-center">
                { item.icon }
		            <div>
                  <span className="block font-semibold">{ item.title }</span>
                  <span className="text-sm text-gray-300">{ item.description }</span>
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
			{/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */ }
    </Fragment>
	);
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
