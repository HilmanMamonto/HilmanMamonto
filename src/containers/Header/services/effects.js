import useEffect from 'react';

const Effects = useEffect(() => {
	window.addEventListener('click', handleClickOutside);
	window.addEventListener('scroll', handleScroll);

	return () => {
		document.removeEventListener('click', handleClickOutside);
	};
});

export default { Effects };
