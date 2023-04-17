function MediaType() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const isTablet = /iPad|Android/i.test(navigator.userAgent);

  const computeReturnValue = () => {
    if (isMobile) {
      return "mobile";
    }

    if (isTablet) {
      return "tablet";
    }
    if (!isMobile && !isTablet) {
      return "desktop";
    }
  };

  return computeReturnValue();
}

export default MediaType;
