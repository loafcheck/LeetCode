/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
   let tmp = [];
    
    for (let i = 0; i < image.length ; i++) {
        tmp[i] =[];
        for (let j = 0 ; j < image.length ; j++) {
            tmp[i][j] = image[i][image.length -1 - j]
            
            if(tmp[i][j] == 0) {
                tmp[i][j] = 1;
            } else {
                tmp[i][j] = 0 ;
            }
        }
    }
    
    image = tmp;
    return image; 
};