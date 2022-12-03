import React from 'react';

function Badge({content,icon}) {
    return(
	<p className=' flex items-center gap-2 w-fit m-2 p-2 rounded-md bg-white/50 text-xs hover:bg-white/80 hover:text-[#17171A] '>
		{icon}
        {content}
	</p>
    );
}

export default Badge;