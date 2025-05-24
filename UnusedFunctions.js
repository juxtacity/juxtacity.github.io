function trimMatrix(matrix, trimValue) {
    trimmed = false
    topbit = 0
    right = 0
    down = 0
    left = 0
    for (i = 0; trimmed == false; i++) {
        for (y = 0; y < matrix.length; y++) {
            if (matrix[y][0] != trimValue) {
                trimmed = true
                topbit = i
            }
        }

        if (!trimmed) {
            for (y = 0; y < matrix.length; y++) {
                matrix[y].splice(0, 1)
            }
        }
    }
    trimmed = false
    for (i = 0; trimmed == false; i++) {
        for (y = 0; y < matrix.length; y++) {
            if (matrix[y][matrix[y].length - 1] != trimValue) {
                trimmed = true
                bottom = i
            }
        }

        if (!trimmed) {
            for (y = 0; y < matrix.length; y++) {
                matrix[y].splice(matrix[y].length - 1, 1)
            }
        }
    }
    trimmed = false
    for (i = 0; trimmed == false; i++) {
        for (x = 0; x < matrix[0].length; x++) {
            if (matrix[0][x] != trimValue) {
                trimmed = true
                left = i
            }
        }

        if (!trimmed) {
            matrix.splice(0, 1)
        }
    }
    trimmed = false
    for (i = 0; trimmed == false; i++) {
        for (x = 0; x < matrix[0].length; x++) {
            if (matrix[matrix.length - 2][x] != trimValue) {
                trimmed = true
                right = i
            }
        }

        if (!trimmed) {
            matrix.splice(matrix.length - 2, 1)
        }
    }
    return [matrix, topbit, right, bottom, left]
}