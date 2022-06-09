const handleScroll = () => {
	if (window.pageYOffset < 80) setIsSticky('');
	if (window.pageYOffset > 80) setIsSticky('sticy box-shadow');
	if (window.pageYOffset >= 600) setIsSticky('box-shadow');
};

export default { handleScroll };
