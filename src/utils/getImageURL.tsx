export const getImageUrl = (index : number) => {
    const imageUrls = [
      '/pizzaBg.jpg',
      '/pizzaBg2.jpg',
      '/empanadasBg.jpg',
    ];
    return `${imageUrls[index]}`;
  };