function rectangle(width, height, color) {
    
    color = color[0].toUpperCase(0) + color.slice(1);

    let rectangle = {
        width,
        height,
        color,
        calcArea: () => {
            return width * height;
        }
    };

    return rectangle;

};
