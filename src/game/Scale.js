//used from: https://medium.com/@doomgoober/understanding-html-canvas-scaling-and-sizing-c04925d9a830
function Scale(canvas,ctx)
{
    let heightRatio = .4;
    canvas.height = canvas.width * heightRatio;

    const originalWidth = canvas.width;
    const originalHeight = canvas.height;

    let dimensions = getObjectFitSize(
        true,
        canvas.clientWidth,
        canvas.clientHeight,
        canvas.width,
        canvas.height
      );

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;

    let ratio = Math.min(
        canvas.clientWidth / originalWidth,
        canvas.clientHeight / originalHeight
    );
    ctx.scale(ratio * dpr, ratio * dpr); 
}

// adapted from: https://www.npmjs.com/package/intrinsic-scale
function getObjectFitSize(
    contains /* true = contain, false = cover */,
    containerWidth,
    containerHeight,
    width,
    height
    ) {
    var doRatio = width / height;
    var cRatio = containerWidth / containerHeight;
    var targetWidth = 0;
    var targetHeight = 0;
    var test = contains ? doRatio > cRatio : doRatio < cRatio;
    
    if (test) {
        targetWidth = containerWidth;
        targetHeight = targetWidth / doRatio;
    } else {
        targetHeight = containerHeight;
        targetWidth = targetHeight * doRatio;
    }
    
    return {
        width: targetWidth,
        height: targetHeight,
        x: (containerWidth - targetWidth) / 2,
        y: (containerHeight - targetHeight) / 2
    };
    }

export default Scale;