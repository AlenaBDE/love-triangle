/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences) {
    var aa = preferences.slice();
    var count = 0;
    var a, b, c;

    for (var i = 0; i < preferences.length; i++) {

        a = -1;
        b = -1;
        c = -1;

        if ((aa[i] != -1) && (preferences[i] > 0)) var a = preferences[i];
        if ((aa[a - 1] != -1) && (preferences[a - 1] > 0)) var b = preferences[a - 1];
        if ((aa[b - 1] != -1) && (preferences[b - 1] > 0)) var c = preferences[b - 1];

        if ((c - 1 == i) && (a != b && b != c) && (a > 0 && b > 0 && c > 0 )) {
            aa[a - 1] = -1;
            aa[b - 1] = -1;
            aa[c - 1] = -1;
            count++;
        }

    }
    return count;
};
